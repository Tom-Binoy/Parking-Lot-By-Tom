//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
car_height = 150;
car_width = 80;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
win_image = "win.jfif";
reset = 0;

//Set initial position for a car image.
car_x = 200;
car_y = 200; 
function add() {
	//upload car, and background images on the canvas.
	win_imgTag = new Image();
	win_imgTag.onload = Check;
	win_imgTag.src = win_image;
	
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = uploadBackground;
	car_imgTag.src = greencar_image;
	
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up= Y :"+car_y);
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down= Y :"+car_y);
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left= X :"+car_x);
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right= X :"+car_x);
		}
		
		
}

function Check(){
	if( (car_x >= 400 && car_x <= 460) && (car_y >= 80 && car_y <= 110) ){
		ctx.drawImage(win_imgTag,0,0,canvas.width,canvas.height)
		reset=1;
		document.getElementById("Change").innerHTML = "Click Me To Continue";
		console.log("You Called Check Function");
	}
}

function Reset(){
	if ( reset == 1 ){
		reset = 0;  car_x = 200;   car_y = 200;
		uploadBackground()
		uploadgreencar()
		document.getElementById("Change").innerHTML = "Move the green car with arrow keys";
		console.log("You Called Reset Function");
	}
}

function up()
{
	//Define function to move the car upward
	if(car_y >=0 ){
		car_y = car_y-10;
		uploadBackground()
		uploadgreencar()
	}
	Check()
}

function down()
{
	//Define function to move the car downward
	if(car_y <= "350" ){
		car_y = car_y+10;
		uploadBackground()
		uploadgreencar()
		Check()
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x >= "0" ){
		car_x = car_x-10;
		uploadBackground()
		uploadgreencar()
		Check()
}}

function right(){	
	if(car_x <= "710" ){
		car_x = car_x+10;
		uploadBackground()
		uploadgreencar()
		Check()
}}
