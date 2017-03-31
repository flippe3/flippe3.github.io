// JavaScript Document
var snakeX = [300];
var snakeY = [300];
var past_lengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var delay = 1; // Seconds
function Snake()
{
    this.xspeed = 0;
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
            console.log(gameOver);
            snake_length = 1;
            document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
            document.getElementById("shorter_multiplier").innerHTML = "multiplier: " + shorter_multiplier;
            document.getElementById("longer_multiplier").innerHTML = "multiplier: " + longer_multiplier;
            this.xspeed = 0;
            this.yspeed = 0;
            snakeX[0] = 300;
            snakeY[0] = 300;
            if(!mode_singleplayer)
                setTimeout(pause, delay * 1000);
            else
            {
                gameOver = false;
            }
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
            fill(255, 127, 80);
            rect(snakeX[i], snakeY[i], 20, 20);
        }
        var last = 20;
        for(var i = 1; i < rows; i++)
        {
            if(last <= 20 ||last >= 580)
                stroke(20, 127, 255);
            else
                stroke(50);
            if(last === 600)
                last -= 1;

            line(last, 20, last, 580);
            last += 20;
        }
        line(0, 0, 0, 600);
        line(0, 0, 600, 0);
        line(0, 599, 600, 599);
        line(599, 0, 599, 599);

        var clast = 20;
        for(var i = 1; i < columns; i++)
        {
            if(clast <= 20 ||clast >= 580)
                stroke(20, 127, 255);
            else
                stroke(50);
            if(clast === 600)
                clast -= 1;

            line(20, clast, 580, clast);
            clast += 20;
        }
        fill(255, 0, 0)
        stroke(255, 0, 0);
        rect(foodX + 1, foodY + 1, 18, 18)
    }
}
function pause()
{
    gameOver = false;
}
