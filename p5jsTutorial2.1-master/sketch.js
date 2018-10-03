var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Practice 1",35,40);
	
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Practice 1",35,40);
	
	}


	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{

		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,150,100,50);	

		fill(248,100,50);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,150,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}
	if (mouseX > 10 && mouseX < 100 && mouseY > 300 && mouseY < 350) 
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,300,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Ryan",35,325);
	
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,300,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Ryan",35,325);
	
	}

	if (mouseX > 40 && mouseX < 200 && mouseY > 400 && mouseY < 450) 
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(40,600,200,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Ryan",35,325);
	
	}
	else
	{
		fill(20,100,60);
		stroke(0,0,0);
		strokeWeight(3);
		rect(40,600,200,50);	

		fill(90,52,64);
		stroke(0,0,0);
		textSize(12);
		text("Ryan",35,325);

	}
}

















