/*exercice1*/
var tableau = [1,2,3,4,5,6,7,8,9,10]
var total=0;
for (var i=0;i<tableau.length;i++){
  total=tableau[i]+total;
  console.log(total);
}

/*excercice2*/
var acteur = ["jean michel", "remy", "paul"];
if (acteur[0]){
  console.log ("le numéro 1 est " + acteur[0])
}
  if (acteur[1]){
    console.log ("le numéro 2 est " + acteur[1])
  }
    if (acteur[2]){
      console.log ("le numéro 3 est " + acteur[2])
}

/*exercice3*/
var tableau = ["Mario", "Luigi", "Peach"];
for(var i=0;i<tableau.length;i++){
  tableau_1=tableau[i]
}
 tableau.push("bowser")
