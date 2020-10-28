const buttonCopy = document.getElementById('buttonCopy');
var copyText = document.getElementById('copyText');

buttonCopy.addEventListener("click", function(){

    copyText.select();
    document.execCommand("copy");

})  
