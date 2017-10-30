// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -201;
    switch(y) {
    	case 1:
    		this.y = 62;
    		break;
    	case 2:
    		this.y = 145;
    		break;
    	case 3:
    		this.y = 228;
    		break;
    };
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. 
    this.x+=this.speed*dt;
    if (this.x>606) {
    	this.x=-101;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	this.sprite = 'images/char-boy.png';
	this.x = 202;
	this.y = 380;
	this.move = 'no move'
};

Player.prototype.update = function() {
	switch(this.move) {
		case 'no move':
			break;
		case 'left':
			if (this.x>0) {
				this.x+=(-101);
			};
			this.move='no move'
			break;
		case 'right':
			if (this.x<404) {
				this.x+=101;
			};
			this.move='no move'
			break;
		case 'up':
			if (this.y>-45) {
				this.y+=(-85);
			};
			this.move='no move'
			break;
		case 'down':
			if (this.y<380) {
				this.y+=85;
			};
			this.move='no move'
			break;
	};
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement) {
	if (typeof(movement)!='undefined') {
		this.move=movement;
	} else {
		this.move='no move'
	};
}; 


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let Enemy1 = new Enemy(1,175);
let Enemy2 = new Enemy(2,253);
let Enemy3 = new Enemy(3,471);
let Enemy4 = new Enemy(1,284);
let Enemy5 = new Enemy(3,100);
let allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4, Enemy5];
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// When the user clicks on <span> (x), close the modal
$('.close').click(function() {
    $('.modal').css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    $('.modal').css('display', 'none');
};
