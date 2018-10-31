var buttonNothing;
var buttonHoverOver;
var buttonClick;
var imgCatInMug;
var button2X;
var button2Y;

function preload()
{
	imgCatInMug = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-ryan-a/p5jsTutorial3.1-master/Unknown.jpeg');

	buttonClick = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-ryan-a/p5jsTutorial3.1-master/button_paul-pogba.png');
	buttonHoverOver = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-ryan-a/p5jsTutorial3.1-master/button_number-2.png');
	buttonNothing = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-ryan-a/p5jsTutorial3.1-master/button_manchester-united.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	image(imgCatInMug,10,150,500,500);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
	}


	// Example 2: less code but harder to understand - End


}