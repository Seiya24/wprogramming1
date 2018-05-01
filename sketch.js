function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(0);
  var radius = width * 1;
  
  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -200);
  for(var i = 0; i <= 25; i++){
    for(var j = 0; j <= 15; j++){
      push();
      var a = j/6 * PI;
      var b = i/6 * PI;
      translate(sin(1 * a) * radius * sin(b), cos(b) * radius / 1 , cos(1 * a) * radius * sin(b));    
      if(j%9 === 0){
        sphere(40, 40, 40);
      }else{
        box(30, 30, 30);
      }
      pop();
    }
  }
}
