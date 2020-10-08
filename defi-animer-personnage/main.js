const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event){
  if(event.code == 'ArrowUp'){
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop - moveSize) + "px";
    if(playerWalk % 2 === 0){
      player.style.backgroundImage = "url(images/dos.png)";
    }else{
      player.style.backgroundImage = "url(images/dos-marche.png)";
    }
  }else if(event.code == 'ArrowRight'){
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft + moveSize) + "px";
    if(playerWalk % 2 === 0){
      player.style.backgroundImage = "url(images/profil-droit.png)";
    }else{
      player.style.backgroundImage = "url(images/profil-marche-droite.png)";
    }
  }else if(event.code == 'ArrowDown'){
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop + moveSize) + "px";
    if(playerWalk % 2 === 0){
      player.style.backgroundImage = "url(images/face.png)";
    }else{
      player.style.backgroundImage = "url(images/face-marche.png)";
    }
  }else if(event.code == 'ArrowLeft'){
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft - moveSize) + "px";
    if(playerWalk % 2 === 0){
      player.style.backgroundImage = "url(images/profil-gauche.png)";
    }else{
      player.style.backgroundImage = "url(images/profil-marche-gauche.png)";
    }
  }
})
