function StartGame(){
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = (500);
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.key;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        });
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
    
}

function component (width, height, x, y){
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillRect(this.x, this.width);
    }
    this.newPos = function() {
        this.x += this.speedX;
    }
} 
function updateGameArea(){
    myGameArea.clear();
    myGameArea.newPos();
    myGameArea.update();
}
let myGamePiece = new component(30, 30, 10, 10);

function moveleft() {
    myGamePiece.speedX -= 1;
}
  
function moveright() {
    myGamePiece.speedX += 1;
}
function stopMove() {
    myGamePiece.speedX = 0;
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      moveleft();
    } else if (e.key === 'ArrowRight') {
      moveright();
    }
  });
  StartGame();
