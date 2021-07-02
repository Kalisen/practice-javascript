// les booleens
true // vrai
false // faux


// les booleens sont convertis en chaine de characteres automatiquement, quand necessaire:
true + " 'dat" == "true 'dat"

// toutes les valeurs suivantes sont vraies
if (true) {
    console.log("true c'est vrai")
}
if ({}) {
    console.log("un dictionaire vide ou pas c'est vrai")
}
if ([]) {
    console.log("un tableau vide ou pas c'est vrai")
}
if (42) {
    console.log("un nombre c'est vrai")
}
if ("0") {
    console.log("une chaine de charactere, a part la chaine vide, c'est vrai")
}
if ("false") {
    console.log("petit coup de pute, la chaine de charactere 'false', c'est vrai")
}
if (new Date()) {
    console.log("n'importe quel object c'est vrai")
}
if (-42) {
    console.log("un nombre meme si il est negatif c'est vrai")
}
if (12n) {
    console.log("un nombre avec une unite c'est vrai")
}
if (3.14) {
    console.log("un nombre decimal, negatif ou pas, c'est vrai")
}
if (Infinity) {
    console.log("Infinity c'est vrai")
}
if (-Infinity) {
    console.log("-Infinity c'est vrai")
}

// toutes les valeurs suivantes sont fausses
if (false) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (null) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (undefined) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (0) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (-0) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (0n) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if (NaN) {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}
if ("") {
    // ce bloc ne sera pas execute
} else {
    console.log("false c'est faux")
}