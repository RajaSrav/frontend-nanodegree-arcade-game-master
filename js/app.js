// strict method is used for detecting undeclared variables and code should be run in strict mode.
'use strict';
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  this.x = this.x + this.speed * dt;
  while (this.x > 505) {
    this.x = 0
  }
  if (player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 60 && player.y + 70 > this.y) {
    player.x = 202;
    player.y = 404;
    alert("opps your game lose")
  }
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// Place the Player
let Player = function(x, y) {
  this.sprite = "images/char-boy.png";
  this.x = 202;
  this.y = 404;

};
let player = new Player();
// This class requires an update(), render() and
Player.prototype.update = function(dt) {

};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// a handleInput() method.
Player.prototype.handleInput = function(directions) {
  // Right keey press move right side 100 steps (one box move)
  if (directions === "right" && this.x < 400) {
    this.x += 100;
  }
  // left keey press move left side -101 steps (left side one box move)
  if (directions === "left" && this.x > 0) {
    this.x -= 101;
  }
  // up keey press move up direction -100 steps (one box move)
  if (directions === "up" && this.y > 0) {
    this.y -= 100;
  }
  // down keey press move down 100 steps (one box move)
  if (directions === "down" && this.y < 404) {
    this.y += 100;
  }
  if (this.y < 0) {
    this.x = 202;
    this.y = 404;
    alert("congratulations your won the Game");
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// Place the player object in a variable called player
let allEnemiesPosition = [60, 140, 230];
// map function for generating enemies in different position
allEnemiesPosition.map((direction) => {
  //  Math.random() method
  let min = 0;
  let max = 333;
  var enemy = new Enemy(min, direction, 100 + Math.floor(Math.random() * max));
  allEnemies.push(enemy);
})


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
