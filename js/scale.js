// JavaScript Document
var canvas=document.getElementById("canvas")
var context = canvas.getContext("2d")
var watermarkCanvas=document.getElementById("watermarkCanvas");
var watermarkContext=watermarkCanvas.getContext('2d');
var image=new Image();
window.onload=function(){
  canvas.width=1152;
  canvas.height=768;
  image.src="img-lg.jpg"
image.onload=function(){
  context.drawImage(image,0,0);
  var range_scale=document.getElementById("range-scale");
  var scale=range_scale.value;
  drawimage(scale);
  //给拖动条绑定事件
  range_scale.onmousemove=function(){
       var scale=range_scale.value;
	   drawimage(scale);
	  }
}


}                       

//具体的绘制函数
function drawimage(scale){
	var imageWidth=1152*scale;
	var imageHeight=768*scale;
	var x=canvas.width/2-imageWidth/2;
	var y=canvas.height/2-imageHeight/2;
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(image,x,y,imageWidth,imageHeight);
	//给图片加上水印
	watermark()
	}
//水印画布的设置
function watermark(){
	watermarkCanvas.width=300
	watermarkCanvas.height=100
	watermarkContext.font = "bold 50px Arial"
	watermarkContext.font="bold 40px Arial"
	watermarkContext.fillStyle = "rgba(255,255,255,0.5)"

	watermarkContext.fillText("编程艺术",60,60);
	context.drawImage(watermarkCanvas,canvas.width-watermarkCanvas.width,canvas.height-watermarkCanvas.height);
	}