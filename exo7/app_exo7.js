/*exercice 1*/
alert(Math.min(7, 5, -12, 6, 32, 18, 14, -2));
alert(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));
var min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
function addition(a,b) {
  return  a + b;
};
addition(min,max);
var resultat=addition(min,max);
console.log(resultat);

/*exercice2*/
var floatboat = 10.4;
var couleboat = Math.floor(floatboat);
Math.floor(floatboat)
Math.ceil(floatboat)

/*exercice3*/

var min = 50;
var max =100;

Math.floor(Math.random() * (max - min + 1)) + min;

var min =0;
var max =1;
Math.floor((Math.random())*(max-min + 1))

var min=0;
var max=10;
Math.floor((Math.random())*(max-min + 1))

/*exercice4*/
var tableau=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden",
"Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
tableau [Math.floor(Math.random()*10)]
