// undefined c'est pas initialise, c'est vide en gros
let vide;

if (vide == undefined) {
    console.log("vide n'est pas definit");
}

// non vide, c'est pas vide. pas vide, c'est vrai
if (!undefined) {
    console.log("non vide, c'est pas vide. pas vide, c'est vrai");
}

// un raccourci pour tester si une variable est initialisee
let variable;
if (undefined) {
    console.log("'variable' n'est pas initialisee!");
} else {
    // fais qq chose avec 'variable'
}
