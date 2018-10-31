/* 
canvasID

canvasID ~ 0 - Intro
canvasID ~ 1 - MainMenu
canvasID ~ 2 - Easy 
canvasID ~ 3 - Hard 
*/
var cavansID; 

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadHard();
}

function setup()
{
	createCanvas(800,600)
	setupIntro();
	setupMainMenu();
	setupEasy();
	setupHard();

	canvasID = 0;	  
}

function draw()
{
	testSize(24);

	background(125,125,125)
	if(canvasID == 0)
	{
		drawIntro();

	}
	if (canvasID== 1)
	{
			drawMainMenu();
	}
	if (canvasID== 2)
		{
			drawEasy();
		}
	if (canvasID== 3)
		{
			drawHard();
		}


}

function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (cavansID == -3)
	{
		canvasID = 3;
	}
	
}