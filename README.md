# Classic Arcade Game Clone Project

The main moto of the game is to make the player to go to the water area without touching the enemies. And do an activity after the player reached the water area.

## Table of Contents

1.css folder
2.images folder
3.js folder
4.index.html files
5.README.md file

-   [Instructions](#instructions)
-   [Contributing](#contributing)
    ## Procedure to download the scratch project from the git hub


-   This game can be repository on github: <https://github.com/udacity/frontend-nanodegree-arcade-game>.
-   Download from the above github link.
-   Now extract the folder.
    ## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Steps involved in this project.

Step 1 :- Here I resolved the bugs that given in starter code, Then I got canvas.
Step 2 :- I applied handleInput() method for player controlling through keyboard.
Step 3 :- I created a array(allEnemies\[]) and updated more than two enemies in this array.
Step 4 :- After that I provided speed and different position for enemies in initial stage of the game.
Step 5 :- We need to check this logic (if Player can not move the out of screen and if collision occurred player got into their initial position and player reached destination then we got a alert and placed the player in initial position).

## Procedure to play this game.

1.  Open index.html file in any browser.
2.  Move player position by using Arrow Keys (left, right, up, down) from keyboard.
3.  Left and right Keys for player moving lift side and right side meanwhile up and down keys is for player moving up and down.
4.  The challenge is to avoid the bugs that travel on the road. If a bug is touched, the character is reset back at the beginning. Upon reaching the water, the user is also reset back to the beginning.
5.  Player need to go grass to water (Bottom to top) without touching enemies bugs then got a alert message and player got their initial position in screen.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
