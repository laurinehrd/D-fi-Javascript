const title = document.getElementById('title');
var change = 0;

function changeTitle(){
    change++;
    switch(change){
        case 1:
            title.innerText = "Je m'appelle Laurine";
            break;
        case 2:
            title.innerText = "Je suis développeuse web";
            break;
        case 3:
            title.innerText = "et webdesigner";
            break;
        default:
            title.innerText = "A bientôt !"; 
            change = 0;
    }
}

setInterval(changeTitle, 3000);