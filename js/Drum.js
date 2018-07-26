
	var osvg=document.getElementById('svg');
	var ocrash1=document.getElementById('crash1');
	var ocrash2=document.getElementById('crash2');
	var ocrash3=document.getElementById('crash3');
	var ocrash4=document.getElementById('crash4');
	var odrum1=document.getElementById('drum1');
	var odrum2=document.getElementById('drum2');
	var odrum3=document.getElementById('drum3');
	var odrum4=document.getElementById('drum4');
	var odrum5=document.getElementById('drum5');
	var odrum6=document.getElementById('drum6');

// 鼠标及触摸事件如下：
	function Acrash1()
	{
		ocrash1.style.transform=" translate(1090.3px,290.2px) scale(0.8,0.8) translate(-1090.3px,-290.2px) ";
		Ajax('Yinse/Drum/jiazigu/crashrr.mp3');
 	}
	// ocrash1.addEventListener('touchstart',Acrash1);
	ocrash1.addEventListener('mousedown',Acrash1);
	

	function Acrash2()
	{			
		ocrash2.style.transform=" translate(825.2px,125.5px) scale(0.8,0.8) translate(-825.2px,-125.5px) ";
		Ajax('Yinse/Drum/jiazigu/crashr.mp3');
	}

    // ocrash2.addEventListener('touchstart', Acrash2);
    ocrash2.addEventListener('mousedown', Acrash2);
	
	function Acrash3()
	{			
		ocrash3.style.transform=" translate(304.3px,494px) scale(0.8,0.8) translate(-304.3px,-494px) ";
		Ajax('Yinse/Drum/jiazigu/hihat.mp3');
	}

    // ocrash3.addEventListener('touchstart', Acrash3);
    ocrash3.addEventListener('mousedown', Acrash3);

	function Acrash4()
	{			
		ocrash4.style.transform=" translate(350.8px,206.2px) scale(0.8,0.8) translate(-350.8px,-206.2px) ";
		Ajax('Yinse/Drum/jiazigu/crashl.mp3');
	}

    // ocrash4.addEventListener('touchstart', Acrash4);
    ocrash4.addEventListener('mousedown', Acrash4);

	function Adrum1()
	{			
		odrum1.style.transform=" translate(907.4px,622.5px) scale(0.8,0.8) translate(-907.4px,-622.5px) ";
		Ajax('Yinse/Drum/jiazigu/tom4.mp3');
	}

    // odrum1.addEventListener('touchstart', Adrum1);
    odrum1.addEventListener('mousedown', Adrum1);

	function Adrum2()
	{			
		odrum2.style.transform=" translate(477.2px,616.3px) scale(0.8,0.8) translate(-477.2px,-616.3px) ";
		Ajax('Yinse/Drum/jiazigu/snare.mp3');
	}

    // odrum2.addEventListener('touchstart', Adrum2);
    odrum2.addEventListener('mousedown', Adrum2);

	function Adrum3()
	{			
		odrum3.style.transform=" translate(663.8px,494.7px) scale(0.8,0.8) translate(-663.8px,-494.7px) ";
		Ajax('Yinse/Drum/jiazigu/kick.mp3');
	}

    // odrum3.addEventListener('touchstart', Adrum3);
    odrum3.addEventListener('mousedown', Adrum3);

	function Adrum4()
	{			
		odrum4.style.transform=" translate(653.1px,284.4px) scale(0.8,0.8) translate(-653.1px,-284.4px) ";
		Ajax('Yinse/Drum/jiazigu/tom2.mp3');
	}

    // odrum4.addEventListener('touchstart', Adrum4);
    odrum4.addEventListener('mousedown', Adrum4);

	function Adrum5()
	{			
		odrum5.style.transform=" translate(483.8px,370.3px) scale(0.8,0.8) translate(-483.8px,-370.3px) ";
		Ajax('Yinse/Drum/jiazigu/tom1.mp3');
	}

    // odrum5.addEventListener('touchstart', Adrum5);
    odrum5.addEventListener('mousedown', Adrum5);

	function Adrum6()
	{			
		odrum6.style.transform=" translate(823.6px,307.9px) scale(0.8,0.8) translate(-823.6px,-307.9px) ";
		Ajax('Yinse/Drum/jiazigu/tom3.mp3');
	}

    // odrum6.addEventListener('touchstart', Adrum6);
    odrum6.addEventListener('mousedown', Adrum6);




	function Asvg()
	{
		ocrash1.style.transform="translate(1090.3px,290.2px) scale(1,1) translate(-1090.3px,-290.2px)";
		ocrash2.style.transform=" translate(825.2px,125.5px) scale(1,1) translate(-825.2px,-125.5px) ";
		ocrash3.style.transform=" translate(304.3px,494px) scale(1,1) translate(-304.3px,-494px) ";
		ocrash4.style.transform=" translate(350.8px,206.2px) scale(1,1) translate(-350.8px,-206.2px) ";
		odrum1.style.transform=" translate(907.4px,622.5px) scale(1,1) translate(-907.4px,-622.5px) ";
		odrum2.style.transform=" translate(477.2px,616.3px) scale(1,1) translate(-477.2px,-616.3px) ";
		odrum3.style.transform=" translate(663.8px,494.7px) scale(1,1) translate(-663.8px,-494.7px) ";
		odrum4.style.transform=" translate(653.1px,284.4px) scale(1,1) translate(-653.1px,-284.4px) ";
		odrum5.style.transform=" translate(483.8px,370.3px) scale(1,1) translate(-483.8px,-370.3px) ";
		odrum6.style.transform=" translate(823.6px,307.9px) scale(1,1) translate(-823.6px,-307.9px) ";
	}

	document.addEventListener('mouseup',Asvg);
	// osvg.addEventListener('touchend',Asvg);

		


