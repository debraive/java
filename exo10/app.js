/*exercice 1*/
var body=document.querySelector("body");
body.className="Bg-olive";

var paragraphe=document.getElementById("first-paragraph");
paragraphe.classList.remove("bg-lime");
paragraphe.classList.remove("gray");
paragraphe.className +=('aqua');

var select=document.querySelectorAll('.bg-silver');
select[0];
select[0].classList.add('bg-teal');
select[0].classList.remove('bg-silver');

var block=document.querySelector('blockquote');
block.classList.add('bg-withe');

/*exercice2*/
var table=document.getElementById('my-table');
table.classList.add('bg-purple');

var shadow=document.querySelectorAll('.container p');
shadow[0,1,2].classList.add('shadow');


/*exercice 3*/
var pre=document.querySelectorAll("pre");
pre[0].style.color = "#FFFFFF";
pre[0].style.backgroundColor='#E8990C';
pre[0].style.borderTop="3px solid red";
pre[0].style.borderBottom="3px solid red";

var h=document.querySelector("h3");
h.innerHTML="<em>Itelic title ! yeah !</em>";
var h2=document.querySelector("h2");
h2.innerHTML="<strong>HTML doens't work !</strong>";

/*exercice4*/
var ul_select=document.querySelector("ul");
var li1 = document.createElement('li');
li1.innerHTML="Mon meilleur ami est " + "<a href=\"http://google.com\">Google</a>";

ul_select.appendChild(li1);
var a1=document.querySelector("li a");
a1.style.color=('blue');


/*exercice5*/

var Select_ol = document.querySelector('ol');
while (Select_ol.firstChild)
  { Select_ol.removeChild(Select_ol.firstChild); }
  var Tab = ["Silent Teacher","Code Monkey", "CodeCombat"];

Tab.forEach(function(e, index)
  { var li = document.createElement('li');
  li.innerHTML = e Tab[index] = li; Select_ol.appendChild(li)})
