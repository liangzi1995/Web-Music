
function onLoad()
{
	Ajax('Yinse/6.mp3');

	function Random(m,n)
	{
		return Math.round(Math.random()*(n-m)+m);
	}

	function RanColor(obj)
	{
		obj.style.fill="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
		obj.style.background="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";		
	}

	setInterval(function(){
				var os=document.getElementById("st"+Random(0,47));
				RanColor(os);
	},100);




	var odiv1=document.getElementById('div1');
	var odiv2=document.getElementById('div2');
	var odiv3=document.getElementById('div3');
	var odiv4=document.getElementById('div4');
	var odiv5=document.getElementById('div5');
	var odiv6=document.getElementById('div6');
	var oyl=document.getElementById('yinliang');
	var opl=document.getElementById('pinlv');
	var olow=document.getElementById('lowp');
	var opan=document.getElementById('shengxiang');
	//音量，highpass的鼠标事件
	odiv5.onmousedown=function(e)
	{

		var oev=e||event;
		var oDx=oev.clientX-odiv5.offsetLeft;
		var oDy=oev.clientY-odiv1.offsetHeight-odiv5.offsetTop;

		document.onmousemove=function(e)
		{
			RanColor(odiv5);
			var oev=e||event;
			var oXvalue=oev.clientX;

			if (oXvalue>odiv3.offsetWidth)
			 {
			 	oXvalue=odiv3.offsetWidth;
			 }
			var oYvalue=oev.clientY-odiv1.offsetHeight;
			if (oYvalue<0)
			 {
			 	oYvalue=0;
			 }

			filter1.frequency.value=oXvalue*6;
			gainNode.gain.value=oYvalue*0.005;

			opl.innerHTML=oXvalue*6;
			oyl.innerHTML=oYvalue*0.005;

			var h=oev.clientX-oDx;
			var v=oev.clientY-odiv1.clientHeight-oDy;

			if (h<0) {h=0;}
			if (h>odiv3.offsetWidth-odiv5.offsetWidth)
			 {
			 	h=odiv3.offsetWidth-odiv5.offsetWidth;
			 }
			if (v<0){v=0;}
			if (v>odiv3.offsetHeight-odiv5.offsetHeight)
			 {
			 	v=odiv3.offsetHeight-odiv5.offsetHeight;
			 }
			else
			{
				odiv5.style.left=h+'px';
				odiv5.style.top=v+'px';			 	
			}



			document.onmouseup=function(e)
			{
				var oev=e||event;			
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;//阻止默认事件（禁止选中文字）

		}


	}
	//以下音量，highpass的触摸事件

	odiv5.ontouchstart=function(e)
	{

		var oev=event.touches[0];
		var oDx=oev.clientX-odiv5.offsetLeft;
		var oDy=oev.clientY-odiv1.offsetHeight-odiv5.offsetTop;

		document.ontouchmove=function(e)
		{
			RanColor(odiv5);
			var oev=event.touches[0];

			var oXvalue=oev.clientX;

			if (oXvalue>odiv3.offsetWidth)
			 {
			 	oXvalue=odiv3.offsetWidth;
			 }
			var oYvalue=oev.clientY-odiv1.offsetHeight;
			if (oYvalue<0)
			 {
			 	oYvalue=0;
			 }


			filter1.frequency.value=oXvalue*6;
			gainNode.gain.value=oYvalue*0.005;

			opl.innerHTML=oXvalue*6;
			oyl.innerHTML=oYvalue*0.005;


			var h=oev.clientX-oDx;
			var v=oev.clientY-odiv1.clientHeight-oDy;

			if (h<0)
			 {
			 	h=0;
			 }
			if (h>odiv3.offsetWidth-odiv5.offsetWidth)
			 {
			 	h=odiv3.offsetWidth-odiv5.offsetWidth;
			 }
			if (v<0)
			 {
			 	v=0;
			 }
			if (v>odiv3.offsetHeight-odiv5.offsetHeight)
			 {
			 	v=odiv3.offsetHeight-odiv5.offsetHeight;
			 }
			else
			{
				odiv5.style.left=h+'px';
				odiv5.style.top=v+'px';			 	
			}



			document.ontouchend=function(e)
				{
					var oev=e||event.touches[0];
			
					odiv5.ontouchmove=null;
					odiv5.ontouchend=null;
				}
			return false;//阻止默认事件（禁止选中文字）
		}

	}

	//lowpass，声像的鼠标事件
	odiv6.onmousedown=function(e)
	{

		var oev=e||event;
		var oDx1=oev.clientX-odiv3.offsetWidth-odiv6.offsetLeft;
		var oDy1=oev.clientY-odiv1.offsetHeight-odiv6.offsetTop;

		document.onmousemove=function(e)
		{
			RanColor(odiv6);
			var oev=e||event;
			var oXvalue=oev.clientX-odiv3.offsetWidth;

			if (oXvalue>odiv4.offsetWidth-odiv6.offsetWidth+oDx1)
			 {
			 	oXvalue=odiv4.offsetWidth;
			 }
			 if (oXvalue<odiv4.offsetWidth*0.5)
			  {
			  	oXvalue=oev.clientX+odiv3.offsetWidth-odiv4.offsetWidth*0.5;
			  }
			 if (oXvalue>odiv4.offsetWidth*0.5)
			  {
			  	oXvalue=oev.clientX-odiv3.offsetWidth-odiv4.offsetWidth*0.5;
			  }

			var oYvalue=oev.clientY-odiv1.offsetHeight;

			if (oYvalue<0)
			 {
			 	oYvalue=0;
			 }

			pan.pan.value=oXvalue*0.005;
			filter2.frequency.value=oYvalue*10;
			opan.innerHTML=oXvalue*0.005;
			olow.innerHTML=oYvalue*10;

			var h=oev.clientX-odiv3.offsetWidth-oDx1;
			var v=oev.clientY-odiv1.clientHeight-oDy1;

			if (h<0) {h=0;}
			if (h>odiv4.offsetWidth-odiv6.offsetWidth)
			 {
			 	h=odiv4.offsetWidth-odiv6.offsetWidth;
			 }
			if (v<0){v=0;}
			if (v>odiv4.offsetHeight-odiv6.offsetHeight)
			 {
			 	v=odiv4.offsetHeight-odiv6.offsetHeight;
			 }
			else
			{
				odiv6.style.left=h+'px';
				odiv6.style.top=v+'px';			 	
			}



			document.onmouseup=function(e)
			{
				var oev=e||event;			
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;//阻止默认事件（禁止选中文字）

		}


	}
	//lowpass，声像的触摸事件
	odiv6.ontouchstart=function(e)
	{

		var oev=event.touches[0];
		var oDx1=oev.clientX-odiv3.offsetWidth-odiv6.offsetLeft;
		var oDy1=oev.clientY-odiv1.offsetHeight-odiv6.offsetTop;

		document.ontouchmove=function(e)
		{
			RanColor(odiv6);
			var oev=event.touches[0];
			var oXvalue=oev.clientX-odiv3.offsetWidth;

			if (oXvalue>odiv4.offsetWidth-odiv6.offsetWidth+oDx1)
			 {
			 	oXvalue=odiv4.offsetWidth;
			 }
			 if (oXvalue<odiv4.offsetWidth*0.5)
			  {
			  	oXvalue=oev.clientX+odiv3.offsetWidth-odiv4.offsetWidth*0.5;
			  }
			 if (oXvalue>odiv4.offsetWidth*0.5)
			  {
			  	oXvalue=oev.clientX-odiv3.offsetWidth-odiv4.offsetWidth*0.5;
			  }

			var oYvalue=oev.clientY-odiv1.offsetHeight;

			if (oYvalue<0)
			 {
			 	oYvalue=0;
			 }

			pan.pan.value=oXvalue*0.005;
			filter2.frequency.value=oYvalue*10;
			opan.innerHTML=oXvalue*0.005;
			olow.innerHTML=oYvalue*10;

			var h=oev.clientX-odiv3.offsetWidth-oDx1;
			var v=oev.clientY-odiv1.clientHeight-oDy1;

			if (h<0) {h=0;}
			if (h>odiv4.offsetWidth-odiv6.offsetWidth)
			 {
			 	h=odiv4.offsetWidth-odiv6.offsetWidth;
			 }
			if (v<0){v=0;}
			if (v>odiv4.offsetHeight-odiv6.offsetHeight)
			 {
			 	v=odiv4.offsetHeight-odiv6.offsetHeight;
			 }
			else
			{
				odiv6.style.left=h+'px';
				odiv6.style.top=v+'px';			 	
			}



			document.ontouchend=function(e)
			{
				var oev=e||event.touches[0];			
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;//阻止默认事件（禁止选中文字）

		}


	}
	
}
