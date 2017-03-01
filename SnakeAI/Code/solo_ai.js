// JavaScript Document
//snake.dir(x, y);
function simple_ai()
{
	if(foodY < snakeY[0] && snake_dir != -1)
	{
		snake_dir = 1;
		snake.dir(0, -1);
	}	
	else if(foodY > snakeY[0] && snake_dir != 1)
	{
		snake_dir = -1;
		snake.dir(0, 1);
	}
	else if(foodX > snakeX[0] && snake_dir != -2)
	{
		snake_dir = 2;
		snake.dir(1, 0);
	}
	else if(foodX < snakeX[0] && snake_dir != 2)
	{
		snake_dir = -2;
		snake.dir(-1, 0);
	}
}