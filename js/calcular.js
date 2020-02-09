function currencyConverter(valNum) {
if (converter.bolivares.value <= 0) 
	window.alert("introduzca un monto mayor a 0");
	else{
document.getElementById("dollar").value = (valNum/73521.50).toFixed(2);
document.getElementById("paypal").value = (valNum/65900.30).toFixed(2);
document.getElementById("zelle").value = (valNum/72540.12).toFixed(2);
document.getElementById("skrill").value = (valNum/70510.32).toFixed(2);
document.getElementById("western_union").value = (valNum/71500.04).toFixed(2);
document.getElementById("airtm").value = (valNum/72556.00).toFixed(2);
	}
}
