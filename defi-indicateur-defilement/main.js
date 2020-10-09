window.onscroll = function (){ scrollIndicator() };

function scrollIndicator(){
  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowScroll / height) * 100;
  document.getElementById('bar').style.width = scrolled + "%";
}
