document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){
    if(window.screen.orientation.angle == 90){
        document.getElementById('displayContent').style.display = "block";
        document.getElementById('rotateScreen').style.display = "none";
    }else{
        document.getElementById('rotateScreen').style.display = "block";
    }
  }