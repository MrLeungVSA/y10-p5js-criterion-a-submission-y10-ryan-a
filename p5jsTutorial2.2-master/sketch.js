var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 100;

  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);		
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,10,100,50);					
		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);		
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",215,40);

	// Example 1: easy to understand - End


	// Example 2: less code but harder to understand - Start

	strokeWeight(3);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		if (mouseIsPressed)
		{
			fill(47,247,114);
		}

		rect(button2X,button2Y,50,100);
		textSize(16);
		fill(255,255,255);
		stroke(0,0,0);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,113,53);
		rect(button2X,button2Y,100,50);
		textSize(12);
		fill(255,255,255);
		stroke(0,0,0);
		text("Options",button2X+30,button2Y+30);
	}

	if (mouseX > 300 && mouseX < 300 + 100 && mouseY > 300 && mouseY < 300+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(300,300,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Shanghai",330,330);
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(300,300,100,50);	
		
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Academy",330,330);
		}
					
	}
	
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(300,300,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Victoria",330,330);
	
	}


	if (mouseX > 150 && mouseX < 150 + 100 && mouseY > 200 && mouseY < 200+50)
	{
		fill(0,255,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(150,200,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Amazon",175,230);
		if (mouseIsPressed == true)
		{
			fill(255,0,0);
			stroke(0,0,0);
			strokeWeight(3);
			rect(150,200,100,50);	
		
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Nile",175,230);
		}
					
	}
	
	else
	{
		fill(154,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(150,200,100,50);	

		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Danube",175,230);
	
	}


	// Example 2: less code but harder to understand - End


}