const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event){
  if(event.code == 'ArrowUp'){
    if(player.offsetTop < 24){
      playerWalk = playerWalk;
      // pour bloquer le personnage, qu'il ne sorte pas du cadre
    }else{
      playerWalk = playerWalk + 1;
      player.style.top = (player.offsetTop - moveSize) + "px";
      if(playerWalk % 2 === 0){
        player.style.backgroundImage = "url(images/dos.png)";
      }else{
        player.style.backgroundImage = "url(images/dos-marche.png)";
      }
    }

  }else if(event.code == 'ArrowRight'){
    if(player.offsetLeft > 740){
      playerWalk = playerWalk;
    }else{
      playerWalk = playerWalk + 1;
      player.style.left = (player.offsetLeft + moveSize) + "px";
      if(playerWalk % 2 === 0){
        player.style.backgroundImage = "url(images/profil-droit.png)";
      }else{
        player.style.backgroundImage = "url(images/profil-marche-droite.png)";
      }
    }

  }else if(event.code == 'ArrowDown'){
    if(player.offsetTop > 640){
      playerWalk = playerWalk;
    }else{
      playerWalk = playerWalk + 1;
      player.style.top = (player.offsetTop + moveSize) + "px";
      if(playerWalk % 2 === 0){
        player.style.backgroundImage = "url(images/face.png)";
      }else{
        player.style.backgroundImage = "url(images/face-marche.png)";
      }
    }

  }else if(event.code == 'ArrowLeft'){
    if(player.offsetLeft < 24){
    playerWalk = playerWalk;
    }else{
      playerWalk = playerWalk + 1;
      player.style.left = (player.offsetLeft - moveSize) + "px";
      if(playerWalk % 2 === 0){
        player.style.backgroundImage = "url(images/profil-gauche.png)";
      }else{
        player.style.backgroundImage = "url(images/profil-marche-gauche.png)";
      }
    }
  }
})
