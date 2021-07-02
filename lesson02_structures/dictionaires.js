// un dictionaire, c'est un groupe de paires clef (key) et valeur (value)
// clefs et valeurs peuvent etre n'importe quel object
// ex: 
// "dites" => 33
// "coupe" => "Entrecote"
// 120 => "Giornate di Sodoma"

let monDico = {
    "dites": 33, 
    "coupe": "Entrecote", 
    120: "Giornate di Sodoma"
};

// tu remarques que ca resemble beaucoup au JSON (JavaScript Object Notation)

// il n'y a pas de limite au nombre de clefs que tu peux ajouter
monDico["nouvelle clef"] = "pouf";
monDico["encore une clef"] = "paf";
monDico["rebelotte"] = "pif";

// tu peux y mettre des objects aussi
monDico["clef"] = new Object();

// lire des valeurs en utilisant la clef
console.log("tu lis une valeur en utilisant sa clef. ex: l'expression suivante evalue a 'paf' " + monDico["nouvelle clef"])

let valeur = monDico["rebelotte"];
console.log(valeur); // affiche 'pif'

// for lister tout le contenu, tu peux faire une boucle sur les clefs
// et extraire la valeur pour chaque clef
for(var key in monDico) {
    var value = monDico[key];
    // do something with "key" and "value" variables
    // ...
}


console.log("Exercises results...")
// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

// ajoute une valeur "Quesadilla" a la clef "Dejeuner" dans 'dictionaire'
// et bon appetit s'affichera a la console.

// ajoute ton code sous cette ligne

if (monDico["Dejeuner"] == "Quesadilla") {
    console.log("1 - Bon appetit!");
} else {
    console.log("1 - try again");
}


// recupere la valeur associee a la clef 'coupe' et stoque la dans la variable 'maValeur'
let maValeur; // initialise avec la valeur associee a la clef 'coupe'

if (maValeur == "Entrecote") {
    console.log("2 - Bon appetit!");
} else {
    console.log("2 - try again");
}

