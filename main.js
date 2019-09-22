let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let soundEfx = document.getElementById("soundEfx");
let gameOver = document.getElementById("gameover");
let win = document.getElementById("win");
let backgroundMusic = document.getElementById("backgroundMusic");
let timeinterval;

let maze = [
[1, 1, 1, 1, 1, 1,1,1,1],
[0, 0, 1, 0, 0, 1,3,0,0],
[0, 0, 0, 0, 1, 1, 0,0,0],
[-1, 1 , 1, 0, 0, 1,1,1,0],
[0, 0, 1, 0, 0, 1, 0,1,0],
[1, 0, 1, 0, 0, 1, 0,1,0],
[1, 0, 1, 0, 0, 0, 0,1,0],
[1, 0, 1, 1, 1, 1, 1,1,0],
[1, 0, 0, 0, 0, 0, 0,0,0],
[1, 1, 1, 1, 1, 1, 1,1,1]

];

let x = 0;
let y = 0;
let player = -1;
let tileSize = 50;
let starttime = 0;
let endtime = 8;

let button = document.querySelector("#btn");

button.addEventListener("click", buttonclicked);

function buttonclicked(){
backgroundMusic.play();

let timer = document.getElementById("timer")
document.querySelector("#timer").innerHTML = (endtime - starttime);
function timeIt(){
 starttime++
  document.querySelector("#timer").innerHTML = (endtime - starttime);
  if  (starttime == endtime) {
       starttime = 0;
       gameOver.play();
       backgroundMusic.pause();
       clearInterval(timeinterval);
    }
}
timeinterval = setInterval(timeIt, 1000);

}







function grid() {
    for (y = 0; y < maze.length; y++) {

        for (x = 0; x < maze[y].length; x++) {

            if (maze[y][x] == -1) {
                player = { y, x }; // koordinater for player
                console.log(player.y + "  " + player.x);
                ctx.fillStyle = "#C02C2C";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
            else if(maze[y][x] == 0){
                ctx.fillStyle = "#60B5DA";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
            else if(maze[y][x] == 1){
                ctx.fillStyle = "#773F2F";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }   else if(maze[y][x] == 3){
                ctx.fillStyle = "black";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

}
window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);

    switch (event.keyCode) {
         case 39:
         
            if (maze[player.y][player.x + 1] == 0) {

                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
                soundEfx.play();


            }
                grid();
         break

         case 40:
         

            if (maze[player.y + 1][player.x] == 0) {

                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
                soundEfx.play();

            }
                grid();
         break;

         case 37:
         
            if (maze[player.y][player.x - 1] == 0) {

                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
                soundEfx.play();

            }else if(maze[player.y][player.x - 1] == 3) {
                win.play();
                backgroundMusic.pause();
                clearInterval(timeinterval);
}

                grid();

         break;

            case 38: //KeyUp
                if (maze[player.y - 1][player.x] == 0) {
    
                    maze[player.y - 1][player.x] = -1; //players nye position
                    maze[player.y][player.x] = 0; // player gamle position
                    soundEfx.play();
    
                }else if  (maze[player.y - 1][player.x] == 3){
                    win.play();
                    clearInterval(timeinterval);
                backgroundMusic.pause();


  
                }
    grid();

    
    
                break;
    
            default:
                break;
        }
    })
    grid();



// 1. Vertikal akse//
// 2. Horisontal akse//
// 3. Weight //
// 4. Height //

/*
    console.log("x er = " + x +" og y = " + y);        }
    Det inderste loop kaster 3 tal afsted

let arrayCanvas = [0,0,0,-1,2,0,0,0,0,1]

 for(let i = 0; i<arrayCanvas.length;i++){

    if(arrayCanvas[i] == -1){
        ctx.fillStyle = "red";
    ctx.fillRect(i * 50, 0, 50, 50); 
    }else if(arrayCanvas[i] == 1){
        ctx.fillStyle = "teal";
    ctx.fillRect(i * 50, 0, 50, 50); 
    } 
    */


/*
let arrayCanvas = [0, 1, 0, -1, 2, 0 , 0, 0, 0, 1 ]


for(let i = 0;  i < arrayCanvas.length;  i++){
if(arrayCanvas[i]== -1){
ctx.fillStyle = "red";
    ctx.fillRect(i*50,0,50,50);

}else if (arrayCanvas[i]== 1){
ctx.fillStyle = "blue";
    ctx.fillRect(i*50,0,50,50);

 }else if (arrayCanvas[i] == 0){
ctx.fillStyle = "yellow";
    ctx.fillRect(i*50,0,50,50);

 }
}
*/

