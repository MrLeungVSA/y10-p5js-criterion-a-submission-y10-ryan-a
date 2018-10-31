
var buttonIntro

function preloadIntro()
{
	imageIntroTitle = loadImage ('y10-p5js-criterion-a-submission-y10-ryan-a/p5jsTutorial3.2-master/buttonIntro.png')
}

function setupIntro()
{

  
}

function drawIntro()
{
	text("This is Intro Page \n\nClick Anywhere to continue",10.50);
	if(mouseIsPressed)
	{
		canvasID = 2
	}


}