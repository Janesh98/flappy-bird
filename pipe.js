function Pipe(game_speed) {
  this.speed = game_speed;
  this.spacing = 175;
  this.top = random(height/6, height*0.75);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.y = height - this.bottom;
  this.w = 80;
  this.highlight = false;

  this.show = function() {
    fill(255);
    if(this.highlight) {
      // red
      fill(255, 0, 0);

    }

    //rect(this.x, 0, this.w - 138, this.top);
    fill(100, 255, 100);
    rect(this.x, 0, this.w, this.top);
    //image(topPipe, this.x, 0, this.w, this.top);
    fill(100, 255, 100);
    rect(this.x, this.y, this.w, this.bottom);
    //image(bottomPipe, this.x, this.y, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    return this.x < -this.w;
  }

  this.collides = function(bird) {
    this.pipe_x = this.w/2;
    //console.log(bird.x, this.x, this.pipe_x)
    if (bird.y <= this.top || bird.y >= this.y) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
      this.highlight = false;
      return false;
    }
  }
}
