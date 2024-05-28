function setup() {
    createCanvas(1280, 720);
    background("white");
  }
  
  function draw() {
    stroke("white");
    fill("pink");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }