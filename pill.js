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
