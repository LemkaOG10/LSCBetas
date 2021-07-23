const config = require('./config.json');
const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const https = require('https');
const bodyParser = require("body-parser");
const { dirname } = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;
const ejs = require("ejs");
const methodOverride = ("method-override");
const flash = require('connect-flash');
const bcrypt = require("bcrypt");
const randToken = require("rand-token");
const nodemailer = require("nodemailer");
const session = require("express-session");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require("passport-local-mongoose");
const FormData = require('form-data');
const fetch = require('node-fetch');

// Models

const User = require("./back_end/models/user");
const Motdepasseoublie = require("./back_end/models/motdepasseoublie");
const { nextTick } = require("process");
const { Router } = require("express");
const { profile } = require('console');

// EJS

app.set("view engine", "ejs")

// Session

app.use(require('express-session')(config.session))

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Connexion à la base de donnée Mongoose

mongoose.connect( process.env.password_mongoose , {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'Echec de la connextion à Mongoose'));
db.once('open', function () {
    console.log("Connexion à Mongoose réussi !")
});

// Passport Local Mongoose

passport.use(new LocalStrategy({
    usernameField: 'email',
}, User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// Permet de récupérer les valeurs des inputs en utilisant le module 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }));

// Initialisation de flash
app.use(flash());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

// Permet à l'application de récupérer les fichiers css / js / image etc.. du dossier 'public'

app.use(express.static(path.join(process.cwd(), "public")));

// Permet de crée un utilisateur à son inscription et l'entre dans la base donnée

app.post("/inscription", function (req, res) {

    const newUser = new User({

        email: req.body.email,
        pseudo: req.body.pseudo,

        questionnaire: {
            encours: false,
            reussi: false,
            score: 0,
        },

        discord: {
            username: "Inconnu",
            discriminator: "Inconnu",
            id_discord: "Inconnu",
            avatar: "https://img1.freepng.fr/20180624/ivq/kisspng-business-organization-computer-software-tom-clancy-unknown-person-5b2f72c6649235.833799281529836230412.jpg",
        },

        grade: {
            fondateur: false,
            administrateur: false,
            moderateur: false,
            recruteur: false,
        },
    });

    User.register(newUser, req.body.password, function (err, user) {

    const errinscription = req.flash("error", "Un compte existe déjà avec cette adresse email !");

        if (err) {
            res.redirect("/inscription")
            req.flash("error", "Un compte existe déjà avec cette adresse email !");
            console.log(err);
        } else {
            const successinscription = req.flash("success", "Inscription réussi !");

            passport.authenticate("local", {failureFlash: "" + errinscription, successFlash: "" + successinscription}) (req, res, function () {
                res.redirect("/connexion");
                console.log(req.body.email);
                console.log(req.body.password);
                console.log("Inscription réussi !");
            })
        }
    })
});

// Permet de connecté un utilisateur et vérifier s'il est dans la base donnée

app.post("/connexion", function (req, res) {

    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    req.login(user, function (err) {

        if (err) {
            console.log(err);
        } else {
            
            passport.authenticate("local", { failureRedirect: '/connexion', failureFlash: "" + req.flash("error", 'Compte inéxistant ou coordonnées incorrect !')}) (req, res, function () {
                req.flash("success", 'Bienvenu à toi sur LS Criminal !');
                res.redirect("/dashboard");
            });
        }
    })

});

// Permet de déconnecter un utilisateur et détruire sa session

app.get("/deconnexion", function (req, res) {
    req.logout();
    res.redirect("/index");
});

// Mot de passe Oublié

app.post("/motdepasseoublie", function (req, res) {
    User.findOne({ email: req.body.email }, function (err, userFound) {
        if (err) {
            console.log(err);
            res.redirect("/connexion")
        } else {
            const token = randToken.generate(16);
            Motdepasseoublie.create({
                email: userFound.email,
                motdepasseoublieToken: token,
                motdepasseoublieExpires: Date.now() + 3600000,
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'LSCriminal.RolePlay@gmail.com',
                    pass: process.env.password_gmail
                }
            });

            const mailOptions = {
                from: 'LSCriminal.RolePlay@gmail.com',
                to: req.body.email,
                subject: 'Réinitialisez votre mot de passe',
                text: 'Clique sur ce lien pour réinitialiser ton mot de passe : http://localhost:8080/reinitialisermotdepasse/' + token

            }

            console.log("Mail prêt à être envoyé !")

            transporter.sendMail(mailOptions, function (err, response) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect("/connexion")
                    console.log("Mail envoyé !")
                }
            });
        }
    })

});

