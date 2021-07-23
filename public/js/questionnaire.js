// Fonction qui permet d'afficher la deuxième parti du questionnaire lorsqu'on clique dessus, sinon la deuxième parti est affiché et elle reste comme tel

const questionnairePremiere = document.getElementsByClassName("fondformulaire")[0];

const bouttonSuite = document.getElementById("bouttonsuite");

const questionnaireDeuxieme = document.getElementsByClassName("fondformulaire2")[0];

bouttonSuite.addEventListener("click", function () {
    questionnairePremiere.style.display = "none";
    questionnaireDeuxieme.style.display = "flex";
    console.log(questionnaireDeuxieme);
});

// Tableau qui regroupe les id des bonnes réponses et des mauvaise réponses du questionnaire

const bonneReponse = [
    "reponse2", "reponse7", "reponse10",
    "reponse14", "reponse20", "reponse24",
    "reponse1_2", "reponse8_2", "reponse9_2",
    "reponse14_2", "reponse18_2", "reponse22_2",
];

const mauvaiseReponse = [
    "reponse1", "reponse3", "reponse4", "reponse5", "reponse6", "reponse8",
    "reponse9", "reponse11", "reponse12", "reponse13", "reponse15", "reponse16",
    "reponse17", "reponse18", "reponse19", "reponse21", "reponse22", "reponse23",
    "reponse2_2", "reponse3_2", "reponse4_2", "reponse5_2", "reponse6_2", "reponse7_2",
    "reponse10_2", "reponse11_2", "reponse12_2", "reponse13_2", "reponse15_2", "reponse16_2",
    "reponse17_2", "reponse19_2", "reponse20_2", "reponse21_2", "reponse23_2", "reponse24_2",
];

// Fonction qui permet de parcourir les index des id du tableau bonneReponse et d'ajouter + 1 pts à chaque bonneReponse sinon -1 Pts

let point = 0;

const pointObjectif = bonneReponse.length - 1

function bonneCheckCase() {

    for (let i = 0; i < bonneReponse.length; i++) {

        const indexBonneReponse = bonneReponse[i];

        const idBonneReponseCheck = document.getElementById(indexBonneReponse);

        // Fonction qui permet d'ajouter 1 Pts à chaque fois que les ID du tableau bonneReponse sont coché, Sinon quand elle sont décoché - 1 Pts.

        idBonneReponseCheck.addEventListener('change', function () {

            if (idBonneReponseCheck.checked == true) {
                point = point + 1;
                //    console.log(indexBonneReponse + " à été coché, le score est de " + point);
            } else {
                point = point - 1;
                //    console.log(indexBonneReponse + " à été dé-coché, le score est de " + point)
            }
        });
    };
};

function mauvaiseCheckCase() {

    for (let t = 0; t < mauvaiseReponse.length; t++) {

        const indexmauvaiseReponse = mauvaiseReponse[t];

        const idmauvaiseReponseCheck = document.getElementById(indexmauvaiseReponse);

        // Fonction qui permet de retirer 1 Pts à chaque fois que les ID du tableau mauvaiseReponse sont coché, Sinon quand elle sont décoché + 1 Pts.

        idmauvaiseReponseCheck.addEventListener('change', function () {

            if (idmauvaiseReponseCheck.checked == true) {
                point = point - 1;
                //    console.log(indexmauvaiseReponse + " à été coché, le score est de " + point);
            } else {
                point = point + 1;
                //    console.log(indexmauvaiseReponse + " à été dé-coché, le score est de " + point)
            }
        });
    }
}

// Appel de la fonction bonneCheckCase et mauvaiseCheckCase

mauvaiseCheckCase();
bonneCheckCase();

// Fonction qui permet d'afficher le résultat du questionnaire en cas d'échec

const resultat = document.getElementsByClassName("resultatquestionnaire")[0];

const bouttonTerminer = document.getElementById("bouttonterminer");

const fondFormulaire2 = document.getElementsByClassName("fondformulaire2")[0];

const question = document.getElementsByClassName("question1");

const resultatText = document.getElementsByClassName("resultattext")[0];

const englobeBouttonFixe3 = document.getElementsByClassName("Englobebouttonfixe3")[0];

const centremilieu = document.getElementsByClassName("centremilieu")[0];

const formulaire2 = document.getElementsByClassName("formulaire2")[0];

const bouttonDossier = document.getElementById("bouttondossier");

bouttonTerminer.addEventListener("click", function () {

    if (point < pointObjectif) {

        // Boucle qui permet d'attribuer un stye à chaque div de la const question

        for (i = 0; i < question.length; i++) {
            question[i].style.display = "none";
        }

        resultat.style.display = "flex";
        bouttonTerminer.style.display = "none";
        fondFormulaire2.style.paddingTop = "0px";
        fondFormulaire2.style.width = "100%";
        fondFormulaire2.style.overflow = "hidden";
        centremilieu.style.height = "1400px";
        formulaire2.style.height = "1150px";

        if (point < 0) {
            point = 0
        }

        resultatText.innerHTML = "Dommage, vous avez échoué ! Vous pouvez réessayer dans 6h ! <br> Votre note est de : " + point + " / " + bonneReponse.length + "<br> Pas de secret, pour réussir le réglement est ton amis !";

    } else {

        // Boucle qui permet d'attribuer un stye à chaque div de la const question

        for (i = 0; i < question.length; i++) {
            question[i].style.display = "none";
        }

        resultat.style.display = "flex";
        resultat.style.backgroundColor = "#0b5400";
        bouttonTerminer.style.display = "none";
        fondFormulaire2.style.paddingTop = "0px";
        fondFormulaire2.style.width = "100%";
        fondFormulaire2.style.overflowY = "hidden";
        centremilieu.style.height = "1400px";
        formulaire2.style.height = "1150px";
        resultatText.innerHTML = "Bravo, vous avez réussis le questionnaire ! <br> Votre note est de : " + point + " / " + bonneReponse.length + "<br> Vous pouvez désormais envoyer votre dossier !";
        englobeBouttonFixe3.style.display = "flex";
    }
});

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

    const nav_questionnaire = document.querySelector(".nav_questionnaire");

    // Ajout de la class définit à la class définis précédemment

    nav_questionnaire.classList.add("nav_active");

}

// Appel de la fonction collapse

nav_active();