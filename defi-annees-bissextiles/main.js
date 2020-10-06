const check = document.getElementById('check');


check.addEventListener("click", function(){
  let year = document.getElementById('year').value;
  let result = document.getElementById('result');

  if((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)){
    result.innerHTML = year + ' is a leap year.';
  }else{
    result.innerHTML = year + " isn't a leap year.";
  }

})
