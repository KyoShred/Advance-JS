const grid = document.querySelector(".grille");
for (let i = 0; i < 240; i++) {
    const squares = document.createElement("div");
    grid.appendChild(squares);
}

var myGameArea = {
    container: document.createElement("div"),
    start: function() {
        this.container.style.width = "390px";
        this.container.style.height = "390px";
        this.container.style.border = "1px solid black";
        document.body.insertBefore(this.container, document.body.childNodes[0]);

        // Generate the grid
        const grid = document.createElement("div");
        grid.classList.add("grille");
        for (let i = 0; i < 240; i++) {
            const squares = document.createElement("div");
            grid.appendChild(squares);
        }
        this.container.appendChild(grid);
    },
    clear: function() {
        // no need to clear the div element, just remove all child elements
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }
};
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
        // create a new div element
        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        // append the div element to the game container
        myGameArea.container.appendChild(this.div);
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
    if (myGameArea.key && myGameArea.key === 'ArrowLeft') {
        myGamePiece.div.style.left = myGamePiece.x + "px";
    }
    if (myGameArea.key && myGameArea.key === 'ArrowRight') {
        myGamePiece.div.style.right = myGamePiece.x + "px";

    }
    if (myGameArea.key && myGameArea.key === 'ArrowUp') {
        myGamePiece.div.style.top = myGamePiece.y + "px";
    }
    if (myGameArea.key && myGameArea.key === 'ArrowDown') {
        myGamePiece.div.style.down = myGamePiece.y + "px";
    }
    myGamePiece.newPos(); 
    myGamePiece.update();
}