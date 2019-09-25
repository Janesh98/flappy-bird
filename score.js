function Score() {
  this.score = 0;
  this.y = height/6;
  this.x = width - this.y*2 ;

  this.show = function() {
    fill(0, 255, 255);
    textSize(50);
    text(this.score, this.x, this.y);
  }

  this.update = function() {
    this.score++;
  }
}
