function calcCelsius()
{
	const fahrenheit=document.getElementById("ftemp").value;

	const celsius=(fahrenheit-32)/1.8;
	document.getElementById("ctemp").innerHTML=Math.round(celsius*100)/100;
}