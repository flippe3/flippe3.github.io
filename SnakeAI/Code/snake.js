// JavaScript Document
var snakeX = [300];
var snakeY = [300];
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
		snakeX[0] = constrain(snakeX[0], 20, width - 40);
		snakeY[0] = constrain(snakeY[0], 20, height - 40);
		if(snakeX[0] === foodX && snakeY[0] === foodY)
		{
			gen_food();
			snake_length++;
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
				stroke(200);
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
				stroke(200);
			if(clast === 600)
				clast -= 1;
			
			line(20, clast, 580, clast);
			clast += 20;
		}
		fill(255, 0, 0);
		rect(foodX + 1, foodY + 1, 18, 18)
	}
}