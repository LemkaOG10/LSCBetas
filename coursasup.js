
/*
function entierAleatoire(min, max) {
    return min + (Math.random() * (max - min))
};

function financial(x) {
    return Number.parseFloat(x).toFixed(0);
};

function ventes(weed) {

    for (var i = 0; i < 20; i++) {

        var entier = entierAleatoire(0.8, 1.2);

        if (weed > 0) {
                var afficheventespng = console.log("Appuyez sur G pour vendre");
                var afficheitemsdrogue = console.log("Menu Items Drogue");
                var prixweed = 80;
                var calculweed = prixweed * entier
                var retraitweed = weed - 1
                weed = retraitweed
                var entierarround = financial(calculweed)

                console.log("Vous avez vendu pour : " + entierarround + " $");
                console.log("Vous avez vendu : 1 Weed");
                
                console.log("Il vous reste : " + retraitweed);
                if (weed == 0) {
                    console.log("c'est la hess de weed");
                }
        }
    };
};
console.log(ventes(5));
*/

var pair = [1, 2, 3, 4];

function ajoutes(x) {

    for(i = 0; i < pair.length; i++) {

    var paire = pair[i]

        if (paire[i] % 8 == 0 && paire[i] % 8 == 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

};

ajoutes(pair);