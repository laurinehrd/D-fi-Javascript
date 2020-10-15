window.onscroll = slideDown;

function slideDown(){
  var windowScroll = document.documentElement.scrollTop;
  console.log(windowScroll);
  if(windowScroll > 100){
    document.getElementById('navbar').style.top = "0";
  }else{
    document.getElementById('navbar').style.top = "-56px";

  }
}
