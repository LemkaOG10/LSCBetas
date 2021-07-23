// Fonction qui permet d'ouvrir et fermer la nav quand on clique sur le boutton menu'

const button_menu = document.querySelector(".btn-dark");
const button_open = document.querySelector("#button_open");
const navigation = document.querySelector(".nav");
const footer_navigation = document.querySelector(".footer_nav");
const navigation_superficielle = document.querySelector(".navigation_superficielle");
const navigation_boutton_superficielle = document.querySelector(".navigation_boutton_superficielle");
const fond_navigation = document.querySelector(".fond_navigation");

// Fonction qui permet d'ouvrir et fermer la nav quand on clique sur le boutton menu'

function collapse() {

    // Ici on ferme la navigation latérale

    button_menu.addEventListener("click", function () {
        button_menu.style.display = "none";
        button_open.style.display = "flex";
        navigation.style.display = "none";
        footer_navigation.style.display = "none";
        navigation_superficielle.style.display = "none";
        navigation_boutton_superficielle.style.display = "flex";
        fond_navigation.style.display = "none";
    });

    // Ici on ouvre la navigation latérale

    button_open.addEventListener("click", function () {
        button_menu.style.display = "flex";
        button_open.style.display = "none";
        navigation.style.display = "flex";
        footer_navigation.style.display = "flex";
        navigation_superficielle.style.display = "flex";
        navigation_boutton_superficielle.style.display = "none";
        fond_navigation.style.display = "flex";
    });
};

// Appel de la fonction collapse

collapse();

// Permet d'ajouter un effet active dans la nav en fonction de la page où on se trouve

function nav_active () {

// Définition de la class où on veut y ajouter une autre class

const nav_profil = document.querySelector(".nav_profil");

// Ajout de la class définit à la class définis précédemment

nav_profil.classList.add("nav_active");

}

// Appel de la fonction nav_ative

nav_active();

// Définition de la class qu'on va hover

const bi = document.querySelector(".bi-three-dots");
const info_more = document.querySelector(".info_more");

// Fonction qui permet d'afficher / retirer la div info

function info_more_hover() {

    // Affichage de la div info

    bi.addEventListener("mouseenter", function () {
        info_more.style.display = "flex"
    });

    // Retrait de la div info

    bi.addEventListener("mouseleave", function () {
        info_more.style.display = "none"
    });
};

// Appel de la fonction collapse

info_more_hover();

// Fonction qui permet de fermer le container qui s'affiche lorsqu'on change d'adresse mail

function open_close_change_mail_password() {

    // Définition des classes

    const button_annuler = document.querySelector(".annuler");
    const button_annuler2 = document.querySelector("#annuler2");
    const button_close = document.querySelector(".container_close");
    const button_close2 = document.querySelector("#container_close2");
    const div_background = document.querySelector(".background_opacity");
    const container_change_username = document.querySelector(".container_change_username");
    const open_change_email = document.querySelector("#open_change_email");
    const open_change_password = document.querySelector("#open_change_password");
    const container_change_password = document.querySelector(".container_change_password");

    // Ici on ouvre le container quand on clique sur le boutton modifier adresse mail

    open_change_email.addEventListener("click", function () {
        div_background.style.display = "flex";
        container_change_username.style.display = "flex";
        container_change_username.style.height = "225px";
    });

    // Ici on ouvre le container quand on clique sur le boutton modifier mot de passe

    open_change_password.addEventListener("click", function () {
        div_background.style.display = "flex";
        container_change_password.style.display = "flex";
    });
    
    // Ici on ferme le container quand on clique sur la div en arrière plan

    div_background.addEventListener("click", function () {
        div_background.style.display = "none";
        container_change_username.style.display = "none";
        container_change_password.style.display = "none";
    });

    // Ici on ferme le container mail quand on clique sur la croix

    button_close.addEventListener("click", function () {
        div_background.style.display = "none";
        container_change_username.style.display = "none";
        container_change_password.style.display = "none";
    });

    // Ici on ferme le container password quand on clique sur la croix

    button_close2.addEventListener("click", function () {
        div_background.style.display = "none";
        container_change_password.style.display = "none";
    });

    // Ici on ferme le container email quand on clique sur le button annuler

    button_annuler.addEventListener("click", function () {
        div_background.style.display = "none";
        container_change_username.style.display = "none";
    });

    // Ici on ferme le container password quand on clique sur le button annuler

    button_annuler2.addEventListener("click", function () {
        div_background.style.display = "none";
        container_change_password.style.display = "none";
    });

};

// Appel de la fonctione close_change_email

open_close_change_mail_password()