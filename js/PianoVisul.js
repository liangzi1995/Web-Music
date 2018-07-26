
window.AudioContext=window.AudioContext||window.webkitAudioContext;
var ctx=new AudioContext();

var canvas=document.getElementById('canvas');
var Height=canvas.height;
var Width=canvas.width;
var canvasctx=canvas.getContext('2d');

var obtn1=document.getElementById('btn1');
var obtn2=document.getElementById('btn2');





var gainNode=ctx.createGain();
var analyser=ctx.createAnalyser();
var size=128;
analyser.fftSize=size*2;
analyser.connect(gainNode);
gainNode.connect(ctx.destination);
var reverb=ctx.createConvolver();


var Dots=[];

function Random(m,n)
{
	return Math.round(Math.random()*(n-m)+m);
}

function getDots()
{
	Dots=[];
	for (var i = 0; i <=size; i++) {
		var x=Random(0,Width);
		var y=Random(0,Height);
		var color="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
		Dots.push(
			{
			X:x,
			Y:y,
			qy:Random(-2,-1),
			Color: color
		});
		
	}
}

getDots();

function draw(arr)
{

	canvasctx.clearRect(0,0,Width,Height);
	var w=Width/size;
	for (var i = 0;i<size;i++) {

		canvasctx.beginPath();
		var o=Dots[i];
		var r=arr[i]/(Width*100)*Width;
		canvasctx.arc(o.X,o.Y,r,0,Math.PI*2,true);
		// canvasctx.strokeStyle="#fff";
		// canvasctx.stroke();
		// var jianbian=canvasctx.createLinearGradient(o.X,o.Y,0,o.X,o.Y,r);
		// jianbian.addColorStop(0,'#FFFFFF');

		// jianbian.addColorStop(1,o.Color);
		canvasctx.fillStyle=o.Color;
		canvasctx.fill();
		o.Y=o.Y+o.qy;
		o.Y=o.Y<0?Height:o.Y;


	}
}


function visual()
{
	var arr=new Uint8Array(analyser.frequencyBinCount);
	function v()
	{
		analyser.getByteFrequencyData(arr);
		draw(arr);
		requestAnimationFrame(v);

	}
	requestAnimationFrame(v);

}


	visual();

//ajax读取服务器音频
function Ajax(path)
{
	var xhr=null;
	if (window.XMLHttpRequest)
	 {
	 	xhr=new XMLHttpRequest();
	 }
	 else
	 {
	 	xhr=new ActiveXObject("Microsoft.XMLHTTP");
	 }
	 xhr.open('GET',path,true);
	 xhr.send();
	 xhr.responseType="arraybuffer";
	 
	 xhr.onreadystatechange=function()
	 {
	 
	 	if (xhr.readyState==4)
	 	 {
	 	 	if (xhr.status==200)
	 	 	 {
	 	 	 	// fnsuss(xhr.response);
	 	 	 	
	 	 	 	ctx.decodeAudioData(xhr.response,function(data)
						{
							var source=ctx.createBufferSource();

							source.buffer=data;

							
							source.connect(analyser);
							source.start(0);
							// alert(ctx.currentTime);
							// source.loop=true;
							// source.loopStart.value=3.0;
						
						});
	 	 	 }

	 	 }
	 }
}


