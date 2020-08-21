var number=6; 
var color=generateRandom(number);
var pickedColor=pickColor();
var h1=document.querySelector("h1");
var display=document.querySelector("#colorDisplay");
display.textContent=pickedColor;
var buttonReset=document.querySelector(".cat");
var easybtn=document.querySelector(".easybtn");
var hardbtn=document.querySelector(".hardbtn");
var number=6;
var notdisplay=document.querySelector(".kill");

hardbtn.classList.add("selected");


easybtn.addEventListener("click",function(){
	number=3;
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
 color=generateRandom(number);
 pickedColor=pickColor();
 display.textContent=pickedColor;
  h1.style.backgroundColor="steelBlue";

 for(var i=0;i<squares.length;i++)
{
	if(color[i])
	{
		squares[i].style.backgroundColor=color[i];
	}
	else
	{
		squares[i].style.display="none";
	}
}





});

hardbtn.addEventListener("click",function(){ number=6;

easybtn.classList.remove("selected");
hardbtn.classList.add("selected");

color=generateRandom(number);
 pickedColor=pickColor();
 display.textContent=pickedColor;
 h1.style.backgroundColor="steelBlue";

 for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color[i];
	squares[i].style.display="block";
	}




});



buttonReset.addEventListener("click",function() {
 notdisplay.textContent="";
 buttonReset.textContent="NewColor";
	color=generateRandom(number);
	pickedColor=pickColor();
	display.textContent=pickedColor;

	for(var i=0;i<squares.length;i++)
	{

	squares[i].style.backgroundColor=color[i];
	
	}
	h1.style.backgroundColor="steelBlue";	 
});





var squares= document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color[i];





squares[i].addEventListener("click",function()
{  
	var clickedColor=this.style.backgroundColor;
	var discription=document.querySelector(".kill");
	console.log(clickedColor,pickedColor);
	if(clickedColor===pickedColor)
	{
		discription.textContent="rightchoice";

         allCollor(pickedColor);
         h1.style.backgroundColor=clickedColor;
         buttonReset.textContent="play again";

	}
	else
	{ 
        this.style.backgroundColor="#232323";
		discription.textContent="tryagain";
	}

});
}
function allCollor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()

{

	 var random=Math.floor(Math.random()*color.length);
	 
	return color[random];

}

function generateRandom(num)
{
	var arr=[];
	for(i=0;i<num;i++)
	{
		arr.push(colorNew());

	}
	return arr;
}

 function colorNew()
 {
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return("rgb(" + r +", "+g +", " +b+")");
 }