// une fonction peut renvoyer une valeur de retour avec le mot clef 'return'

function monRestoFavori() {
    return "Espetus"
}

function withKetchup(param1) {
    return param1 + " avec du ketchup!";
}

function concatEtRenvoit(param1, param2, param3, param4) {
    return "" + param1 + param2 + param3 + param4;
}

// un appelle de fonction, c'est une expression 
// on peut utiliser une fonction et sa valeur de retour
// pour initialiser une variable
let resto = monRestoFavori();
console.log(resto);

let pouletAvecKetchup = withKetchup("poulet");
console.log(pouletAvecKetchup);

// comme parametre d'entree d'une autre fonction
let fullString = concatEtRenvoit(monRestoFavori(), "est", "mon", "favori");
console.log(fullString);

// la meme chose un poil plus complique
function plus1(nombre) {
    return nombre + 1;
}
let resultat = plus1(plus1(plus1(plus1(0)))); // 0 + 1 + 1 + 1 + 1 =>4
console.log(resultat); // affiche 4

// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

console.log("Exercise 1");
// cree une fonction 'ajouteDuRiz' qui prend un parametre et renvoit la chaine de charactere avec "... avec du riz" ou '...' est la valeur du parametre

// ton code ici!

if (ajouteDuRiz("Quesadilla") == "Quesadilla avec du riz") {
    console.log("1 - Success!");
} else {
    console.log("1 - try again");
}

if (ajouteDuRiz("steak") == "steak avec du riz") {
    console.log("2 - Success!");
} else {
    console.log("2 - try again");
}

console.log("Exercise 2");
// cree une fonction 'moins2' qui prend en nombre en parametre, soustrait 2 en renvoit le resultat

// ton code ici!

let leResultat = 10;
// modifies resultat en utilisant ta fonction jusqu'a ce que la condition ci dessous soit vrai

// ton code ici!

if (leResultat == 4) {
    console.log("3 - Success!");
} else {
    console.log("3 - try again");
}





