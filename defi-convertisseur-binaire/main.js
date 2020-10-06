const convert = document.getElementById('convert')
var crypted = document.getElementById('crypted');

convert.addEventListener("click", function(){
  let code = document.getElementById('msgToCode').value; //récupérer valeur du textarea
  // console.log(code);

  let array = [];

  for (var i = 0; i < code.length; i++) {

    let n = code.charCodeAt(i); //tranforme caractères en un code
    // 0 tranforme la 1ère lettre, 1 la 2ème etc...
    // console.log(n);

    let binary = Number(n.toString(2)); // 2 = tranformer en binaire
    console.log(binary);

    array.push(binary);

    crypted.innerHTML = array;
  }

});
