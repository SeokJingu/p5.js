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
        scribble.scribbleLine(cos(angle)*size+x,sin(angle)*size+y,cos(next_angel)*size+x,sin(next_angel)*size+y);
      }
  }
}      

function moon(size){
    x = random(1080);
    y = random(1080);
    var scribble       = new Scribble();
    scribble.scribbleEllipse( x, y, size, size );
}      

function face(style){
  x = 1080 / 2;
  y = 1080 / 2;
  var scribble = new Scribble();
  if (style == "egg"){
    noFill();
    strokeWeight( 5 );
    scribble.scribbleEllipse(x,y, 500, 600)
    scribble.scribbleEllipse(x,y, 500, 600)
  }
}

function right_eye(style){
  x = 648;
  y = 432;
  var scribble = new Scribble();
  noFill();
  strokeWeight( 5 );
  scribble.scribbleEllipse(x,y, 20, 20)
  scribble.scribbleEllipse(x,y, 80, 40)
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


function setup() {
    createCanvas( windowWidth = 1080, windowHeight = 1080 );
    background( 230 );
    stroke( 0 );
    strokeWeight( 0.1 );

    var scribble       = new Scribble();
    scribble.bowing    = 2;
    scribble.roughness = 3;

    var grid_count = 10;
    var grid_width = windowWidth / grid_count + 1;
    var grid_height = windowHeight / grid_count + 1;

    for ( var i = 0; i <= grid_count; i++ ){
        line(grid_width*i, 0, grid_width*i, 1080);
        line(0, grid_height * i , 1080, grid_height * i);
    }
    face("egg");
    right_eye();
    left_eye();
    hair();
    
  
}


function draw() {

}