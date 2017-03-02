// JavaScript Document
//snake.dir(x, y);
//snake_dir 1 == down
//snake_dir -1 == up
//snake_dir 2 == right
//snake_dir -2 == left
var crashed = false;
function simple_ai()
{
    if(foodY < snakeY[0] && snake_dir != 1 && !check_up())
    {
	snake_dir = -1;
	snake.dir(0, -1);
    }	
    else if(foodY > snakeY[0] && snake_dir != -1 && !check_down())
    {
	snake_dir = 1;
	snake.dir(0, 1);
    }
    else if(foodX > snakeX[0] && snake_dir != -2 && !check_right())
    {
	snake_dir = 2;
	snake.dir(1, 0);
    }
    else if(foodX < snakeX[0] && snake_dir != 2 && !check_left())
    {
	snake_dir = -2;
	snake.dir(-1, 0);
    }
}
function dodge()
{
    crashed = false;
    for(var i = 0; i < snake_length; i++)
    {
	if(snake_dir === 1 && check_down())
	{
            crashed = true;
	    if(!check_left())
	    {
		snake_dir = -2;
		snake.dir(-1, 0);
                console.log("Going left");
	    }
	    else if(!check_right())
	    {
		snake_dir = 2;
		snake.dir(1, 0);
                console.log("Going right");
	    }
	}
	else if(snake_dir === -1 && check_up())
	{
            crashed = true;
	    if(!check_left())
	    {
		snake_dir = -2;
		snake.dir(-1, 0);
                console.log("Going left");
	    }
	    else if(!check_right())
	    {
		snake_dir = 2;
		snake.dir(1, 0);
                console.log("Going right");
	    }
	}
	else if(snake_dir === -2 && check_left())
	{
            crashed = true;
	    if(!check_up())
	    {
		snake_dir = -1;
		snake.dir(0, -1);
                console.log("Going up");
	    }
	    else if(!check_down())
	    {
		snake_dir = 1;
		snake.dir(0, 1);
                console.log("Going down");
	    }
	}
	else if(snake_dir === 2 && check_right())
	{
            crashed = true;
	    if(!check_up())
	    {
		snake_dir = -1;
		snake.dir(0, -1);
                console.log("Going up");
	    }
	    else if(!check_down())
	    {
		snake_dir = 1;
		snake.dir(0, 1);
                console.log("Going down");
	    }
	}
    }
}

function avoid_walls()
{
    if(snake_dir === -1 && snakeY[0] - 20 === 0 && crashed === false)
    {
        if(!check_left())
	{
	    snake_dir = -2;
	    snake.dir(-1, 0);
            console.log("Going left");
	}
	else if(!check_right())
	{
	    snake_dir = 2;
	    snake.dir(1, 0);
            console.log("Going right");
	}
    }
    else if(snake_dir === 1 && snakeY[0] + 20 === 580 && crashed === false)
    {
        if(!check_left())
	{
	    snake_dir = -2;
	    snake.dir(-1, 0);
	}
	else if(!check_right())
	{
	    snake_dir = 2;
	    snake.dir(1, 0);
	}
    }
    else if(snake_dir === 2 && snakeX[0] + 20 === 580 && crashed === false)
    {
        if(!check_up())
	{
	    snake_dir = -1;
	    snake.dir(0, -1);
	}
	else if(!check_down())
	{
	    snake_dir = 1;
	    snake.dir(0, 1);
	}
    }
    else if(snake_dir === -2 && snakeX[0] - 20 === 0 && crashed === false)
    {
        if(!check_up())
	{
	    snake_dir = -1;
	    snake.dir(0, -1);
	}
	else if(!check_down())
	{
	    snake_dir = 1;
	    snake.dir(0, 1);
	}
    }
}

//snake_dir -1 == down
//snake_dir 1 == up
//snake_dir 2 == right
//snake_dir -2 == left
function check_left()
{
    for(var i = 0; i < snake_length; i++)
    {
	if(snakeY[i] === snakeY[0] && snakeX[i] === snakeX[0] - 20)
	    return true;
    }
    return false;
}
function check_right()
{
    for(var i = 0; i < snake_length; i++)
    {
	if(snakeY[i] === snakeY[0] && snakeX[i] === snakeX[0] + 20)
	    return true;
    }
    return false;
}
function check_up()
{
    for(var i = 0; i < snake_length; i++)
    {
	if(snakeY[i] === snakeY[0] - 20 && snakeX[i] === snakeX[0])
	    return true;
    }
    return false;
}
function check_down()
{
    for(var i = 0; i < snake_length; i++)
    {
	if(snakeY[i] === snakeY[0] + 20 && snakeX[i] === snakeX[0])
	    return true;
    }
    return false;
}
function check_gameover()
{
    if(snakeX[0] === 0 || snakeX[0] === 580 || snakeY[0] === 0 || snakeY[0] === 580)
	gameOver = true;
    
    for(var i = 1; i < snake_length; i++)
    {
	if(snakeX[0] === snakeX[i] && snakeY[0] === snakeY[i])
	    gameOver = true;
    }
}
