// une variables d'entrees de fonction est appellé un parametre
// une fonction a 0 ou plusieurs parametres
// tu donnes le nom que tu veux aux parametres d'entree, c'est comme declarer une variable avec 'let'
function maFonctionSansParametres() {
    // fait des choses
    console.log("pif");
}

function maFonctionAvec1Parametre(param1) {
    // fait des choses
    console.log("paf avec parametre d'entree: " + param1);
}

function maFonctionAvecPlusieursParametres(param1, param2, param3, param4) {
    // fait des choses
    console.log("maFonctionAvecPlusieursParametres avec parametres d'entree: param1: " + param1 + ", param2: " + param2 + ", param3: " + param3 + ", param4: " + param4);
}

// on appelle une fonction avec son nom, suivit de la liste des valeurs d'entrees entre parentheses
// quand la fonction ne prend pas de parametre
maFonctionSansParametres();

// avec des parametres
// directement avec une valeur 
maFonctionAvec1Parametre("bob");
// ou bien avec une valeur stoquee dans une variable
let valeur = "bob";
maFonctionAvec1Parametre(valeur);

// ###################################
// ###################################
//
// EXERCICES
//
// ###################################
// ###################################

console.log("Exercise 1");
// cree une fonction 'bonjour' sans parametre qui affiche le message Bonjour dans la console

// ton code ici!

bonjour();

console.log("Exercise 2");
// cree une fonction qui prend un parametre de type Number et afficher la valeur de ce nombre + 2 dans la console

// ton code ici!

nombrePlus2(4);
nombrePlus2(0);
nombrePlus2(10);

console.log("Exercise 3");
// cree une fonction qui prend 4 parametres et les concatene dans la console 

// ton code ici!

concat("dim", "sum", "for", "ever");
concat("bob", 1, 3, "tom");
// bonus!
concat(1, 2, 3, 4);