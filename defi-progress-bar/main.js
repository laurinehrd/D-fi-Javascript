var btn = document.getElementById('btn');
var progress = document.getElementById('progressBar');

// au clic sur le bouton :
btn.addEventListener('click', function() {

    var bar = setInterval(move, 15);
    var width = 0;

    function move(){
        if(width == 100){
            progress.style.backgroundColor = "yellow";
            clearInterval(bar);
        }else  if(width < 30){
            width++;
            progress.style.width = width + '%';
            progress.innerHTML = width + '%';
            progress.style.backgroundColor = "red";
        }else if(width < 60){
            width++;
            progress.style.width = width + '%';
            progress.innerHTML = width + '%';
            progress.style.backgroundColor = "orange";
        }
        else{
            width++;
            progress.style.width = width + '%';
            progress.innerHTML = width + '%';
        }
    }

});


// au chargement de la page :
// window.onload = function showContent(){

//     var bar = setInterval(move, 20);
//     var width = 0;

//     function move(){
//         if(width == 100){
//             clearInterval(bar);
//         }else{
//             width++;
//             progress.style.width = width + '%';
//         }
//     }

// };