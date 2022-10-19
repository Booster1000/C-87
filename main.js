var canvas = new fabric.Canvas("Mycanvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	Fabric.Image.fromURL(get_image, function(Img){
block_image_object= Img;

block_image_object.setToWidth(block_image_width);
block_image_object.setToHeight(block_image_height);
block_image_object.set({
	top:block_y ,
left:block_x
});
canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("rr1.jpg");
	}


	
	if(keyPressed == '71')
	{
		new_image("gr.jpg");
	}



	if(keyPressed == '82')
	{
		new_image("rr.jpg");
	}



	if(keyPressed == '89')
	{
		new_image("yr.jpg");
	}



	if(keyPressed == '80')
	{
		new_image("pr.jpg");
	}



	if(keyPressed == '66')
	{
		new_image("br.jpg");
	}
}