function star5(count, size){
  angleMode(DEGREES)
  for (var j = 0 ; j < count ; j++)
  {
    x = random(1080);
    y = random(1080);
    start_angle = random(360)
    var scribble       = new Scribble();
    scribble.bowing    = 0.1;
    scribble.roughness = 1.5;
    for (var i = 0 ; i <=4 ; i++)
      {
        angle = i * 72 + start_angle;
        next_angel = angle + 144 ;
        fill(random(255));
        strokeWeight( 1 );
        scribble.scribbleLine(cos(angle)*size+x,sin(angle)*size+y,cos(next_angel)*size+x,sin(next_angel)*size+y);
      }
  }
}

function heart(x,y,angle,size){
  x_1 = x;
  y_1 = y - size /2;
  y_2 = y + size;
  var scribble = new Scribble();
  fill(random(255),random(255),random(255));
  strokeWeight( size / 20 );
  angleMode(DEGREES);
  rotate(angle);
  scribble.scribbleCurve(x_1-size/40, y_1, x_1-size/40, y_2, x_1+size*1.5, y_1-size*1.2, x_1+size*1.5, y_2-size/2);
  scribble.scribbleCurve(x_1+size/40, y_1, x_1+size/40, y_2, x_1-size*1.5, y_1-size*1.2, x_1-size*1.5, y_2-size/2);
}
  

function face(style){
  x = 1080 / 2;
  y = 1080 / 2;
  var scribble = new Scribble();
  if (style == "egg"){
    noFill();
    strokeWeight( 1 );
    scribble.scribbleEllipse(x,y, 500-1, 600+1)
    scribble.scribbleEllipse(x,y, 500-1, 600-1)
    scribble.scribbleEllipse(x,y, 500+1, 600+1)
    scribble.scribbleEllipse(x,y, 500+1, 600-1)
  }
}

function right_eye(style){
  x = 648;
  y = 432;
  var scribble = new Scribble();
  if (style == 0){
    noFill();
    strokeWeight( 5 );
    scribble.scribbleEllipse(x,y, 20, 20)
    scribble.scribbleEllipse(x,y, 80, 40)
  }
  else if (style == 1){
    noFill();
    strokeWeight( 5 );
    scribble.scribbleCurve( x-40,y-20,x+40, y-20, x-20,y-30, x+20,y-30 );
    scribble.scribbleEllipse(x,y, 20, 20)
    
  }
}

function left_eye(style){
  x = 432;
  y = 432;
  var scribble = new Scribble();
  noFill();
  strokeWeight( 5 );
  scribble.scribbleEllipse(x,y, 20, 20)
  scribble.scribbleEllipse(x,y, 80, 40)
}

function hair(style){
  x = 432;
  y = 270;
  var scribble = new Scribble();
  noFill();
  strokeWeight( 5 );
  scribble.scribbleLine(x,y, x_1=x+20, y_1=y+50)
  scribble.scribbleLine(x_1,y_1, x = x_1+20, y = y_1-20)
  scribble.scribbleLine(x,y, x_1=x+20, y_1=y+20)
  scribble.scribbleLine(x_1,y_1, x = x_1+20, y = y_1-20)
  scribble.scribbleLine(x,y, x_1=x+20, y_1=y+20)
  scribble.scribbleLine(x_1,y_1, x = 1080/2, y = y_1-20)


}

function grid(CanvasWidth, CanvasHight, count){
  //background( 230 );
    stroke( 0 );
    strokeWeight( 0.1 );

    var grid_count = count;
    var grid_width = (CanvasWidth-1) / (grid_count + 1);
    var grid_height = (CanvasHight-1) / (grid_count + 1);

    for ( var i = 0; i <= grid_count; i++ ){
        line(grid_width*i, 0, grid_width*i, CanvasHight);
        line(0, grid_height * i , CanvasWidth, grid_height * i);
    }
}

