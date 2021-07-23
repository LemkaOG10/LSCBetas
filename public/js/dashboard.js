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

    const nav_accueil = document.querySelector(".nav_accueil");

    // Ajout de la class définit à la class définis précédemment

    nav_accueil.classList.add("nav_active");

}

// Appel de la fonction collapse

nav_active();