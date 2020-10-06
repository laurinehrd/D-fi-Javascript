const myBtn = document.getElementById('myBtn');
const cntClic = document.getElementById('cntClic');

var nbClic = 0;

myBtn.addEventListener("click", function(){
  nbClic++;
  console.log(nbClic);
  cntClic.innerHTML = "Tu as cliqué " + nbClic + " fois.";
});
