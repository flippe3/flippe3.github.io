var crashed = false;
var past_lengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var divider = 0;
var shorter__multiplier = 0;
var longer_multiplier = 0;
var same_multiplier = 14;
var sum = 0;
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
