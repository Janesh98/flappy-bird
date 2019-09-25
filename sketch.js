var bird;
var pipes = [];
var game_speed = 6;
var score;
var backImg;
var avatar;
var pipeImg

function preload() {
    backImg = loadImage('images/flappy-background.png');
    bottomPipe = loadImage('images/pipe.png');
    topPipe = loadImage('images/pipe-flipped.png');
    avatar = loadImage('images/bird.png');
}

function setup() {
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe(game_speed));
    score = new Score();
}

function draw() {
    background(backImg);
    bird.show();
    bird.update();
    score.show();

    if(frameCount % 300 == 0) {
      game_speed += 0.5;
      //console.log(game_speed);
    }

    if(frameCount % 75 == 0) {
      pipes.push(new Pipe(game_speed));
    }

    for(var i = pipes.length-1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      if(pipes[i].pass(bird)) {
          score.update();
      }

      if(pipes[i].collides(bird)) {
        console.log("HITS");
        fill(0);
        textSize(64);
        textAlign(CENTER, CENTER);
        text('GAME OVER', width / 2, height / 2);
        textAlign(LEFT, BASELINE);
        noLoop();

      }

      if(pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }

      if (touches.length > 0) {
          bird.jump;
      }
  }
}

function keyPressed() {
  if(key == ' ')
    bird.jump();
}
