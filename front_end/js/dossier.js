// Déclaration des variables pour récupérer les classes / ID

let idBouttonPret = document.getElementById("bouttonpret");

let idBouttonEnvoyer = document.getElementById("bouttonenvoyer");

let bouttonPret = document.getElementsByClassName("Englobebouttonfixe")[0];

let bouttonEnvoyer = document.getElementsByClassName("Englobebouttonfixe3")[0];

let inputGoogleDrive = document.getElementsByClassName("field")[0];

let conditionDossier = document.getElementsByClassName("question1")[0];

let englobeDossier = document.getElementsByClassName("englobedossier")[0];

let cadredossier = document.getElementsByClassName("cadredossier")[0];

let verifDossier = document.getElementsByClassName("flechedossier")[0];

let verifDossier2 = document.getElementsByClassName("flechedossier2")[0];

let lienGoogleDrive = document.getElementsByClassName("fondliengoogle")[0];

let recupInput = document.getElementsByClassName("liengoogle")[0];

// Fonction qui permet d'afficher l'input lorsqu'on appuie sur le boutton "pret", de cacher le boutton pret et d'afficher le boutton envoyer

function input() {
    idBouttonPret.addEventListener("click", function () {
        bouttonPret.style.display = "none"
        idBouttonPret.style.display = "none"
        inputGoogleDrive.style.display = "flex";
        bouttonEnvoyer.style.display = "flex";
    });
};

// Appel de la fonction input

input();

// Fonction qui récupère le lien google saisie dans l'input et le renvoie la parti détail du dossier en cliquant sur la flèche

const saisieinput = document.getElementById("sasieinput")

saisieinput.onchange = function() {
  recupInput.innerHTML = this.value
}

// Fonction qui permet d'envoyer le lien Google Drive lorqu'on clique sur Envoyer

function envoyer() {
    idBouttonEnvoyer.addEventListener("click", function () {
        inputGoogleDrive.style.display = "none";
        conditionDossier.style.display = "none";
        idBouttonEnvoyer.style.display = "none";
        englobeDossier.style.display = "flex";
    });

    // Permet d'ouvrir le menu ou se trouve le lien Google Docs lorsqu'on clique sur la petite flèche

    verifDossier.addEventListener("click", function () {
        verifDossier2.style.display = "flex";
        verifDossier.style.display = "none";
        lienGoogleDrive.style.display = "flex";
        cadredossier.style.borderRadius = "10px 10px 0px 0px";
    });

    // Permet d'ouvrir le menu ou se trouve le lien Google Docs lorsqu'on clique sur la petite flèche

    verifDossier2.addEventListener("click", function () {
        verifDossier.style.display = "flex";
        verifDossier2.style.display = "none";
        lienGoogleDrive.style.display = "none";
        cadredossier.style.borderRadius = "10px 10px 10px 10px";
    });
};

// Appel de la fonction envoyer

envoyer();