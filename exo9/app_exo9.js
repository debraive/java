var min= 20;
var max= 80;

function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

var nb = nb_aleatoire(20, 80);
var coups = 0;
var saisie;
var msg = 'Le nombre à deviner est compris entre 20 et 80.';

do
{
     saisie = prompt(msg);
     coups++;
     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);

alert("Bravo, tu as gagne en " + coups + " coups !");
