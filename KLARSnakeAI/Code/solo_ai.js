// JavaScript Document
//snake.dir(x, y);
//snake_dir 1 == down
//snake_dir -1 == up
//snake_dir 2 == right
//snake_dir -2 == left
var crashed = false;
var past_lengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var shorter__multiplier = 0;
var longer_multiplier = 0;
var same_multiplier = 14;
var sum = 0;
var yourbest = -1;
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
    if(mode_twosnakes)
    {
        if(food2Y < snake2Y[0] && snake2_dir != 1 && !check_up2())
        {
            snake2_dir = -1;
            snake.dir2(0, -1);
        }
        else if(food2Y > snake2Y[0] && snake2_dir != -1 && !check_down2())
        {
            snake2_dir = 1;
            snake.dir2(0, 1);
        }
        else if(food2X > snake2X[0] && snake2_dir != -2 && !check_right2())
        {
            snake2_dir = 2;
            snake.dir2(1, 0);
        }
        else if(food2X < snake2X[0] && snake2_dir != 2 && !check_left2())
        {
            snake2_dir = -2;
            snake.dir2(-1, 0);
        }
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
            }
            else if(!check_right())
            {
                snake_dir = 2;
                snake.dir(1, 0);
            }
        }
        else if(snake_dir === -1 && check_up())
        {
            crashed = true;
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
        else if(snake_dir === -2 && check_left())
        {
            crashed = true;
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
        else if(snake_dir === 2 && check_right())
        {
            crashed = true;
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
    if(mode_twosnakes)
    {
        for(var i = 0; i < snake2_length; i++)
        {
            if(snake2_dir === 1 && check_down2())
            {
                crashed = true;
                if(!check_left2())
                {
                    snake2_dir = -2;
                    snake.dir2(-1, 0);
                }
                else if(!check_right2())
                {
                    snake2_dir = 2;
                    snake.dir2(1, 0);
                }
            }
            else if(snake2_dir === -1 && check_up2())
            {
                crashed = true;
                if(!check_left2())
                {
                    snake2_dir = -2;
                    snake.dir2(-1, 0);
                }
                else if(!check_right2())
                {
                    snake2_dir = 2;
                    snake.dir2(1, 0);
                }
            }
            else if(snake2_dir === -2 && check_left2())
            {
                crashed = true;
                if(!check_up2())
                {
                    snake_2dir = -1;
                    snake.dir2(0, -1);
                }
                else if(!check_down2())
                {
                    snake2_dir = 1;
                    snake.dir2(0, 1);
                }
            }
            else if(snake2_dir === 2 && check_right2())
            {
                crashed = true;
                if(!check_up2())
                {
                    snake2_dir = -1;
                    snake.dir2(0, -1);
                }
                else if(!check_down2())
                {
                    snake2_dir = 1;
                    snake.dir2(0, 1);
                }
            }
        }
    }
}

function avoid_walls()
{
    if(snake_dir === -1 && snakeY[0] - square_height === 0)
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
    else if(snake_dir === 1 && snakeY[0] + square_width === HEIGHT - square_height)
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
    if(snake_dir === 2 && snakeX[0] + square_width === WIDTH)
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
    else if(snake_dir === -2 && snakeX[0] - square_width === 0)
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
    if(mode_twosnakes)
    {
        if(snake2_dir === -1 && snake2Y[0] - square_height == 0)
        {
            if(!check_left2())
            {
                snake2_dir = -2;
                snake.dir2(-1, 0);
            }
            else if(!check_right2())
            {
                snake2_dir = 2;
                snake.dir2(1, 0);
            }
        }
        else if(snake2_dir == 1 && snake2Y[0] + square_width == HEIGHT - square_height)
        {
            if(!check_left2())
            {
                snake2_dir = -2;
                snake.dir2(-1, 0);
            }
            else if(!check_right2())
            {
                snake2_dir = 2;
                snake.dir2(1, 0);
            }
        }
        if(snake2_dir === 2 && snake2X[0] + square_width == WIDTH)
        {
            if(!check_up2())
            {
                snake2_dir = -1;
                snake.dir2(0, -1);
            }
            else if(!check_down2())
            {
                snake2_dir = 1;
                snake.dir2(0, 1);
            }
        }
        else if(snake2_dir == -2 && snake2X[0] - square_width == 0)
        {
            if(!check_up2())
            {
                snake2_dir = -1;
                snake.dir2(0, -1);
            }
            else if(!check_down2())
            {
                snake2_dir = 1;
                snake.dir2(0, 1);
            }
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
        if(snakeY[i] == snakeY[0] && snakeX[i] == snakeX[0] - square_width)
            return true;
    }
    if(mode_twosnakes)
    {
        for(var i = 0; i < snake2_length; i++)
        {
            if(snakeX[0] - square_width == snake2X[i] && snakeY[0] == snake2Y[i])
            {
                return true;
            }
        }
    }
    return false;
}
function check_right()
{
    for(var i = 0; i < snake_length; i++)
    {
        if(snakeY[i] == snakeY[0] && snakeX[i] == snakeX[0] + square_width)
            return true;
    }
    if(mode_twosnakes)
    {
        for(var i = 0; i < snake2_length; i++)
        {
            if(snakeX[0] + square_width == snake2X[i] && snakeY[0] == snake2Y[i])
            {
                return true;
            }
        }
    }

    return false;
}
function check_up()
{
    for(var i = 0; i < snake_length; i++)
    {
        if(snakeY[i] == snakeY[0] - square_height && snakeX[i] == snakeX[0])
            return true;
    }
    if(mode_twosnakes){
        for(var i = 0; i < snake2_length; i++)
        {
            if(snakeY[0] - square_height == snake2Y[i] && snakeX[0] == snake2X[i])
            {
                return true;
            }
        }
    }
    return false;
}
function check_down()
{
    for(var i = 0; i < snake_length; i++)
    {
        if(snakeY[i] == snakeY[0] + square_height && snakeX[i] == snakeX[0])
            return true;
    }
    if(mode_twosnakes){
        for(var i = 0; i < snake2_length; i++)
        {
            if(snakeY[0] + square_height == snake2Y[i] && snakeX[0] == snake2X[i])
            {
                return true;
            }
        }
    }
    return false;
}
function check_left2()
{
    for(var i = 0; i < snake2_length; i++)
    {
        if(snake2Y[i] == snake2Y[0] && snake2X[i] == snake2X[0] - square_width)
            return true;
    }
    for(var i = 0; i < snake_length; i++)
    {
        if(snake2X[0] - square_width == snakeX[i] && snake2Y[0] == snakeY[i])
            return true;
    }
    return false;
}
function check_right2()
{
    for(var i = 0; i < snake2_length; i++)
    {
        if(snake2Y[i] == snake2Y[0] && snake2X[i] == snake2X[0] + square_width)
            return true;
    }
    for(var i = 0; i < snake_length; i++)
    {
        if(snake2X[0] + square_width == snakeX[i] && snake2Y[0] == snakeY[i])
            return true;
    }
    return false;
}
function check_up2()
{
    for(var i = 0; i < snake2_length; i++)
    {
        if(snake2Y[i] == snake2Y[0] - square_height && snake2X[i] == snake2X[0])
            return true;
    }
    for(var i = 0; i < snake_length; i++)
    {
        if(snake2Y[0] - square_height == snakeY[i] && snake2X[0] == snakeX[i])
            return true;
    }
    return false;
}
function check_down2()
{
    for(var i = 0; i < snake2_length; i++)
    {
        if(snake2Y[i] == snake2Y[0] + square_height && snake2X[i] == snake2X[0])
            return true;
    }
    for(var i = 0; i < snake_length; i++)
    {
        if(snake2Y[0] + square_height == snakeY[i] && snake2X[0] == snakeX[i])
            return true;
    }
    return false;
}
function check_gameover()
{
    if(snakeX[0] <= 0 || snakeX[0] >= WIDTH - square_width || snakeY[0] <= 0 || snakeY[0] >= HEIGHT - square_height)
    {
        gameOver = true;
        latest_lengths();
        gen_food();
    }

    for(var i = 1; i < snake_length; i++)
    {
        if(snakeX[0] === snakeX[i] && snakeY[0] === snakeY[i])
        {
            gameOver = true;
            gen_food();
            latest_lengths();
        }
    }

    if(mode_twosnakes)
    {
        if  (snake2X[0] <= 0 || snake2X[0] >= WIDTH - square_width || snake2Y[0] <= 0 || snake2Y[0] >= HEIGHT - square_height)
        {
            gameOver = true;
            latest_lengths();
            gen_food2();
        }
        for(var i = 1; i < snake2_length; i++)
        {
            if(snake2X[0] == snake2X[i] && snake2Y[0] == snake2Y[i])
            {
                gameOver = true;
                latest_lengths();
                gen_food2();
            }
        }
        for(var i = 0; i < snake2_length; i++)
        {
            if(snakeX[0] == snake2X[i] && snakeY[0] == snake2Y[i])
            {
                gameOver = true;
                latest_lengths();
                gen_food2();
            }
        }
        for(var i = 0; i < snake_length; i++)
        {
            if(snake2X[0] == snakeX[i] && snake2Y[0] == snakeY[i])
            {
                gameOver = true;
                latest_lengths();
                gen_food2();
            }
        }
    }


}

function latest_lengths()
{
    for(var i = 11; i > 0; i--)
    {
        past_lengths[i] = past_lengths[i - 1];
    }
    past_lengths[0] = snake_length;
    if(!mode_twosnakes && !mode_singleplayer && !mode_history)
    {
        sum += past_lengths[0];
        document.getElementById("Last_length").innerHTML = "Last length: "+ past_lengths[0];
    }
    if(mode_twosnakes)
    {
        if(snake_length == snake2_length)
            past_lengths[0] = "same";
        else if(snake2_length > snake_length)
            past_lengths[0] = "Blue";
        else
            past_lengths[0] = "Purple"
    }
    if(mode_singleplayer)
    {
        if(past_lengths[0] > yourbest)
        {
            yourbest = past_lengths[0];
            document.getElementById("snake_best").innerHTML = "Your best: " + yourbest;
        }
    }

    if(!mode_singleplayer && !mode_history)
    {
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
    }

}
