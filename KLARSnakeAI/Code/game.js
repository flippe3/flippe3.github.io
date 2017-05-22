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
var megasmall = false;
var last = 4;
var left, right, up, down;
function setup()
{
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('myContainer');
    snake = new Snake();
    if(window.location.href.indexOf("SinglePlayer") != -1)
    {
        mode_singleplayer = true;
        mode_history = false;
        mode_twosnakes = false;
        frameRate(10);
        gen_food();

        left = createButton('←');
        left.position(-50, -50);
        right = createButton('→');
        right.position(-50, -50);
        up = createButton('↑');
        up.position(-50, -50);
        down = createButton('↓');
        down.position(-50, -50);

    }
    else if(window.location.href.indexOf("history") != -1)
    {
        frameRate(3);
        mode_singleplayer = false;
        mode_history = true;
        mode_twosnakes = false;
        gen_food();

        last = 1;
        square_width = 10;
        square_height = 10;
        WIDTH = 300;
        HEIGHT = 300;
        snake_length = 1;
        snakeX[0] = WIDTH / 2;
        snakeY[0] = HEIGHT / 2;
        gen_food();
        myCanvas = createCanvas(WIDTH, HEIGHT);
        myCanvas.parent('myContainer');

    }
    else if(window.location.href.indexOf("TwoSnakes") != -1)
    {
        mode_history = false;
        mode_singleplayer = false;
        mode_twosnakes = true;
        frameRate(40);
        gen_food();
    }
    else
    {
        mode_singleplayer = false;
        mode_history = false;
        mode_twosnakes = false;
        frameRate(50);
        gen_food();
    }
    if(mode_twosnakes)
    {
        gen_food();
        gen_food2();
        snake2 = new Snake();
    }

    if(!mode_history)
    {
        if(!mode_twosnakes)
            document.getElementById("snake_length").innerHTML = "Current length: " + snake_length;
        if(mode_twosnakes)
        {
            document.getElementById("snake_length").innerHTML = "Purple length: " + snake2_length;
            document.getElementById("snake2_length").innerHTML = "Blue length: " + snake2_length;
        }

    }


}

