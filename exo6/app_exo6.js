/*Pendu */
var tableauMot=["b","o","n","j","o","u","r"];
var lettres_a_trouvees=["_","_","_","_","_","_","_"];
var tailleMot= tableauMot.length;
function jeu(){
  var stock = window.prompt("Choisis une lettre");
  var lettre_ok=false;
  for(var i=0; i<tableauMot.length; i++) {
    if (tableauMot[i]==stock){
        lettre_ok=true;
        lettres_a_trouvees[i]=stock;
        tailleMot--
    }
  }

  if (!lettre_ok) {
    window.alert ("Oups! Essaie encore.")
  }
  if (lettre_ok){
      window.alert ("Bravo, tu as trouvé une lettre."+" "+lettres_a_trouvees);
  }
}

while (tailleMot>0) {
  jeu()
}
if (tailleMot==0){
  window.alert ("Tu as gagné ! Tu peux vivre jusqu'au prochain mot")

}
