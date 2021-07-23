// Définition des variables de la div .icone_deconnexion

const icone_deconnexion = document.querySelector('.icone_deconnexion');

// Détection du survole de la Souris sur la variable icone_deconnexion

icone_deconnexion.addEventListener('mouseenter', function (e) {

    // Action lors du survol de la souris

    icone_deconnexion.setAttribute("src", "/image/déconnexion-rouge.png"); 
    console.log('entrer de zone')

});

icone_deconnexion.addEventListener('mouseleave', function (e) {

    // Action lors du survol de la souris hors de la zone

    icone_deconnexion.setAttribute("src", "/image/déconnexion-blanc.png"); 
    console.log('sortir de zone');
});