// on initialise les variables 
// en les laissant initialisee (undefined)
let pasInitialisee;
console.log(pasInitialisee);

// oubien en initialisant a la volee
let maVariable = 3;
console.log(maVariable);
// dans un assignment '=' ce qui est evalué a droite du signe egal, sera stocke dans la variable a gauche
// on peut ecraser la valeur
maVariable = 5;
console.log(maVariable);
// en Javascript, on peut n'importe quel type de valeur dans une variable
maVariable = "maintenant la variable contient une string";
console.log(maVariable);
// un object
maVariable = new Object();
console.log(maVariable);
//un tableau
maVariable = [1, 2, 3];
console.log(maVariable);

// on peut passer la valeur d'une variable dans une autre variable
let variable1 = "un";
let variable2 = variable1;
console.log(variable1);
console.log(variable2);


// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

// remplace les "???" dans les conditions par la valeur qui fera en sorte 
// que le code suivant affiche tout tes mets preferre a la console

let a = "bon";
let b = a + " appetit";
let c = b + " petiot";
let d = 1 + 4;

if (a == "???") {
    console.log("1 - Entrecote");
} else {
    console.log("1 - try again");
}

a = "mauvais"

c = a + " garcon"

if (b == "???") {
    console.log("2 - Filet");
} else {
    console.log("2 - try again");
}

if (c == "???") {
    console.log("3 - Porterhouse");
} else {
    console.log("3 - try again");
}

if (d == "???") {
    console.log("4 - Shanghai dumplings");
} else {
    console.log("4 - try again");
}

d += 2;

if (d == "???") {
    console.log("5 - Wonton soup");
} else {
    console.log("5 - try again");
}

d += "saucisse";

if (d == "???") {
    console.log("6 - Sirloin steak");
} else {
    console.log("6 - try again");
}