let simmetry = 6;
let angle = 360/simmetry;
function setup() {
    createCanvas(500, 400);
    angleMode(DEGREES);
    background(0);
    translate(width/2,height/2);
    stroke(255,0,0);
   
    for(let i=0;i<simmetry;i++){
        rotate(angle);
        line(0,0,width,0);
    }
  }
  
  function draw() {
    translate(width/2,height/2);
    let mx = mouseX-width/2;
    let my = mouseY-height/2;
    let pmx = pmouseX-width/2;
    let pmy = pmouseY-height/2;
   if(mouseIsPressed){
       let hu = noise(mx)*255;

    stroke(hu,255,255,100);
    let angle = 360/simmetry;
 
    for(let i=0;i<12;i++){
        push();
        rotate(angle*i);
        if(i%2==1){
            scale(-1,1);
        }
        let d = dist(mx,my,pmx,pmy);
        let sw = map(d,0,20,20,1);
        strokeWeight(sw);
        line(mx,my,pmx,pmy);
        pop();
    }
 
    
    
   }
  }