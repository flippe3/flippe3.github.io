var snake;
var foodX = 0, foodY = 0;
var snake_dir = 0;
var snake_length = 1;
var columns = 30;
var gameOver = false;
var rows = 30;

function setup()
{
	frameRate(30);
	var myCanvas = createCanvas(600, 600);
	myCanvas.parent('myContainer');
	snake = new Snake();
	document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
	gen_food();
}
function draw()
{
	background(0);
	snake.update();
	snake.show();
	simple_ai();
}
function keyPressed()
{
	if(keyCode === UP_ARROW && snake_dir != -1)
	{
		snake_dir = 1;
		snake.dir(0, -1);
	}	
	else if(keyCode === DOWN_ARROW && snake_dir != 1)
	{
		snake_dir = -1;
		snake.dir(0, 1);
	}
	else if(keyCode === RIGHT_ARROW && snake_dir != -2)
	{
		snake_dir = 2;
		snake.dir(1, 0);
	}
	else if(keyCode === LEFT_ARROW && snake_dir != 2)
	{
		snake_dir = -2;
		snake.dir(-1, 0);
	}
	else if(keyCode === 81)
		snake_length++;
}
function gen_food()
{
	var cls = floor(28);
	var rws = floor(28);
	foodX = (floor(random(cls)) * 20) + 20;
	foodY = (floor(random(rws)) * 20) + 20;
}
