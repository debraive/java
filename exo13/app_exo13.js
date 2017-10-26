var c=document.getElementById('caracter');

document.addEventListener("keydown", function(event){
var input = event.key;
switch (input) {
  case "0" :
  c.style.backgroundColor='#F69229';
    break;
  case "1" :
  c.style.backgroundColor='#004358';
    break;
  case "2" :
  c.style.backgroundColor='#1F8A70';
    break;
  case "3" :
  c.style.backgroundColor='#BEDB39';
    break;
  case "4" :
  c.style.backgroundColor='#FFE11A';
    break;
  case "5" :
  c.style.backgroundColor='#FD7400';
    break;
  case "6" :
  c.style.backgroundColor='#1FAB9E';
    break;
  case "7" :
  c.style.backgroundColor='#B1D781';
    break;
  case "8" :
  c.style.backgroundColor='#FAD02F';
    break;
  case "9" :
  c.style.backgroundColor='#F16950';
    break;

}
})

/*Exercice2*/
var up=document.getElementById("up")
var down=document.getElementById("down")
var right=document.getElementById('right')
var left=document.getElementById('left')

document.addEventListener("keydown", function(event){
var opacity = event.key;
switch (opacity) {
  case "ArrowUp":
  up.classList.add('highlight');
  break;
  case "ArrowDown":
  down.classList.add('highlight');
  break;
  case  "ArrowRight":
  right.classList.add('highlight');
  break;
  case "ArrowLeft":
  left.classList.add('highlight');
  break;
  default:
  return;
}
})

document.addEventListener("keyup", function(event){
var opacity = event.key;
switch (opacity) {
  case "ArrowUp":
  up.classList.remove('highlight');
  break;
  case "ArrowDown":
  down.classList.remove('highlight');
  break;
  case  "ArrowRight":
  right.classList.remove('highlight');
  break;
  case "ArrowLeft":
  left.classList.remove('highlight');
  break;
  default:
  return;
}
})