function draw()
{
    window_width = window.innerWidth;
    if(!mode_history){
        if(window_width > 1000)
        {
            big = true;
            medium = false;
            small = false;
            megasmall = false;
        }
        else if(window_width >= 700 && window_width <= 1000)
        {
            big = false;
            medium = true;
            small = false;
            megasmall = false;
        }
        else if(window_width < 700 && window_width >= 370)
        {
            small = true;
            big = false;
            medium = false;
            megasmall = false;
        }
        else if(window_width < 370)
        {
            small = false;
            big = false;
            medium = false;
            megasmall = true;
        }
        if(megasmall && last != 1)
        {
            last = 1;
            square_width = 10;
            square_height = 10;
            WIDTH = 300;
            HEIGHT = 300;
            snake_length = 1;
            if(mode_singleplayer)
            {
                left.position(100, 450);
                left.size(40,40);
                right.position(180, 450);
                right.size(40,40);
                up.position(140, 410);
                up.size(40,40);
                down.position(140, 450);
                down.size(40,40);

                left.mousePressed(left_phonebtn);
                right.mousePressed(right_phonebtn);
                up.mousePressed(up_phonebtn);
                down.mousePressed(down_phonebtn);

            }
            if(!mode_twosnakes)
            {
                snakeX[0] = WIDTH / 2;
                snakeY[0] = HEIGHT / 2;
                gen_food();
            }
            else
            {
                snake2_length = 1;
                snakeX[0] = (WIDTH / 2) - (4 * square_width);
                snakeY[0] = (HEIGHT / 2)
                snake2X[0] = (WIDTH / 2) + (4 * square_width);
                snake2Y[0] = (HEIGHT / 2);
                gen_food();
                gen_food2();
            }
            myCanvas = createCanvas(WIDTH, HEIGHT);
            myCanvas.parent('myContainer');
        }
        if(small && last != 2)
        {
            last = 2;
            square_width = 12;
            square_height = 12;
            WIDTH = 360;
            HEIGHT = 360;
            snake_length = 1;
            if(mode_singleplayer)
            {
                left.position(120, 510);
                left.size(40,40);
                right.position(200, 510);
                right.size(40,40);
                up.position(160, 470);
                up.size(40,40);
                down.position(160, 510);
                down.size(40,40);

                left.mousePressed(left_phonebtn);
                right.mousePressed(right_phonebtn);
                up.mousePressed(up_phonebtn);
                down.mousePressed(down_phonebtn);

            }
            if(!mode_twosnakes)
            {
                snakeX[0] = WIDTH / 2;
                snakeY[0] = HEIGHT / 2;
                gen_food();
            }
            else
            {
                snake2_length = 1;
                snakeX[0] = (WIDTH / 2) - (4 * square_width);
                snakeY[0] = (HEIGHT / 2)
                snake2X[0] = (WIDTH / 2) + (4 * square_width);
                snake2Y[0] = (HEIGHT / 2);
                gen_food();
                gen_food2();
            }
            myCanvas = createCanvas(WIDTH, HEIGHT);
            myCanvas.parent('myContainer');
        }
        else if(medium && last != 3)
        {
            last = 3;
            square_width = 16;
            square_height = 16;
            WIDTH = 480;
            HEIGHT = 480;
            snake_length = 1;
            if(mode_singleplayer)
                move_btns();
            if(!mode_twosnakes)
            {
                snakeX[0] = WIDTH / 2;
                snakeY[0] = HEIGHT / 2;
                gen_food();
            }
            else
            {
                snake2_length = 1;
                snakeX[0] = (WIDTH / 2) - (4 * square_width);
                snakeY[0] = (HEIGHT / 2)
                snake2X[0] = (WIDTH / 2) + (4 * square_width);
                snake2Y[0] = (HEIGHT / 2);
                gen_food();
                gen_food2();
            }
            myCanvas = createCanvas(WIDTH, HEIGHT);
            myCanvas.parent('myContainer');
        }
        else if(big && last != 4)
        {
            last = 4;
            square_width = 20;
            square_height = 20;
            WIDTH = 600;
            HEIGHT = 600;
            snake_length = 1;
            if(mode_singleplayer)
                move_btns();
            if(!mode_twosnakes)
            {
                snakeX[0] = WIDTH / 2;
                snakeY[0] = HEIGHT / 2;
                gen_food();
            }
            else
            {
                snake2_length = 1;
                snakeX[0] = (WIDTH / 2) - (4 * square_width);
                snakeY[0] = (HEIGHT / 2)
                snake2X[0] = (WIDTH / 2) + (4 * square_width);
                snake2Y[0] = (HEIGHT / 2);
                gen_food();
                gen_food2();
            }
            myCanvas = createCanvas(WIDTH, HEIGHT);
            myCanvas.parent('myContainer');

        }
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
function left_phonebtn()
{
    if(snake_dir != 2)
    {
        snake_dir = -2;
        snake.dir(-1, 0);
        start_solo = true;
    }
}
function right_phonebtn()
{
    if(snake_dir != -2)
    {
        snake_dir = 2;
        snake.dir(1, 0);
        start_solo = true;
    }
}
function up_phonebtn()
{
    if(snake_dir != -1)
    {
        snake_dir = 1;
        snake.dir(0, -1);
        start_solo = true;
    }
}
function down_phonebtn()
{
    if(snake_dir != 1)
    {
        snake_dir = -1;
        snake.dir(0, 1);
        start_solo = true;
    }
}
function move_btns()
{
    left.position(-50, -50);
    right.position(-50, -50);
    up.position(-50, -50);
    down.position(-50, -50);
}
function keyPressed()
{
    if(keyCode == UP_ARROW && snake_dir != -1)
    {
        snake_dir = 1;
        snake.dir(0, -1);
        start_solo = true;
    }
    else if(keyCode == DOWN_ARROW && snake_dir != 1)
    {
        snake_dir = -1;
        snake.dir(0, 1);
        start_solo = true;
    }
    else if(keyCode == RIGHT_ARROW && snake_dir != -2)
    {
        snake_dir = 2;
        snake.dir(1, 0);
        start_solo = true;
    }
    else if(keyCode == LEFT_ARROW && snake_dir != 2)
    {
        snake_dir = -2;
        snake.dir(-1, 0);
        start_solo = true;
    }
}

function gen_food()
{
    var cls = floor(28);
    var rws = floor(28);
    foodX = (floor(random(cls)) * square_width) + square_width;
    foodY = (floor(random(rws)) * square_height) + square_height;
}
function gen_food2()
{
    var cls = floor(28);
    var rws = floor(28);
    food2X = (floor(random(cls)) * square_width) + square_width;
    food2Y = (floor(random(rws)) * square_height) + square_height;
}
