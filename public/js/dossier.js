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

// Fonction qui permet d'ouvrir et fermer la nav quand on clique sur le boutton menu'

const button_continuer_dossier = document.querySelector("#button_continuer_dossier");
const container_dossier_info = document.querySelector(".container_dossier_info");
const background_opacity = document.querySelector(".background_opacity");
const container_change_username = document.querySelector(".container_change_username");
const centrage = document.querySelector(".centrage");

// Fonction qui permet de donner suite lorsqu'on veut déposer un dossier'

function continuer_dossier() {

    // Ici on cache les informations essentielles au dossier et on montre le formulaire

    button_continuer_dossier.addEventListener("click", function () {
        container_dossier_info.style.display = "none";
        background_opacity.style.display = "none";
        container_change_username.style.display = "flex";
        centrage.style.height = "900px";

    });
};

// Appel de la fonction collapse

continuer_dossier();
