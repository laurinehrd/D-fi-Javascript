document.getElementById('checkbox').addEventListener('click', function() {

    if(document.getElementById('input').type == "text"){
        document.getElementById('input').type = "password";
        document.getElementById('display').innerHTML = "Show";

    }else if(document.getElementById('input').type == "password"){
        document.getElementById('input').type = "text";
        document.getElementById('display').innerHTML = "Hide";
    }

});