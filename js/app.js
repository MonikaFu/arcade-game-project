// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here

    // The image/sprite for our enemies, this uses
    // a helper that is provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //initial horizontal position of the enemy
    this.x = -201;
    //initial vertical position of the enemy specified at instantiation
    // can be first, secnd or third row counting from the top
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
    }
    //speed of the enemy is specified at instantiation
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // update the position of the enemy, relative to the time that passed between the
    // canvas update and enemy's speed
    this.x+=this.speed*dt;
    // make sure that the enemy's movement is looped
    if (this.x>606) {
    	this.x=-101;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class specification
var Player = function() {
	// Variables applied to each of our instances go here

	// The image/sprite for our enemies, this uses
    	// a helper that is provided to easily load images
	this.sprite = 'images/char-boy.png';
	// initial horizontal position of the player
	this.x = 202;
	// initial vertical position of the player
	this.y = 380;
	// initial state of the player
	this.move = 'no move';
};

// update method of the player checks if it's state changed and if it's position
// should be changed as a result. Then the state is reset to 'no move'.
Player.prototype.update = function() {
	switch(this.move) {
		case 'no move':
			break;
		case 'left':
			if (this.x>0) {
				this.x+=(-101);
			}
			this.move='no move';
			break;
		case 'right':
			if (this.x<404) {
				this.x+=101;
			}
			this.move='no move';
			break;
		case 'up':
			if (this.y>-45) {
				this.y+=(-85);
			}
			this.move='no move';
			break;
		case 'down':
			if (this.y<380) {
				this.y+=85;
			}
			this.move='no move';
			break;
	}
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handleInput method for the player. Changes the state of the player depending on a
// key that was pressed by the user
Player.prototype.handleInput = function(movement) {
	if (typeof(movement)!='undefined') {
		this.move=movement;
	} else {
		this.move='no move';
	}
};


// Instantiation of the objects.
// All enemy objects are placed in in an array called allEnemies
// The player object is placed in a variable called player
let Enemy1 = new Enemy(1,175);
let Enemy2 = new Enemy(2,253);
let Enemy3 = new Enemy(3,471);
let Enemy4 = new Enemy(1,284);
let Enemy5 = new Enemy(3,100);
let allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4, Enemy5];
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Event listeners for the winning modal

// When the user clicks on <span> (x), close the modal
$('.close').click(function() {
    $('.modal').css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    $('.modal').css('display', 'none');
};
