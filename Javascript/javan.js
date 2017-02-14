// JavaScript Document
function myFunction() {
    var x = document.getElementById("myNumber").value;
    
	if(isNaN(x) || x == "")
	{
		alert("NOT A NUMBER");
		document.getElementById("para").innerHTML = "You did not enter a number";
	}
	else
	{
		document.getElementById("para").innerHTML = "You wrote: " + x;
	}
}
