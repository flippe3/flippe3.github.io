// JavaScript Document
var snakeX = [300];
var snakeY = [300];
var past_lengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var delay = 1; // Seconds
var last_lengts = 0;
function Snake()
{
    this.xspeed = 1;
    this.yspeed = 0;
    
    this.dir = function(x, y)
    {
	this.xspeed = x;
	this.yspeed = y;
    }
    this.update = function()
    {
	for(var i = 0; i < snake_length; i++)
	{
	    snakeX[i] += this.xspeed * 20;
	    snakeY[i] += this.yspeed * 20;
	}
	if(snakeX[0] === foodX && snakeY[0] === foodY)
	{
	    gen_food();
	    snake_length++;
	    document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
	}
	if(gameOver === true)
	{
            //			window.alert("The snakes length was: " + snake_length);
	    past_lengths[last_lengts] = snake_length;
	    document.getElementById("past_lengths1").innerHTML = "1. " + past_lengths[0];
	    document.getElementById("past_lengths2").innerHTML = "2. " + past_lengths[1];
	    document.getElementById("past_lengths3").innerHTML = "3. " + past_lengths[2];
	    document.getElementById("past_lengths4").innerHTML = "4. " + past_lengths[3];
	    document.getElementById("past_lengths5").innerHTML = "5. " + past_lengths[4];
	    document.getElementById("past_lengths6").innerHTML = "6. " + past_lengths[5];
	    document.getElementById("past_lengths7").innerHTML = "7. " + past_lengths[6];
	    document.getElementById("past_lengths8").innerHTML = "8. " + past_lengths[7];
	    document.getElementById("past_lengths9").innerHTML = "9. " + past_lengths[8];
	    document.getElementById("past_lengths10").innerHTML = "10. " + past_lengths[9];
	    document.getElementById("past_lengths11").innerHTML = "11. " + past_lengths[10];
	    document.getElementById("past_lengths12").innerHTML = "12. " + past_lengths[11];
	    document.getElementById("past_lengths13").innerHTML = "13. " + past_lengths[12];
	    document.getElementById("past_lengths14").innerHTML = "14. " + past_lengths[13];
	    document.getElementById("past_lengths15").innerHTML = "15. " + past_lengths[14];
	    document.getElementById("past_lengths16").innerHTML = "16. " + past_lengths[15];
	    last_lengts++;
	    snake_length = 1;
	    document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;

	    this.xspeed = 0;
	    this.yspeed = 0;
	    snakeX[0] = 300;
	    snakeY[0] = 300;
	    setTimeout(pause, delay * 1000);
	    
	}
    }
    this.show = function()
    {	
	for(var i = snake_length - 1; i > 0; i--)
	{
	    if(this.xspeed === 1)
	    {
		snakeX[i] = snakeX[i - 1] - 20;
		snakeY[i] = snakeY[i - 1];
	    }
	    else if(this.xspeed === -1)
	    {
		snakeX[i] = snakeX[i - 1] + 20;
		snakeY[i] = snakeY[i - 1];
	    }
	    else if(this.yspeed === 1)
	    {
		snakeX[i] = snakeX[i - 1];
		snakeY[i] = snakeY[i - 1] - 20;
	    }
	    else if(this.yspeed === - 1)
	    {
		snakeX[i] = snakeX[i - 1];
		snakeY[i] = snakeY[i - 1] + 20;
	    }
	    
	}
	for(var i = 0; i < snake_length; i++)
	{
	    fill(0, 255, 0);
	    rect(snakeX[i], snakeY[i], 20, 20);
	}
	var last = 0;
	for(var i = 0; i < rows + 1; i++)
	{
	    if(last <= 20 ||last >= 580)
		stroke(255, 0, 0);
	    else
		stroke(50);
	    if(last === 600)
		last -= 1;
	    
	    line(last, 20, last, 580);
	    last += 20;
	}
	var clast = 0;
	for(var i = 0; i < columns + 1; i++)
	{
	    if(clast <= 20 ||clast >= 580)
		stroke(255, 0, 0);
	    else
		stroke(50);
	    if(clast === 600)
		clast -= 1;
	    
	    line(20, clast, 580, clast);
	    clast += 20;
	}
	fill(255, 0, 0);
	rect(foodX + 1, foodY + 1, 18, 18)
    }
}
function pause()
{
    gameOver = false;
}