// 键盘事件如下：
		document.onkeydown=function(e)
		{
			var oevent=e||event;
			if (oevent.keyCode==65)
			 {
				Adrum3();
			 }	else if (oevent.keyCode==68)
			 {
			 	Adrum2();
			 }	else if (oevent.keyCode==87)
			 {
			 	Adrum5();
			 }	else if (oevent.keyCode==83)
			 {
			 	Acrash3();
			 }	else if (oevent.keyCode==81)
			 {
			 	Acrash4();
			 }	else if (oevent.keyCode==90)
			 {
			 	Acrash2();
			 }	else if (oevent.keyCode==82)
			 {
			 	Adrum6();
			 }	else if (oevent.keyCode==67)
			 {
			 	Adrum1();
			 }	else if (oevent.keyCode==69)
			 {
			 	Adrum4();
			 } else if (oevent.keyCode==88)
			 {
			 	Acrash1();
			 }								
			 		
		}

		document.onkeyup=function(){
		ocrash1.style.transform="translate(1090.3px,290.2px) scale(1,1) translate(-1090.3px,-290.2px)";
		ocrash2.style.transform=" translate(825.2px,125.5px) scale(1,1) translate(-825.2px,-125.5px) ";
		ocrash3.style.transform=" translate(304.3px,494px) scale(1,1) translate(-304.3px,-494px) ";
		ocrash4.style.transform=" translate(350.8px,206.2px) scale(1,1) translate(-350.8px,-206.2px) ";
		odrum1.style.transform=" translate(907.4px,622.5px) scale(1,1) translate(-907.4px,-622.5px) ";
		odrum2.style.transform=" translate(477.2px,616.3px) scale(1,1) translate(-477.2px,-616.3px) ";
		odrum3.style.transform=" translate(663.8px,494.7px) scale(1,1) translate(-663.8px,-494.7px) ";
		odrum4.style.transform=" translate(653.1px,284.4px) scale(1,1) translate(-653.1px,-284.4px) ";
		odrum5.style.transform=" translate(483.8px,370.3px) scale(1,1) translate(-483.8px,-370.3px) ";
		odrum6.style.transform=" translate(823.6px,307.9px) scale(1,1) translate(-823.6px,-307.9px) ";	
		}	