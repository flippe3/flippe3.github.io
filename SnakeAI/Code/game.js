var snake;
var foodX = 0, foodY = 0;
var food2X = 0, food2Y = 0;
var snake_dir = 0;
var snake2_dir = 0;
var snake_length = 1;
var snake2_length = 1;
var columns = 30;
var gameOver = false;
var rows = 30;
var shorter__multiplier = 0;
var longer_multiplier = 0;
var same_multiplier = 14;
var mode_singleplayer = false;
var mode_history = false;
var mode_twosnakes = false;
var start_solo = false;
var WIDTH = 600;
var HEIGHT = 600;
var square_width = 20;
var square_height = 20;
var window_width = window.innerWidth;
var small = false;
var medium = false;
var big = true;
var change = false;
function setup()
{
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('myContainer');
    snake = new Snake();
    gen_food();
    
    //document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
    //document.getElementById("shorter_multiplier").innerHTML = "multiplier: " + 0;
    //document.getElementById("longer_multiplier").innerHTML = "multiplier: " + 0;

    if(window.location.href.indexOf("SinglePlayer") != -1)
    {
        mode_singleplayer = true;
        mode_history = false;
        mode_twosnakes = false;
        frameRate(10);

    }
    else if(window.location.href.indexOf("history") != -1)
    {
        frameRate(3);
        mode_singleplayer = false;
        mode_history = true;
        mode_twosnakes = false;
    }
    else if(window.location.href.indexOf("TwoSnakes") != -1)
    {
        mode_history = false;
        mode_singleplayer = false;
        mode_twosnakes = true;
        frameRate(40);
    }
    else
    {
        mode_singleplayer = false;
        mode_history = false;
        mode_twosnakes = false;
        frameRate(50);
    }
    if(mode_twosnakes)
        gen_food2();
}
function draw()
{
    window_width = window.innerWidth;
    if(window_width < 1200 && window_width > 600)
    {
        medium = true;
        big = false;
        small = false;
        change = true;
    }
    else if(window_width >= 800)
    {
        big = true;
        medium = false;
        small = false;
        change = true;
    }
    else if(window_width <= 1000)
    {
        small = true;
        big = false;
        medium = false;
        change = true;
    }
    if(small)
    {
        square_width = 10;
        square_height = 10;
        WIDTH = 300;
        HEIGHT = 300;
        myCanvas = createCanvas(WIDTH, HEIGHT);
        myCanvas.parent('myContainer');
    }
    else if(medium)
    {
        square_width = 16;
        square_height = 16;
        WIDTH = 480;
        HEIGHT = 480;
        myCanvas = createCanvas(WIDTH, HEIGHT);
        myCanvas.parent('myContainer');
    }
    else if(big)
    {
        square_width = 20;
        square_height = 20;
        WIDTH = 600;
        HEIGHT = 600;
        myCanvas = createCanvas(WIDTH, HEIGHT);
        myCanvas.parent('myContainer');
    }
    if(keyIsDown(81))
        snake_length++;
    //Now it wont scroll with key and arrowkeys
    window.addEventListener("keydown", function(e) {
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    if(!mode_history)
        background(0);
    else
        background(189, 221, 141);
    snake.show();
    check_gameover();
    if (!mode_singleplayer)
    {
        simple_ai();
        dodge();
        avoid_walls();
        snake.update();
    }
    else if(mode_singleplayer)
    {
        if(start_solo)
            snake.update();
    }
    
}
function keyPressed()
{
    if(keyCode === UP_ARROW && snake_dir != -1)
    {
        snake_dir = 1;
        snake.dir(0, -1);
        start_solo = true;
    }
    else if(keyCode === DOWN_ARROW && snake_dir != 1)
    {
        snake_dir = -1;
        snake.dir(0, 1);
        start_solo = true;
    }
    else if(keyCode === RIGHT_ARROW && snake_dir != -2)
    {
        snake_dir = 2;
        snake.dir(1, 0);
        start_solo = true;
    }
    else if(keyCode === LEFT_ARROW && snake_dir != 2)
    {
        snake_dir = -2;
        snake.dir(-1, 0);
        start_solo = true;
    }
}

function gen_food()
{
    var gfood = false;
    var cls = floor(28);
    var rws = floor(28);
    foodX = (floor(random(cls)) * square_width) + square_width;
    foodY = (floor(random(rws)) * square_height) + square_height;
    /*
      if(past_lengths[0] != 0)
      {
      document.getElementById("shorter_multiplier").innerHTML = "multiplier: " + shorter_multiplier;
      document.getElementById("longer_multiplier").innerHTML = "multiplier: " + longer_multiplier;
      }
      else
      {
      document.getElementById("shorter_multiplier").innerHTML = "multiplier: " + 0;
      document.getElementById("longer_multiplier").innerHTML = "multiplier: " + 0;

      }
    */
}
function gen_food2()
{
    var gfood = false;
    var cls = floor(28);
    var rws = floor(28);
    food2X = (floor(random(cls)) * square_width) + square_width;
    food2Y = (floor(random(rws)) * square_height) + square_height;
}
