var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,2,1,1,1,2,1,1,1,2,2,2,2,6,2,1,1,1,2,1,2,1,2],
    [2,1,1,1,2,1,1,2,1,1,2,3,2,1,1,2,1,1,2,1,2,2,1,2,2,1,1,1,2],
    [2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,1,2,1,1,1,2,1,2,1,2],
    [2,1,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,2],
    [2,1,2,1,2,1,1,4,1,2,1,1,1,2,1,2,2,2,2,1,2,1,1,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,1,2,2,1,2,1,2,1,2,2,1,2,2,1,2,1,2,2,1,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var lives = 1;
var gameover ="";
var score =0;
var pacman = {
    x: 1,
    y: 1
};

function displayworld(){
    var output = ' ';
    for(var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>/n";
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 0)
                output += "<div class='empty'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 3)
            output += "<div class='cherry'></div>";
            if(world[i][j] == 4)
            output += "<div class='ghostred'></div>";
            else if(world[i][j] == 5)
            output += "<div class='ghostblue'></div>";
            if(world[i][j] == 6)
            output += "<div class='ghostorange'></div>";
        }
        output += "\n</div>";
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
}
function displayPacman() {
document.getElementById('pacman').style.left = pacman.x*20 +"px";
document.getElementById('pacman').style.top = pacman.y*20 +"px"
}
function displayScore() {
document.getElementById('score').innerHTML = score;
}
function displayLives() {
    document.getElementById('lives').innerHTML = lives;
}
function displayGameOver() {
    document.getElementById('gameover').innerHTML = gameover;
}
displayLives();
displayGameOver();
displayworld();
displayPacman();
displayScore();

document.onkeydown = function(e){
if(e.keyCode == 37 && world[pacman.y][pacman.x-1] !==2) {
    document.getElementById("pacman").style.transform = "rotate(180deg)";
    pacman.x --;
}
else if(e.keyCode ==39 && world[pacman.y][pacman.x+1] !==2) {
    document.getElementById("pacman").style.transform = "rotate(0deg)";
    pacman.x ++;
}
else if(e.keyCode ==38 && world[pacman.y-1][pacman.x] !==2) {
    document.getElementById("pacman").style.transform = "rotate(270deg)";
    pacman.y --;
}
else if(e.keyCode ==40 && world[pacman.y+1][pacman.x] !==2) {
    document.getElementById("pacman").style.transform = "rotate(90deg)";
    pacman.y ++;
}
if(world[pacman.y][pacman.x] ==1) {
    world[pacman.y][pacman.x] =0;
    score+=10;
    displayworld();
    displayScore();
}
if(world[pacman.y][pacman.x] ==3) {
    world[pacman.y][pacman.x] =0;
    score+=50;
    displayworld();
    displayScore();
    }
    if(world[pacman.y][pacman.x] ==4) {
        world[pacman.y][pacman.x] =2;
        lives --;
        displayLives()
        gameover+="Game Over";
        displayGameOver();
        gameover = "";
    }
    if(world[pacman.y][pacman.x] ==5) {
        world[pacman.y][pacman.x] =2;
        lives --;
        displayworld();
        displayLives()
        gameover+="Game Over";
        displayGameOver();
        gameover = "";
    }
    if(world[pacman.y][pacman.x] ==6) {
        world[pacman.y][pacman.x] =2;
        lives --;
        displayworld();
        displayLives()
        gameover+="Game Over";
        displayGameOver();
        gameover = "";
    }
    if(lives <= 0){
        setTimeout("location.href = 'index.html'",1000);
    }
// console.log(e.keyCode);
displayPacman();
}