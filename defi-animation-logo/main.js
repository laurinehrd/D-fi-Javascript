const logo = document.getElementById('logo');
let value = 0;

function animLogo(){

    if(value <= 240){
        value++;
        logo.style.height = value + "px";
        logo.style.width = value + "px";
        logo.style.fontSize = value*0.1 + "px";
    }else{
        clearInterval(time);
    }
    console.log(value);
}

var time = setInterval(animLogo, 10);