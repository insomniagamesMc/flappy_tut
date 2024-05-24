//Board
let Board;
let boardWidth = 360;
let boardHight = 640;
let context;

let birdWidth = 34;
let birdHight = 24;
let birdX = boardWidth/8;
let birdY = boardHight/2;

let bird = {
    x : birdX,
    y :  birdY,
    width : birdWidth,
    hight : birdHight
}

window.onLoad = function () {
    board = document.getElementById("board");
    board.hight = boardHight;
    board.width = boardWidth;
    context = board.getContext("2d");


    context.fillStyle = "Green";
    context.fillReact(bird.x, bird.y, bird.width, bird.Hight)
}