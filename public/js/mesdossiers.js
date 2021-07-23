// Fonction qui récupère le lien google saisie dans l'input et le renvoie la parti détail du dossier en cliquant sur la flèche

/*
const saisieinput = document.getElementById("sasieinput")

saisieinput.onchange = function() {
  recupInput.innerHTML = this.value
}
*/

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

function nav_active() {

    // Définition de la class où on veut y ajouter une autre class

    const nav_dossier = document.querySelector(".nav_dossier");

    // Ajout de la class définit à la class définis précédemment

    nav_dossier.classList.add("nav_active");

}

// Appel de la fonction collapse

nav_active();

// Fonction qui permet de donner suite lorsqu'on veut déposer un dossier'

function add_dossier() {

    // Fonction qui permet d'ouvrir et fermer la nav quand on clique sur le boutton menu'

    const button_continuer_dossier = document.querySelector("#button_continuer_dossier");
    const center_folder_info = document.querySelector(".center_folder_info");
    const center_folder_send = document.querySelector(".center_folder_send");
    const open_change_password = document.querySelector("#open_change_password");
    const table_wrapper = document.querySelector(".table-wrapper");
    const centremilieu = document.querySelector(".centremilieu");

    // Ici on montre les informations essentielles au dossier

    open_change_password.addEventListener("click", function () {
        center_folder_info.style.display = "flex";
        center_folder_send.style.display = "none";
        centremilieu.style.overflow = "hidden";
        table_wrapper.style.opacity = "0.5";

    });

    // Ici on cache les informations essentielles au dossier et on montre le formulaire

    button_continuer_dossier.addEventListener("click", function () {
        center_folder_info.style.display = "none";
        center_folder_send.style.display = "flex";
        centremilieu.style.overflow = "hidden";
        table_wrapper.style.opacity = "0.5";

    });
};

// Appel de la fonction add_dossier

add_dossier();

// Fonction qui permet de fermer le container qui s'affiche lorsqu'on change d'adresse mail

function open_close_change_mail_password() {

    // Définition des classes

    const button_annuler = document.querySelector(".annuler");
    const button_close = document.querySelector(".container_close");
    const center_folder_info = document.querySelector(".center_folder_info");
    const center_folder_send = document.querySelector(".center_folder_send");
    const button_close2 = document.querySelector("#container_close2");
    const table_wrapper = document.querySelector(".table-wrapper");

    // Ici on ferme le container folder info quand on clique sur la croix

    button_close.addEventListener("click", function () {
        center_folder_info.style.display = "none";
        center_folder_send.style.display = "none";
        table_wrapper.style.opacity = "1";
    });

    // Ici on ferme le container send folder quand on clique sur la croix

    button_close2.addEventListener("click", function () {
        center_folder_info.style.display = "none";
        center_folder_send.style.display = "none";
        table_wrapper.style.opacity = "1";
    });

    // Ici on ferme le container email quand on clique sur le button annuler

    button_annuler.addEventListener("click", function () {
        center_folder_info.style.display = "none";
        center_folder_send.style.display = "none";
        table_wrapper.style.opacity = "1";
    });

};

// Appel de la fonctione close_change_email

open_close_change_mail_password()

// Fonction qui permet de fermer le container qui s'affiche lorsqu'on change d'adresse mail

function open_close_background() {

    // Définition des classes

    const voir_background = document.querySelector(".voir_background");
    const center_background_info = document.querySelector(".center_background_info");
    const close_background = document.querySelector("#close_background");
    const button_fermer_background = document.querySelector("#button_fermer_background");
    const table_wrapper = document.querySelector(".table-wrapper");

    // Ici on ouvre le container qui contient le lien du background quand on clique sur plus

    voir_background.addEventListener("click", function () {
        center_background_info.style.display = "flex";
        table_wrapper.style.opacity = "0.5";
    });

    // Ici on ferme le container qui contient le lien du background quand on clique sur le boutton fermer

    button_fermer_background.addEventListener("click", function () {
        center_background_info.style.display = "none";
        table_wrapper.style.opacity = "1";
    });

    // Ici on ferme le container qui contient le lien du background quand on clique sur la croix
    close_background.addEventListener("click", function () {
        center_background_info.style.display = "none";
        table_wrapper.style.opacity = "1";
    });

};

// Appel de la fonctione close_change_email

open_close_background()