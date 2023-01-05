window.onload = startGame;

var myGamePiece;

function startGame(){
    myGameArea.start();
    myGamePiece = new Player(30, 30, "red", 195, 360);
    
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 390;
        this.canvas.height = 390;
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
function Player(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.color = color;
    this.limit = false;
    this.moving = false;  // new flag to track if the player is moving or not
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
      if (this.moving) return;  // return early if the player is already moving
      // move the game piece in a square-by-square imitation
      this.x += this.speedX;
      this.y += this.speedY;
      // add a margin around the edge of the game area
      const margin = 30;
      if (this.x < margin) {
        this.x = margin;
      } else if (this.x > myGameArea.canvas.width - this.width - margin) {
        this.x = myGameArea.canvas.width - this.width - margin;
      }
      if (this.y < (myGameArea.canvas.height*70)/100) {
        this.y = (myGameArea.canvas.height*70)/100;
      } else if (this.y > myGameArea.canvas.height - this.height - margin) {
        this.y = myGameArea.canvas.height - this.height - margin;
      }
      // set the moving flag to true
      this.moving = true;
      // after a short delay, set the moving flag to false
      setTimeout(() => this.moving = false, 200);  // delay in milliseconds
    }
  }
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0; 
    if (myGameArea.key && myGameArea.key === 'ArrowLeft') {
      myGamePiece.speedX = -30;
    }
    if (myGameArea.key && myGameArea.key === 'ArrowRight') {
      myGamePiece.speedX = 30;
    }
    if (myGameArea.key && myGameArea.key === 'ArrowUp') {
      myGamePiece.speedY = -30;
    }
    if (myGameArea.key && myGameArea.key === 'ArrowDown') {
      myGamePiece.speedY = 30;
    }
    myGamePiece.newPos(); 
    myGamePiece.update();
}



