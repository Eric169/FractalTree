class Branch{
  constructor(x,y,len,angle){
    this.x = x;
    this.y = y;
    this.len = len;
    this.angle = angle;
    this.x1 = map(abs(this.angle), 0, 180, this.x-this.len, this.x + this.len);
    let angley = (this.angle > 90) ? (180 - this.angle) : ((this.angle < -90) ? (-180-this.angle) : this.angle);
    this.y1 = map(angley, -90, 90, this.y - this.len, this.y + this.len);
  }

  show(){
    stroke(255);
    line(this.x, this.y, this.x1, this.y1);
  }
}

function setup() {
  createCanvas(1290, 950);
}

//http://127.0.0.1:5500/

function draw() {
  background(0);
  branch(new Branch(width/2, height-100, 200, -90));
  noLoop();
}

function branch(br){
  if(br.len < 10) return;
  br.show();
  let angle = br.angle - 45;
  branch(new Branch(br.x1, br.y1, br.len * .8, (angle < -180) ? angle+360 : angle));
  angle = br.angle + 45;
  branch(new Branch(br.x1, br.y1, br.len * .8, (angle > 180) ? angle-360 : angle));
}
