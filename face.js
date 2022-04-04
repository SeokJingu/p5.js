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
  // for (var i = 0 ; i <= 358 ; i++){
  //   stroke('black');
  //   strokeWeight(1)
  //   line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  // }
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

function saturn(x,y,angle,size,bright,last){
  var scribble = new Scribble();
  circle_img(x,y,angle,size/2);
  var xCoords = [];
  var yCoords = [];
  var xCoords_1 = [];
  var yCoords_1 = [];
  var xCoords_2 = [];
  var yCoords_2 = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 300 ; i++){
    j = i - 150;
    xCoords[i] = cos(j)*size/6; 
    yCoords[i] = sin(j)*size;
  }
  for (var i = 0 ; i <= 290 ; i++){
    j = i - 145;
    xCoords_1[i] = cos(j)*size*0.9/6; 
    yCoords_1[i] = sin(j)*size*0.9;
  }
  for (var i = 0 ; i <= 280 ; i++){
    j = i - 140;
    xCoords_2[i] = cos(j)*size*0.8/6; 
    yCoords_2[i] = sin(j)*size*0.8;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 50 );
    var gap = size / 50;
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  for (var i = 0 ; i <= 300 ; i++){
    strokeWeight(10);
    line(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],);
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  for (var i = 0 ; i <= 300 ; i++){
    strokeWeight(10);
    line(xCoords_1[i],yCoords_1[i],xCoords_1[i+1],yCoords_1[i+1],);
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  for (var i = 0 ; i <= 300 ; i++){
    strokeWeight(10);
    line(xCoords_2[i],yCoords_2[i],xCoords_2[i+1],yCoords_2[i+1],);
  }
  rotate(-angle);
  translate(-x, -y);
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
  
  rotate(angle);
  translate(x, y);
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
  translate(-x, -y);
  rotate(-angle);
}

function heart_2nd(x,y,angle, size,bright,last){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 179 ; i++){
    j = i - 29;
    xCoords[i] = cos(j)*size/1.8+70; 
    yCoords[i] = sin(j)*size-70;
  }
  for (var i = 180 ; i <= 359 ; i++){
    j = i - 60 ;
    xCoords[i] = cos(j)*size+70; 
    yCoords[i] = sin(j)*size/1.8-70;
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
    strokeWeight( size / 1000 );
    var gap = size / 600;
    outline_strokeWeight = 1;
    outline_color = 70
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  // for (var i = 0 ; i <= 359 ; i++){
  //   stroke(outline_color);
  //   strokeWeight(outline_strokeWeight)
  //   scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //   if (last == "last"){
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //   }
  // }
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
  //scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  // for (var i = 0 ; i <= 358 ; i++){
  //   stroke(outline_color); 
  //   strokeWeight(outline_strokeWeight)
  //   scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //   if (last == "last"){
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //     scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //   }
  // }
  rotate(-angle);
  translate(-x, -y);
}
function heart_3rd(x,y,angle, size,bright,last){
  var scribble = new Scribble();
  var xCoords = [];
  var yCoords = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 359 ; i++){
    xCoords[i] = (16*(sin(i)*sin(i)*sin(i)))*size/20; 
    yCoords[i] = (13*cos(i)-5*cos(2*i)-2*cos(3*i)-cos(4*i))*size/20;
  }
  translate(x, y-20);
  rotate(angle+180);

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
    outline_color = 255
  }
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  // for (var i = 0 ; i <= 359 ; i++){
  //   stroke(outline_color);
  //   strokeWeight(outline_strokeWeight)
  //   scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
  //   }
  rotate(-angle-180);
  translate(-x,-y+20);

}

function smile(x, y, angle, size, bright, last){
  var scribble       = new Scribble();
  var xCoords = [];
  var yCoords = [];
  var xmouth = [];
  var ymouth = [];
  angleMode(DEGREES)
  for (var i = 0 ; i <= 359 ; i++ ){
    j = i + 90;
    xCoords[i] = cos(j) * size; 
    yCoords[i] = sin(j) * size;
  }
  translate(x, y);
  rotate(angle);
  strokeWeight( size / 50 );
  var gap = size/50;
  stroke( random(255-bright)+bright,random(255-bright)+bright,random(255-bright)+bright);
  if (last == "loop"){
    strokeWeight( size / 50 );
    var gap = size/25;
    outline_strokeWeight = 0;
    outline_color = 0
  }
  else if (last == "last"){
    strokeWeight( size / 1000 );
    var gap = size / 600;
    outline_strokeWeight = 0;
    outline_color = 0
  }
  scribble.scribbleFilling( xCoords, yCoords, gap, 315 );
  //scribble.scribbleFilling( xCoords, yCoords, gap, 315-120 );
  for (var i = 0 ; i <= 359 ; i++){
    stroke(outline_color);
    strokeWeight(outline_strokeWeight)
    scribble.scribbleLine(xCoords[i],yCoords[i],xCoords[i+1],yCoords[i+1],)
    }
    if (last == "loop"){
      strokeWeight(size/7);
      stroke(random(255));
    }
    else if (last == "last"){
      strokeWeight(size/7);
      stroke('black');
    }
  
  line(-size/3,-size/5,-size/3,-size/1.8);
  line(size/3,-size/5,size/3,-size/1.8);
  for (var i = 0 ; i <= 179 ; i++ ){
    j = i;
    xmouth[i] = cos(j) * size /1.5; 
    ymouth[i] = sin(j) * size /1.5;
  }
  for (var i = 0 ; i <= 179 ; i++){
    line(xmouth[i],ymouth[i],xmouth[i+1],ymouth[i+1],)
  }
  rotate(-angle);
  translate(-x, -y);
}

function setup() {
  
}

function draw() {
  var test = 0;
    if (test == 1){
      var c = createCanvas( windowWidth = 1080, windowHeight = 1080 );
      saturn(540,540,90,500,128,loop);
    }

    if (test == 0){
      var c = createCanvas( windowWidth = 1080, windowHeight = 1080 );
      background(255, 255, 255);
      for (var i = 0 ; i <= 6000 ; i++){
        var loop = "loop";
        star_2(random(1080),random(1080),random(360),random(250), 128, loop);
      }
      }

    if (test == 2){
      var c = createCanvas( windowWidth = 1080, windowHeight = 1080 );
      background(255, 255, 255);
      star5(1000,10);
      saveCanvas(c,'myCanvas', 'png');
    }
}


