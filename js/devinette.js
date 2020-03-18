console.log("Bienvenue dans le jeu du juste prix !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// nombre d'essais possible 6
var essais = 0;

while ((nombre !== solution) && (essais < 6)) {
var nombre = Number(prompt("Entrez un valeur entre 1 et 100 :")); // on demande à l'utilisateur de saisir un nombre

   if (nombre > solution)
   	alert(nombre + " " + "est trop grand"); //on dit que le chiffre est trop grand si il est plus haut que la solution
   else if (nombre < solution)
   	alert(nombre + " " + "est trop petit"); //on dit que le chiffre est trop petit si il est plus bas que la solution
   essais++;//si le chiffre est trop grand ou petit on redemande à tapez un chiffre et on incrémente l'essais de +1
   


}

if (nombre === solution)// si le chiffre tapez et égal à la solution alors l'utilisateur à gagner
   	alert("Bravo ! la solution était" + " " + solution + " " + "Vous avez trouvé en" + " " + essais + " " + "essai(s)");

   else //si le chiffre tapez et faux et que le nombre d'essais à été atteind alors l'utilisateur à perdu
   	alert("vous avez perdu, la solution était" + " " + solution);