var truckWheelBack = -120;
var truckWheelFront = -45;
var truckBack = -135;
var truckFront = -45;

function setup(){
    createCanvas(960, 540);
}

function draw() {
	//SETTING SKY COLOR
    background(135, 226, 237);

    //DRAWING GRASS
    stroke(0);
    fill(0, 219, 56);
    rect(0, 300, 960, 300);

    stroke(70, 243, 132);;
    line(20, 320, 20, 330);
    line(40, 320, 40, 330);
    line(60, 320, 60, 330);
    line(80, 320, 80, 330);
    line(100, 320, 100, 330);
    line(120, 320, 120, 330);
    line(140, 320, 140, 330);
    line(160, 320, 160, 330);
    line(180, 320, 180, 330);

    //DRAWING PAVEMENT
    stroke(0);
   	fill(200);
   	rect(0, 350, 960, 150);
   	fill(250, 243, 37);
   	rect(0, 420, 50, 10);
   	rect(150, 420, 50, 10);
   	rect(300, 420, 50, 10);
   	rect(450, 420, 50, 10);
   	rect(600, 420, 50, 10);
   	rect(750, 420, 50, 10);
   	rect(900, 420, 50, 10);

   	//DRAW SUN
   	fill(250, 243, 132);
   	ellipse(800, 100, 80, 80);


   	//DRAW CAR
   	fill(0);
   	ellipse(truckWheelBack, 465, 25, 25); // truckWheelBack
   	ellipse(truckWheelFront, 465, 25, 25); // truckWheelFront
   	fill(255, 0, 0);
   	rect(truckBack, 385, 100, 75); // truckBack
   	rect(truckFront, 420, 40, 40); // truckFront

   	if(mouseIsPressed){
		truckWheelBack+=2;
   		truckWheelFront+=2;
   		truckFront+=2;
 	  	truckBack+=2;
   	}
  	else{ 
 	  	truckWheelBack+=1;
	  	truckWheelFront+=1;
  	 	truckFront+=1;
   		truckBack+=1;
   	}


}