function Bird() {
  this.y = height/2;
  this.x = 64;
  this.gravity = 0.4;
  this.velocity = 0;
  this.lift = 12;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.update = function() {
    this.velocity += this.gravity;
    //this.velocity *= 0.9;
    this.y += this.velocity;

    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    else if(this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  this.jump = function() {
    this.velocity -= this.lift;
  }
}
