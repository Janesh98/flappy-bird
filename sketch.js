var bird;
var pipes = [];
var game_speed = 6;
var score;

function setup() {
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe(game_speed));
    score = new Score();
}

function draw() {
    background(0);
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
      pipes[i].show();
      pipes[i].update();

      if(score.survived(bird, pipes[i])) {
        score.update();
      }

      if(pipes[i].collides(bird)) {
        console.log("HITS");
        noLoop();
      }

      if(pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }
}

function keyPressed() {
  if(key == ' ')
    bird.jump();
}
