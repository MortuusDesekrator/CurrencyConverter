function currencyCalculator(valNum) {
if (calcular.dolares.value <= 0) 
  window.alert("introduzca un monto mayor a 0");
  else{
document.getElementById("bolivar").value = (valNum*73521.50).toFixed(2);
document.getElementById("peso_colombia").value = (valNum*3408.35).toFixed(2);
document.getElementById("sol").value = (valNum*3.39).toFixed(2);
document.getElementById("peso_chile").value = (valNum*792.20).toFixed(2);
document.getElementById("peso_mexico").value = (valNum*18.76).toFixed(2);
document.getElementById("peso_argentina").value = (valNum*60.69).toFixed(2);
  }
}
