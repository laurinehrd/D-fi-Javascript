document.getElementById("input").addEventListener("keyup", function(event){
    if(event.getModifierState("CapsLock") == true){
        document.getElementById("warning").style.display = "block";
    }else{
        document.getElementById("warning").style.display = "none";
    }
    
})

document.getElementById("input").addEventListener("keyup", function(event){
    if(event.getModifierState("NumLock") == false){
        document.getElementById("warning2").style.display = "block";
    }else{
        document.getElementById("warning2").style.display = "none";
    }
})