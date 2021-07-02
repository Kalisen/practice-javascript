// les nombres
1
2
3.5

1 + 2 == 3

// les nombres sont convertis en chaine de characteres automatiquement, quand necessaire:
3 + " shanghai dumplings" == "3 shanghai dumplings"

// 0 se converti automatiquement en boolean false
if (0) {
    // il ne passera pas par la
} else {
    console.log("0, converti automatiqument en boolean, c'est faux")
}

// tous les autres nombres se convertissent automatiquement en boolean true

if (33) {
    console.log("ouh!")
}


console.log("Exercises below...")
// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

// initialise 'n' a une valeur qui fera s'afficher "ouh!"
let n;
if (n) {
    console.log("1 - ouh!")
} else {
    console.log("1 - try again")
}

// initialise 'm' a une valeur qui fera s'afficher "banzai!"
let m = "c'est pas la bonne valeur";
if (m) {
    console.log("2 - try again")
} else {
    console.log("2 - banzai!")
}
