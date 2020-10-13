const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;

window.onload = setTimeout(function showContent(){
  content.style.display = "block";
  loading.style.display = "none";
}, 3000);
