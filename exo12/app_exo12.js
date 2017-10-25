/*Exercice1*/
  var mouss=document.querySelectorAll(".hoverme")
  for (var i = 0; i < mouss.length; i++) {
    mouss[i].addEventListener("mouseover", function() {
    this.style.visibility = 'hidden';
        })
};

/*Exercice2*/
var reset=document.getElementById('reset');

  reset.addEventListener('click', function(){
      for (var i = 0; i < mouss.length; i++) {
      mouss[i].style.visibility = 'visible';
}
});

/*Exercice3*/
axe_y = document.getElementById("y");
(axe_y.innerText);

axe_z=document.getElementById("z");
axe_z.innerText);
