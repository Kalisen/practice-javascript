// Logique Booleene
// si c'est pas vrai, c'est faux
// si c'est pas faux, c'est vrai

// '!' indique le contraire du boolean
!true == false 
!false == true

// le contraire du contraire (double negation), 
// c'est la valeur dont on est parti
!!true == true
!!false == false

if (true) {
    console.log("true c'est vrai")
}

if (!false) {
    console.log("pas faux, c'est vrai")
}

if (!!true) { 
    // l'ordi evalue les expressions de gauche a droite et replace au fur et a mesure
    // d'abord 'true'
    // apres '!true' en faux
    // apres '!faux' en vrai
    console.log("pas pas vrai, c'est pas faux, c'est vrai")
}

// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

// remplace "???" (guillemets inclus) par la valeur appropriee pour ton accompagnement favoris
// note: tu peux ignore le fait que chaque exercise est dans un bloc, c'est n'a pas d'impact sur le resultat
{
    let valeur;
    if (undefined) {
        valeur = 1;
    } else {
        valeur = 2;
    }
    
    if (valeur == "???") {
        console.log("Riz mexicain!");
    }
    
}

{
    let valeur;
    if (!undefined) {
        valeur = 1;
    } else {
        valeur = 2;
    }
    
    if (valeur == "???") {
        console.log("+1 Riz mexicain!");
    }
    
}

{
    let valeur;
    if (!!"chaine de characteres") {
        valeur = 1;
    } else {
        valeur = 2;
    }
    
    if (valeur == "???") {
        console.log("+2 Riz mexicain!");
    }
    
}



// Bonus Stage!
// Bonus Stage!
// Bonus Stage!
// Bonus Stage!
// Bonus Stage!
// && => 'et' en javascript 
// toutes les conditions doivent etre vraies pour que le tout soit vrai
// vrai et vrai, c'est vrai
if (true && true) {
    console.log("vrai et vrai, c'est vrai");
}
// faux et faux, c'est faux
if (false && false) {
    // il ne passera pas par la
} else {
    console.log("faux et faux, c'est faux");
}
// vrai et faux, c'est faux
if (true && false) {
    // il ne passera pas par la
} else {
    console.log("vrai et faux, c'est faux");
}
// faux et vrai, c'est faux
if (false && true) {
    // il ne passera pas par la
} else {
    console.log("faux et vrai, c'est faux");
}

// || => 'oubien' en javascript 
// au moins 1 condition doit etre vraie pour que le tout soit vrai
// vrai ou vrai, c'est vrai
if (true || true) {
    console.log("vrai ou vrai, c'est vrai");
}
// faux ou faux, c'est faux
if (false || false) {
    console.log("faux ou faux, c'est faux");
}
// vrai ou faux, c'est vrai
if (true || false) {
    console.log("vrai ou faux, c'est vrai");
}
// faux ou vrai, c'est vrai
if (false || true) {
    console.log("faux ou vrai, c'est vrai");
}


console.log("Exercises below...")
// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

// remplace "???" (guillemets inclus) par la valeur appropriee pour un bon petit plat
// note: tu peux ignore le fait que chaque exercise est dans un bloc, c'est n'a pas d'impact sur le resultat

{
    let valeur;
    if (3 && "bob") {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("1 - Quesadilla!");
    } else {
        console.log("1 - try again");
    }
    
}

{
    let valeur;
    if ("" && true) {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("2 - Quesadilla!");
    } else {
        console.log("2 - try again");
    }
    
}

{
    let valeur;
    if (undefined && true) {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("3 - Quesadilla!");
    } else {
        console.log("3 - try again");
    }
    
}

// oubien
// remplace "???" (guillemets inclus) par la valeur appropriee pour un bon petit plat

{
    let valeur;
    if (true || false) {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("4 - Quesadilla!");
    } else {
        console.log("4 - try again");
    }
    
}

{
    let valeur;
    if (undefined || "bob") {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("5 - Quesadilla!");
    } else {
        console.log("5 - try again");
    }
    
}

{
    let valeur;
    if (undefined || "") {
        valeur = "sirloin";
    } else {
        valeur = "filet";
    }
    
    if (valeur == "???") {
        console.log("6 - Quesadilla!");
    } else {
        console.log("6 - try again");
    }
    
}

