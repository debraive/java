/*exercice 1 */
for (var i=0; i<=20;i++){
  if (i % 2==0){
    console.log  (i+" le chiffre est pair")}
  else{
    console.log (i+" le chiffre est impair")
  }
}
/*exercice 2 */
for (var i=0; i<=10;i++){
   console.log (i * 9)
}
 /*exercice 3 */
 for (var i=0; i<=100;i++) {
   if(i>=90){
     console.log ("ton grade est A")}
   else if (i>=80){
     console.log ("ton grade est B")}
   else if (i>=70){
     console.log ("ton grade est C")
   }
   else if (i>=65){
     console.log ("ton grade est D ")
   }
   else {
     console.log ("ton score ne rentre pas dans les catégories, tu es F")
   }
 }

/* exercice 4 */
 for (var i=0; i<=5;i++){

  for (j=0;j<i;j++){
    document.write("*")
  }
    document.write("<br>")
 }
