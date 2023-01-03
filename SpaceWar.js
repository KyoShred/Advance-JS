function StartGame(){
    myGameArea.start();
}
function component (width, x){
    this.width = width;
    this.speed = 0;
    this.x = x;
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
function moveleft() {
    myGamePiece.speedX -= 1;
  }
  
  function moveright() {
    myGamePiece.speedX += 1;
  }