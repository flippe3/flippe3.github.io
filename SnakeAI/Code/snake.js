// JavaScript Document
var snakeX = [WIDTH / 2];
var snakeY = [HEIGHT / 2];
var snake2X = [(WIDTH / 2) + (4 * square_width)];
var snake2Y = [HEIGHT / 2];
if(mode_twosnakes)
{
    snakeX = [(WIDTH / 2) - (4 * square_width)];
    snakeY = [HEIGHT / 2];
}
var past_lengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var delay = 1; // Seconds
function Snake()
{
    this.xspeed = 0;
    this.yspeed = 0;
    this.x2speed = 0;
    this.y2speed = 0;

    this.dir = function(x, y)
    {
        this.xspeed = x;
        this.yspeed = y;
    }
    this.dir2 = function(x, y)
    {
        this.x2speed = x;
        this.y2speed = y;
    }
    this.update = function()
    {
        for(var i = 0; i < snake_length; i++)
        {
            snakeX[i] += this.xspeed * square_width;
            snakeY[i] += this.yspeed * square_height;
            if(mode_twosnakes)
            {
                snake2X[i] += this.x2speed * square_width;
                snake2Y[i] += this.y2speed * square_height;
            }
        }
        if(snakeX[0] == foodX && snakeY[0] == foodY)
        {
            gen_food();
            snake_length++;
            if(!mode_history)
            {
                if(mode_twosnakes)
                    document.getElementById("snake_length").innerHTML = "Purple length: " + snake_length;
                else
                    document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
                
            }
                
            
            
        }
        else if(snake2X[0] == food2X && snake2Y[0] == food2Y)
        {
            gen_food2();
            snake2_length++;
            document.getElementById("snake2_length").innerHTML = "Blue length: " + snake2_length;
        }

        if(gameOver == true)
        {
            console.log(gameOver);
            snake_length = 1;
            snake2_length = 1;
            if(!mode_history)
            {
                if(!mode_twosnakes)
                    document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
                else if(mode_twosnakes)
                {
                    document.getElementById("snake2_length").innerHTML = "Blue length: " + snake2_length;
                }
                    
            }
            //document.getElementById("shorter_multiplier").innerHTML = "multiplier: " + shorter_multiplier;
            //document.getElementById("longer_multiplier").innerHTML = "multiplier: " + longer_multiplier;
            this.xspeed = 0;
            this.yspeed = 0;
            this.y2speed = 0;
            this.x2speed = 0;
            if(!mode_twosnakes)
            {
                snakeX[0] = WIDTH / 2;
                snakeY[0] = HEIGHT / 2;
            }
            else
            {
                snakeX[0] = (WIDTH / 2) - (4 * square_width);
                snakeY[0] = (HEIGHT / 2)
                snake2X[0] = (WIDTH / 2) + (4 * square_width);
                snake2Y[0] = (HEIGHT / 2);
            }
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
            if(this.xspeed == 1)
            {
                snakeX[i] = snakeX[i - 1] - square_width;
                snakeY[i] = snakeY[i - 1];
            }
            else if(this.xspeed == -1)
            {
                snakeX[i] = snakeX[i - 1] + square_width;
                snakeY[i] = snakeY[i - 1];
            }
            else if(this.yspeed == 1)
            {
                snakeX[i] = snakeX[i - 1];
                snakeY[i] = snakeY[i - 1] - square_height;
            }
            else if(this.yspeed == -1)
            {
                snakeX[i] = snakeX[i - 1];
                snakeY[i] = snakeY[i - 1] + square_height;
            }
        }
        if(mode_twosnakes)
        {
            for(var i = snake2_length - 1; i > 0; i--)
            {
                if(this.x2speed == 1)
                {
                    snake2X[i] = snake2X[i - 1] - square_width;
                    snake2Y[i] = snake2Y[i - 1];
                }
                else if(this.x2speed == -1)
                {
                    snake2X[i] = snake2X[i - 1] + square_width;
                    snake2Y[i] = snake2Y[i - 1];
                }
                else if(this.y2speed == 1)
                {
                    snake2X[i] = snake2X[i - 1];
                    snake2Y[i] = snake2Y[i - 1] - square_height;
                }
                else if(this.y2speed == -1)
                {
                    snake2X[i] = snake2X[i - 1];
                    snake2Y[i] = snake2Y[i - 1] + square_height;
                }
            }
        }
        for(var i = 0; i < snake_length; i++)
        {
            if(mode_twosnakes)
                fill(91, 15, 191);
            else if(mode_singleplayer)
                fill(0, 255, 0);
            else if(!mode_history)
                fill(255, 127, 80);
            else
                fill(0,0,0);
            rect(snakeX[i], snakeY[i], square_width, square_height);
        }
        if(mode_twosnakes)
        {
            for(var i = 0; i < snake2_length; i++)
            {
                fill(20, 127, 255);
                rect(snake2X[i], snake2Y[i], square_width, square_height);
            }
        }

        var last = square_width;
        if(!mode_history){
            for(var i = 1; i < rows; i++)
            {
                if(last <= square_width ||last >= WIDTH - square_width)
                    stroke(20, 127, 255);
                else
                    stroke(50);
                if(last === WIDTH)
                    last -= 1;

                line(last, square_width, last, WIDTH - square_width);
                last += square_width;
            }
        }
        line(0, 0, 0, HEIGHT);
        line(0, 0, WIDTH, 0);
        line(0, HEIGHT - 1, WIDTH, HEIGHT - 1);
        line(WIDTH - 1, 0, WIDTH - 1, HEIGHT - 1);
        if(!mode_history){
            var clast = square_width;
            for(var i = 1; i < columns; i++)
            {
                if(clast <= square_height ||clast >= HEIGHT - square_height)
                    stroke(20, 127, 255);
                else
                    stroke(50);
                if(clast === HEIGHT)
                    clast -= 1;

                line(square_height, clast, HEIGHT - square_height, clast);
                clast += square_height;
            }
        }
        if(mode_twosnakes)
        {
            fill(255, 0, 0)
            stroke(255, 0, 0);
            rect(foodX + 1, foodY + 1, square_width - 2, square_height - 2)
            fill(0,255,0);
            stroke(0,255,0);
            rect(food2X + 1, food2Y + 1, square_width - 2, square_height - 2);
            stroke(0,0,0);
        }
        else if(!mode_history)
        {
            fill(255, 0, 0)
            stroke(255, 0, 0);
            rect(foodX + 1, foodY + 1, square_width - 2, square_height - 2)
            stroke(0,0,0);
        }
        else if(mode_history)
        {
            fill(139, 141, 108)
            stroke(139, 141, 108);
            rect(foodX + 1, foodY + 1, square_width - 2, square_height - 2)
            stroke(0);
        }
    }
}
function pause()
{
    gameOver = false;
}
