
//Board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boarderWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //draws bird
    //context.fillStyle = "green";
    //context.fillRect(bird.x, bird.y, bird.width, bird.height);


    birdImg = new Image();
    birdImg.src = "/textures/flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "/textures/toppipr.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "/textures/bottompipe.png";

    requestAnimationFrame(update);
}

function upadate(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)
}