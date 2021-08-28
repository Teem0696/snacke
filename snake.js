const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

//create the unit
const box = 32;

//load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

//create the snake

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

//create the food

let food = {
    x:Math.floor(Math.random()*17+1) * box,
    y:Math.floor(Math.random()*15+3) * box
}

//create the score var

let score = 0;

// control the snake 

let d;

document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37 && d != "RIGHT"){            //65
        d ="LEFT";
    }else if(event.keyCode == 38 && d !="DOWN"){         //87
        d ="UP";
    }else if(event.keyCode == 39 && d !="LEFT"){        //68
        d ="RIGHT";
    }else if(event.keyCode == 40 && d !="UP"){           //83
        d ="DOWN"
    }
  }


// draw eversything to the canvas
function collision(head,array){
    for(let i = 0; i < array.lenght; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }

}

function draw(){

    ctx.drawImage(ground,0,0);

    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle="red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg,food.x,food.y);

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //which direction
    if( d == "LEFT") snakeX -=box
    if( d == "UP") snakeY -=box
    if( d == "RIGHT") snakeX +=box
    if( d == "DOWN") snakeY +=box

    //if the snake eats the food
    if(snakeX == food.x && snakeY == snakeY){
        score++
        
        food = {
            x:Math.floor(Math.random()*17+1) * box,
            y:Math.floor(Math.random()*15+3) * box
        }
        //we don't remove the tail
    }else{
        //remove the tail
    snake.pop();
    }
    
    //add new Head

    let newHead = {
        x : snakeX,
        y : snakeY
    }


    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
    }

    snake.unshift(newHead);

    ctx.fillStyle="white";
    ctx.font="45px Change One";
    ctx.fillText(score,2*box,1.6*box);
}



//call draw function every 100 ms

let game = setInterval(draw,100);




























// ctx.drawImage(foodimg,food.x,food.y);
// ctx.fillStyle="white";
// ctx.font="45px Change One";
// ctx.fillText(score,2*box,1.6*box);
// //}
// let game = setInterval(draw,100);


// document.addEventListener("keydown",direction);
// function direction(event){
// if(event.keyCode == 65  && d !="RIGHT"   ){
//     d ="LEFT";
// }
// else if(event.keyCode == 87  && d !="DOWN"  ){
//     d ="UP";
// }
// else if(event.keyCode == 68   && d !="LEFT"  ){
//     d ="RIGHT";
// }
// else if(event.keyCode == 83  && d !="UP"  ){
//     d ="DOWN"
// }
// }


// Array=[9,0,1,2,3,]
// Array.unshift(9);        Array.prototype();

// snake.pop();
// snakeX = snake[0].x;
// snakey = snake[0].y;

// snakeX+=box;
// snakeX-=box;
// snakeY-=box;
// snakeY+=box