function leaf(x,y,angle,size){
  x_1 = x;
  y_1 = y - size /2;
  y_2 = y + size;
  var scribble = new Scribble();
  fill(random(255),random(255),random(255));
  strokeWeight( size / 20 );
  angleMode(DEGREES);
  rotate(angle);
  scribble.scribbleCurve(x_1, y_1, x_1, y_2, x_1+size/1.5, y_1+size/10, x_1+size/2, y_2-size/2);
  scribble.scribbleCurve(x_1, y_1, x_1, y_2, x_1-size/1.5, y_1+size/10, x_1-size/2, y_2-size/2);
  scribble.scribbleLine(x, y - size/1.5 , x_1, y_2);
  scribble.scribbleLine(x, y - size/5   , x+size/2.5, y-size/50);
  scribble.scribbleLine(x, y + size/5   , x-size/3, y+size/2);
  scribble.scribbleLine(x, y + size/1.5 , x+size/5, y+size/1.3);
}

function circle_img(x,y,angle,size){
  var scribble = new Scribble();
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var xCoords = [];
  var yCoords = [];
  for (var i = 0 ; i <= 360 ; i++){
    xCoords[i] = cos(i)*size; 
    yCoords[i] = sin(i)*size;
  }
  var gap = size/500;
  translate(x, y);
  scribble.scribbleFilling( xCoords, yCoords, gap, angle );
  translate(-x, -y);
}

function center(CanvasWidth, CanvasHight){
  //background( 230 );
    stroke( 0 );
    strokeWeight( 0.1 );
    line(CanvasWidth /2, 0, CanvasWidth /2, CanvasHight);
    line(0,CanvasHight/2,CanvasWidth,CanvasHight/2);
}

function half_moon(x,y,angle,size){
  var scribble = new Scribble();
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 180 ; i++){
    xCoords[i] = cos(i)*size; 
    yCoords[i] = sin(i)*size;
  }
  var gap = size/500;
  translate(x, y);
  rotate(angle);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  rotate(-angle);
  translate(-x, -y);
  
}

function ufo(x,y,angle,size){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 360 ; i++){
    xCoords[i] = cos(i)*size/6; 
    yCoords[i] = sin(i)*size;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var gap = size/500;
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  rotate(-angle);
  translate(-x, -y);
  circle_img(x,y,angle,size/2);
}

function crescent(x,y,angle,size){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 240 ; i++){
    xCoords[i] = cos(i)*size; 
    yCoords[i] = sin(i)*size;
  }
  for (var i = 241 ; i <= 360 ; i++){
    xCoords[i] = cos(i)*size; 
    yCoords[i] = sin(i)*size;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var gap = size/500;
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  rotate(-angle);
  translate(-x, -y);
  
}

function star(x,y,angle, size){
  var scribble       = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 359 ; i++){
    j = i - 179;
    xCoords[i] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var gap = size/500;
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  rotate(-angle);
  translate(-x, -y);
}

function heart_2nd(x,y,angle, size){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 179 ; i++){
    j = i - 29;
    xCoords[i] = cos(j)*size/1.8; 
    yCoords[i] = sin(j)*size;
  }
  for (var i = 180 ; i <= 359 ; i++){
    j = i - 58 ;
    xCoords[i] = cos(j)*size; 
    yCoords[i] = sin(j)*size/1.8;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 1000 );
  stroke( random(255),random(255),random(255) );
  var gap = size/ 500;
  scribble.scribbleFilling( xCoords, yCoords, gap, random(360) );
  for (var i = 0 ; i <= 359 ; i++){
    stroke('black');
    strokeWeight(3)
    line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  }
  rotate(-angle);
  translate(-x, -y);
}

function setup() {
    createCanvas( windowWidth = 1080, windowHeight = 1080 );
    for (var i = 0 ; i <= 5000 ; i++){
      //circle_img(random(1080),random(1080), random(360), random(100));
      //ufo(random(1080),random(1080), random(360), random(100));
      //star(random(1080),random(1080),random(360),random(100));
      heart_2nd(random(1080),random(1080),random(360),random(20)+20)
    }
}

function draw() {
  // var test = 1;
  //   if (test == 1){
  //     heart_2nd(random(1080),random(1080),random(360),random(50));
  //   }

  //   if (test == 0){
  //     circle_img(random(1080),random(1080), random(360), random(100));
  //     ufo(random(1080),random(1080), random(360), random(100));
  //     star(random(1080),random(1080),random(360),random(100));
  //     heart_2nd(random(1080),random(1080),random(360),random(100))

  //   }
}
