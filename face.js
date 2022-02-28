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

function circle_img(x,y,angle, size){
  var scribble       = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 359 ; i++ ){
    j = i + 90;
    xCoords[i] = cos(j) * size; 
    yCoords[i] = sin(j) * size;
  }

  translate(x, y);
  rotate(angle);
  strokeWeight( size / 50 );
  stroke( random(255),random(255),random(255) );
  var gap = size/50;
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  for (var i = 0 ; i <= 358 ; i++){
    stroke('black');
    strokeWeight(1)
    line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  }
  rotate(-angle);
  translate(-x, -y);

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
  strokeWeight( size / 50 );
  stroke( random(255),random(255),random(255) );
  var gap = size / 50;
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
  for (var i = 0 ; i <= 239 ; i++){
    j = i + 61;
    xCoords[i] = cos(j)*size; 
    yCoords[i] = sin(j)*size;
  }
  for (var i = 239 ; i <= 359 ; i++){
    j = i + 331;
    xCoords[i] = sin(j)*size+(size*0.99); 
    yCoords[i] = cos(j)*size;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 50 );
  stroke( random(255),random(255),random(255) );
  var gap = size / 50;
  scribble.scribbleFilling( xCoords, yCoords, gap, 90 );

  for (var i = 0 ; i <= 360 ; i++){
    stroke('black');
    strokeWeight(1)
    line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  }
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
  for (var i = 0 ; i <= 358 ; i++){
    stroke('black');
    strokeWeight(1)
    line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  }
  rotate(-angle);
  translate(-x, -y);
}

function cherryblossom(x,y,angle, size,bright,last){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 40 ; i++){
    j = i * 6;
    xCoords[i] = cos(j)*size/2; 
    yCoords[i] = sin(j)*size/2;
  }
  translate(x, y);
  rotate(angle);
  if (last == "loop"){
    strokeWeight( size / 50 );
    var gap = size/25;
    outline_strokeWeight = 1;
    outline_color = 0
  }
  else if (last == "last"){
    strokeWeight( size / 1000 );
    var gap = size / 600;
    outline_strokeWeight = 1;
    outline_color = 70
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  for (var i = 0 ; i <= 358 ; i++){
    stroke(outline_color); 
    strokeWeight(outline_strokeWeight)
    scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    if (last == "last"){
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    }
  }
  rotate(-angle);
  translate(-x, -y);
}

function heart_2nd(x,y,angle, size,bright,last){
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
    j = i - 60 ;
    xCoords[i] = cos(j)*size; 
    yCoords[i] = sin(j)*size/1.8;
  }
  translate(x, y);
  rotate(angle+135);
  if (last == "loop"){
    strokeWeight( size / 50 );
    var gap = size/25;
    outline_strokeWeight = 1;
    outline_color = 0
  }
  else if (last == "last"){
    strokeWeight( size / 800 );
    var gap = size / 600;
    outline_strokeWeight = 2;
    outline_color = 70
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  for (var i = 0 ; i <= 359 ; i++){
    stroke(outline_color);
    strokeWeight(outline_strokeWeight)
    scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    if (last == "last"){
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    }
  }
  rotate(-angle-135);
  translate(-x,-y);
}

function star_2(x,y,angle, size, bright, last){
  var scribble       = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 56 ; i++){
    j = i-28;
    xCoords[i] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
    j = i-(172);
    xCoords[i+56] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i+56] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
    j = i-(316);
    xCoords[i+56*2] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i+56*2] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
    j = i-(460);
    xCoords[i+56*3] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i+56*3] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
    j = i-(604);
    xCoords[i+56*4] = ((5*cos(2*j))+(2*cos(3*j)))*size/10;
    yCoords[i+56*4] = ((2*sin(3*j))-(5*sin(2*j)))*size/10;
  }
  translate(x, y);
  rotate(angle);
  if (last == "loop"){
    strokeWeight( size / 50 );
    var gap = size/25;
    outline_strokeWeight = 1;
    outline_color = 0
  }
  else if (last == "last"){
    strokeWeight( size / 1000 );
    var gap = size / 600;
    outline_strokeWeight = 1;
    outline_color = 70
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  for (var i = 0 ; i <= 358 ; i++){
    stroke(outline_color); 
    strokeWeight(outline_strokeWeight)
    scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    if (last == "last"){
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
      scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    }
  }
  rotate(-angle);
  translate(-x, -y);
}

function setup() {
    createCanvas( windowWidth = 1080, windowHeight = 1080 );
    for (var i = 0 ; i <= 60 ; i++){
      var loop = "loop";
      heart_2nd(random(1080),random(1080),random(360),random(20)+20, 128, loop);
    }
    var loop = "last";
    cherryblossom(540,560,random(20)-5,500, 128, loop);

}

function draw() {
  var test = 3;
    if (test == 1){
      for (var i = 0 ; i <= 10 ; i++){
        var loop = "loop";
        heart_2nd(random(1080),random(1080),random(360),random(20)+20, 128, loop);
      }
      var loop = "last";
      heart_2nd(540,570,rendom(30)-10,600, 128, loop);
    }

    if (test == 0){
      circle_img(random(1080),random(1080),random(360),random(20)+10);
      ufo(random(1080),random(1080),random(360),random(30)+30);
      //star(random(1080),random(1080),random(360),random(40)+20);
      heart_2nd(random(1080),random(1080),random(360),random(20)+20);
      star_2(random(1080),random(1080),random(360),random(40)+20);
      crescent(random(1080),random(1080),random(360),random(20)+10);
      //heart(random(1080),random(1080),random(360),random(20)+10);
      heart_2nd(540,570,random(20)-10,550);
    }
}


