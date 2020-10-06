const convert = document.getElementById('convert');
var resultSeconds = document.getElementById('resultSeconds');
var resultMinutes = document.getElementById('resultMinutes');
var resultHours = document.getElementById('resultHours');
var resultDays = document.getElementById('resultDays');

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function(){
  let numberOfYear = document.getElementById('numberOfYears').value;
  //jours dans années
  let convertInDays = numberOfYear*daysInYear;
  resultDays.innerHTML = convertInDays + ' days';

  //heures dans années
  let convertInHours = convertInDays*hoursInDay;
  resultHours.innerHTML = convertInHours + ' hours';

  //minutes dans années
  let convertInMinutes = convertInHours*minutesInHour;
  resultMinutes.innerHTML = convertInMinutes + ' minutes';

  //secondes dans années
  let convertInSeconds = convertInMinutes*secondsInMinute;
  resultSeconds.innerHTML = convertInSeconds + ' seconds';
});



// choisir unité d'entrées et de sortie
var array = {'seconds':1, 'minutes':60, 'hours':3600, 'days':86400, 'years': 31536000} // insérer les données en secondes

newConvert.addEventListener("click", function(){
  let uniteEnter = document.getElementById('uniteEnter').value;
  let uniteExit = document.getElementById('uniteExit').value;
  let newNumber = document.getElementById('newNumber').value;
  let tempSecond = newNumber * array[uniteEnter];
  let result = tempSecond / array[uniteExit];
  document.getElementById('resultValue').innerHTML = result + ' ' + uniteExit;

})
