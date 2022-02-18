function star(count, size){
    x = random(1080);
    y = random(1090);
    for ( var i = 0; i <= count; i++ ){
        x = random(1080);
        y = random(1080);
        line(x-10,y,x+10,y);
        line(x,y-10,x,y+10);
    }

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
    strokeWeight( 20 );

    var xCoords = [ 100, 200, 800, 900, 500 ];
    var yCoords = [ 100, 800, 800, 600, 100 ];
    stroke( 255,0,0 );

    scribble.scribbleFilling( xCoords, yCoords , 20, 315 )
    stroke( 128,64,0 );
    strokeWeight( 1 );
    scribble.scribbleCurve( 100, 600, 1000, 600, 400, 500, 600, 500 );
    stroke( 0,0,255 );
    scribble.scribbleCurve( 540, 200, 540, 900, 0, 100, 200, 600 );

    scribble.scribbleEllipse( 200, 200, 150, 150 );
    scribble.scribbleEllipse( 200, 200, 110, 110 );

    star(10);

    // draw every value as a filled rect in a bar graph
  /*  for ( var i = 0; i < values.length; i++ ) {
      // calculate the x and y coordinates of the center of the rect and the height
      var h = halfHeight * 0.01 * values[i];
      var x = ( spacer + width ) * ( i + 1 ) - ( width / 2 );
      var y = halfHeight - h / 2;
      // set the thikness of the rect lines
      strokeWeight( 5 );
      // set the color of the rect lines to black
      stroke( 0 );

      // draw a rect for the value
      scribble.scribbleRect( x, y, width, h );

      // calculate the x and y coordinates for the border points of the hachure
      var xleft   = x - width / 2 + 5;
      var xright  = x + width / 2 - 5;
      var ytop    = y - ( halfHeight *  0.01 * values[i] / 2 );
      var ybottom = y + ( halfHeight *  0.01 * values[i] / 2 );
      // reduce the sizes to fit in the rect
      if ( ytop > ybottom ) {
        ytop    -= 5;
        ybottom += 5;
      } else {
        ytop    += 5;
        ybottom -= 5;
      }
      // the x coordinates of the border points of the hachure
      var xCoords = [ xleft, xright, xright, xleft ];
      // the y coordinates of the border points of the hachure
      var yCoords = [ ytop, ytop, ybottom, ybottom ];
      // the gap between two hachure lines
      var gap = 3.5;
      // the angle of the hachure in degrees
      var angle = 315;
      // set the thikness of our hachure lines
      strokeWeight( 3 );
      //set the color of the hachure to a nice blue
      stroke( 0, 50, 180 );

      // fill the rect with a hachure
      scribble.scribbleFilling( xCoords, yCoords , gap*2, angle );

    }*/
  }

  function draw() {}