// Réinitialisez mot de passe

app.get("/reinitialisermotdepasse/:token", function (req, res) {
    Motdepasseoublie.findOne({
        motdepasseoublieToken: req.params.token,
        motdepasseoublieExpires: { $gt: Date.now() }
    }, function (err, obj) {
        if (err) {
            console.log("Token expiré");
            res.redirect("/connexion")
        } else {
            res.render("pages/reinitialisermotdepasse", { token: req.params.token })
        }
    })
});

app.post("/reinitialisermotdepasse/:token", function (req, res) {
    Motdepasseoublie.findOne({
        motdepasseoublieToken: req.params.token,
        motdepasseoublieExpires: { $gt: Date.now() }
    }, function (err, obj) {
        if (err) {
            console.log("Token expiré");
            res.redirect("/connexion")
        } else {
            if (req.body.newpassword == req.body.newpassword2) {
                console.log("Les deux mot de passe correspondent, passage à l'étape suivante");
                User.findOne({ "email": obj.email }, function (err, user) {
                    if (err) {
                        console.log(err);
                    } else {
                        user.setPassword(req.body.newpassword, function (err) {
                            if (err) {
                                console.log(err);
                            } else {
                                user.save();
                                const updateReset = {
                                    motdepasseoublieToken: null,
                                    motdepasseoublieExpires: null,
                                }
                                Motdepasseoublie.findOneAndUpdate({
                                    motdepasseoublieToken: req.params.token
                                }, updateReset, function (err, obj1) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        res.redirect("/connexion")
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });
});

// Renvoie la page pour lier son compte discord

app.get('/redirect', isLoggedIn, async (req, resp) => {

    console.log("Je suis entrée dans la route /redirect")

    const data = await fetch(`https://discord.com/api/users/@me`, { headers: { Authorization: `Bearer ${req.session.bearer_token}` } }); // Récupération des données de l'utilisateur
    const json = await data.json();

    if (!json.username) { // Si le jeton a expiré ou que l'utilisateur n'a pas donné l'accés {
        console.log("il n'a pas de !json.username")
        resp.redirect('/login') // Redirection vers le dashboard
    } else if (!req.session.bearer_token) {
        console.log("il n'a pas de !req.session.bearer_token")
        resp.redirect('/login') // Redirect vers la route login pour liée son discord
    } else {
        console.log("il a un req.session.bearer_token")
        resp.redirect('/login') // Redirect vers la route login pour liée son discord
    }

    /*
resp.send(`<h1>Hello, ${json.username}#${json.discriminator}!</h1>` +
          `<img src="https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512">`) // Show user's nametag and avatar
    */

})

app.get('/auth/redirect', isLoggedIn, async (req, resp) => {

    console.log("Je suis entrée dans la route /auth/redirect")

    const accessCode = req.query.code;

    if (!accessCode) // If something went wrong and access code wasn't given
        return console.log('No access code specified');

    // Création d'un formulaire pour faire une demande
    const data = new FormData();
    data.append('client_id', config.oauth2.client_id);
    data.append('client_secret', config.oauth2.secret);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', config.oauth2.redirect_uri);
    data.append('scope', 'identify');
    data.append('code', accessCode);

    // Faire une demande à oauth2/token pour obtenir le jeton du porteur
    const json = await (await fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: data })).json();
    req.session.bearer_token = json.access_token;

    const data2 = await fetch(`https://discord.com/api/users/@me`, { headers: { Authorization: `Bearer ${req.session.bearer_token}` } }); // Récupération des données de l'utilisateur
    const json2 = await data2.json();

    User.exists({ "discord.id_discord": json2.id }, function (err, find) {

        console.log(find)

        if (err) {
            console.log(err)
            console.log("Erreur frere")

        } else if (find == true) {

            console.log("Quelqu'un à déjà liée un compte avec ce compte discord")

        } else {

            User.updateMany({ "_id": req.user.id }, {
                "discord.username": json2.username,
                "discord.discriminator": json2.discriminator,
                "discord.id_discord": json2.id,
                "discord.avatar": "https://cdn.discordapp.com/avatars/" + json2.id + "/" + json2.avatar + "?size=512"

            }, function (err) {

                if (err) {
                    console.log(err);
                } else {
                    console.log("Données Discord mis à jour !")
                }
            });
        }
    })


    resp.redirect('/dashboard'); // Redirection vers le dashboard après la liaison du discord

});

app.get('/login', (req, res) => {

    console.log("Je suis entrée dans la route /login")

    // Redirecting to login url
    res.redirect(`https://discord.com/api/oauth2/authorize` +
        `?client_id=${config.oauth2.client_id}` +
        `&redirect_uri=${encodeURIComponent(config.oauth2.redirect_uri)}` +
        `&response_type=code&scope=${encodeURIComponent(config.oauth2.scopes.join(" "))}`)
})

// A supprimer

app.get("/error", function (req, res) {
    res.render("partials/error");
});

// Renvoie la page d'accueil

app.get("/", function (req, res) {
    res.render("pages/index");
});

// Renvoie la page d'accueil

app.get("/index", function (req, res) {
    res.render("pages/index");
});

// Renvoie la page Connexion lorsqu'on clique sur le bouton Whitelist

app.get("/connexion", function (req, res) {
    res.render("pages/connexion");
});

// Renvoie la page Inscription lorsqu'on clique sur le bouton S'inscrire

app.get("/inscription", function (req, res) {
    res.render("pages/inscription");
});

// Renvoie la page Mot de passe oublié lorsqu'on clique sur le bouton Mot de passe oublié

app.get("/motdepasseoublie", function (req, res) {
    res.render("pages/motdepasseoublie");
});

// Renvoie la page dashboard lorsqu'on se connecte

app.get("/dashboard", isLoggedIn, function (req, res) {
    console.log("Connexion Réussi");
    // console.log(req.user);
    res.render("pages/dashboard");
});

// Renvoie la page Mon Profil lorsqu'on clique sur Mon Profil

app.get("/monprofil", isLoggedIn, function (req, res) {
    res.render("pages/monprofil");
});

// Renvoie la page Modifier Mot De Passe lorsqu'on clique sur Modifier Mot De Passe

app.get("/modifiermotdepasse", isLoggedIn, function (req, res) {
    res.render("pages/modifiermotdepasse");
});

// Renvoie la page Questionnaire lorsqu'on clique sur Questionnaire

app.get("/questionnaire", isLoggedIn, function (req, res) {
    res.render("pages/questionnaire");
});

// Renvoie la page Dossier lorsqu'on clique sur Dossier

app.get("/dossier", isLoggedIn, function (req, res) {
    res.render("pages/dossier");
});

// Renvoie la page Dossier lorsqu'on clique sur Dossier

app.get("/mesdossiers", isLoggedIn, function (req, res) {
    res.render("pages/mesdossiers");
});

// Fonction qui permet de vérifier si on est connecté ou non

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash("error", "Rend pas fou, connecte toi d'abord !");
        res.redirect("/connexion");
    }
};

app.listen(8080, function () {
    console.log(`Server On !`);
});