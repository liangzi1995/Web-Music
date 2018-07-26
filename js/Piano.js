
		var onote1=document.getElementById('note1');
		var onote2=document.getElementById('note2');
		var onote3=document.getElementById('note3');
		var onote4=document.getElementById('note4');
		var onote5=document.getElementById('note5');
		var onote6=document.getElementById('note6');
		var owhite1=document.getElementById('white1');
		var owhite2=document.getElementById('white2');
		var owhite3=document.getElementById('white3');
		var owhite4=document.getElementById('white4');
		var owhite5=document.getElementById('white5');
		var owhite6=document.getElementById('white6');
		var owhite7=document.getElementById('white7');
		var owhite8=document.getElementById('white8');
		var owhite9=document.getElementById('white9');
		var owhite10=document.getElementById('white10');
		var owhite11=document.getElementById('white11');
		var owhite12=document.getElementById('white12');
		var owhite13=document.getElementById('white13');
		var owhite14=document.getElementById('white14');
		var owhite15=document.getElementById('white15');
		var owhite16=document.getElementById('white16');
		var owhite17=document.getElementById('white17');
		var owhite18=document.getElementById('white18');
		var owhite19=document.getElementById('white19');
		var owhite20=document.getElementById('white20');
		var owhite21=document.getElementById('white21');
		var owhite22=document.getElementById('white22');
		var owhite23=document.getElementById('white23');
		var owhite24=document.getElementById('white24');
		var owhite25=document.getElementById('white25');
		var owhite26=document.getElementById('white26');
		var owhite27=document.getElementById('white27');

		var oblack1=document.getElementById('black1');
		var oblack2=document.getElementById('black2');
		var oblack3=document.getElementById('black3');
		var oblack4=document.getElementById('black4');
		var oblack5=document.getElementById('black5');
		var oblack6=document.getElementById('black6');
		var oblack7=document.getElementById('black7');
		var oblack8=document.getElementById('black8');
		var oblack9=document.getElementById('black9');
		var oblack10=document.getElementById('black10');
		var oblack11=document.getElementById('black11');
		var oblack12=document.getElementById('black12');
		var oblack13=document.getElementById('black13');
		var oblack14=document.getElementById('black14');
		var oblack15=document.getElementById('black15');
		var oblack16=document.getElementById('black16');
		var oblack17=document.getElementById('black17');
		var oblack18=document.getElementById('black18');
		var oblack19=document.getElementById('black19');


	// 产生随机数
	function Random(m,n)
	{
		return Math.round(Math.random()*(n-m)+m);
	}
	// 产生随机颜色
	function RanColor(obj)
	{
		obj.style.fill="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
		// obj.style.background="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";		
	}

	// 恢复颜色
	function ReColor(obj)
	{
		obj.style.fill='';
	}

// 鼠标按下或者键盘按下或者触摸屏按下触发的动画效果
	function oPdown()
	{
		document.getElementById('piano1').style.fill="rgb("+Random(30,60)+","+Random(31.61)+","+Random(32,62)+")";
		RanColor(onote1);
		RanColor(onote2);
		RanColor(onote3);
		RanColor(onote4);
		RanColor(onote5);
		RanColor(onote6);

		onote1.style.transform='translate(468.3px,30.9px) scale(0.5,0.5) translate(-468.3px,-30.9px)';
		onote2.style.transform='translate(381.3px,49.9px) scale(0.7,0.7) translate(-381.3px,-49.9px)';
		onote3.style.transform='translate(300.3px,7.9px) scale(0.9,0.9) translate(-300.3px,-7.9px)';
		onote4.style.transform='translate(200.7px,34.9px) scale(1.1,1.1) translate(-200.7px,-34.9px)';
		onote5.style.transform='translate(107.3px,25.9px) scale(1.3,1.3) translate(-107.3px,-25.9px)';
		onote6.style.transform='translate(26.3px,66.9px) scale(1.5,1.5) translate(-26.3px,-66.9px)';

		
		document.getElementById('labaLeft2').style.transform='translate(66.95px,141.45px) scale(1.05,1.05) translate(-66.95px,-141.45px)';
		document.getElementById('labaRight2').style.transform='translate(463.05px,141.45px) scale(1.05,1.05) translate(-463.05px,-141.45px)';					

	}



	function oPup()
	{
		RanColor(onote1);
		RanColor(onote2);
		RanColor(onote3);
		RanColor(onote4);
		RanColor(onote5);
		RanColor(onote6);

		onote1.style.transform='translate(468.3px,30.9px) scale(1,1) translate(-468.3px,-30.9px)';
		onote2.style.transform='translate(381.3px,49.9px) scale(1,1) translate(-381.3px,-49.9px)';
		onote3.style.transform='translate(300.3px,7.9px) scale(1,1) translate(-300.3px,-7.9px)';
		onote4.style.transform='translate(200.7px,34.9px) scale(1,1) translate(-200.7px,-34.9px)';
		onote5.style.transform='translate(107.3px,25.9px) scale(1,1) translate(-107.3px,-25.9px)';
		onote6.style.transform='translate(26.3px,66.9px) scale(1,1) translate(-26.3px,-66.9px)';

		document.getElementById('labaLeft2').style.transform='translate(66.95px,141.45px) scale(1,1) translate(-66.95px,-141.45px)';
		document.getElementById('labaRight2').style.transform='translate(463.05px,141.45px) scale(1,1) translate(-463.05px,-141.45px)';


		ReColor(owhite1);
		ReColor(owhite2);
		ReColor(owhite3);
		ReColor(owhite4);
		ReColor(owhite5);
		ReColor(owhite6);
		ReColor(owhite7);
		ReColor(owhite8);
		ReColor(owhite9);
		ReColor(owhite10);
		ReColor(owhite11);
		ReColor(owhite12);
		ReColor(owhite13);
		ReColor(owhite14);
		ReColor(owhite15);
		ReColor(owhite16);
		ReColor(owhite17);
		ReColor(owhite18);
		ReColor(owhite19);
		ReColor(owhite20);
		ReColor(owhite21);
		ReColor(owhite22);
		ReColor(owhite23);
		ReColor(owhite24);
		ReColor(owhite25);
		ReColor(owhite26);
		ReColor(owhite27);

		ReColor(oblack1);
		ReColor(oblack2);
		ReColor(oblack3);
		ReColor(oblack4);
		ReColor(oblack5);
		ReColor(oblack6);
		ReColor(oblack7);
		ReColor(oblack8);
		ReColor(oblack9);
		ReColor(oblack10);
		ReColor(oblack11);
		ReColor(oblack12);
		ReColor(oblack13);
		ReColor(oblack14);
		ReColor(oblack15);
		ReColor(oblack16);
		ReColor(oblack17);
		ReColor(oblack18);
		ReColor(oblack19);

	}

	document.addEventListener('mouseup',oPup);
	document.addEventListener('keyup',oPup);
	document.addEventListener('touchend',oPup);


	// 白键事件
	owhite1.addEventListener('mousedown',oPdown);
	owhite1.addEventListener('mousedown',function(){Ajax('Yinse/Piano/d1.mp3');});
	owhite1.addEventListener('mousedown',function(){RanColor(owhite1);});

	owhite2.addEventListener('mousedown',oPdown);
	owhite2.addEventListener('mousedown',function(){Ajax('Yinse/Piano/e1.mp3');});
	owhite2.addEventListener('mousedown',function(){RanColor(owhite2);});

	owhite3.addEventListener('mousedown',oPdown);
	owhite3.addEventListener('mousedown',function(){Ajax('Yinse/Piano/f1.mp3');});
	owhite3.addEventListener('mousedown',function(){RanColor(owhite3);})

	owhite4.addEventListener('mousedown',oPdown);
	owhite4.addEventListener('mousedown',function(){Ajax('Yinse/Piano/g1.mp3');});
	owhite4.addEventListener('mousedown',function(){RanColor(owhite4);})

	owhite5.addEventListener('mousedown',oPdown);
	owhite5.addEventListener('mousedown',function(){Ajax('Yinse/Piano/a1.mp3');});
	owhite5.addEventListener('mousedown',function(){RanColor(owhite5);})

	owhite6.addEventListener('mousedown',oPdown);
	owhite6.addEventListener('mousedown',function(){Ajax('Yinse/Piano/b1.mp3');});
	owhite6.addEventListener('mousedown',function(){RanColor(owhite6);})
	
	owhite7.addEventListener('mousedown',oPdown);
	owhite7.addEventListener('mousedown',function(){Ajax('Yinse/Piano/c1.mp3');});
	owhite7.addEventListener('mousedown',function(){RanColor(owhite7);})

	owhite8.addEventListener('mousedown',oPdown);
	owhite8.addEventListener('mousedown',function(){Ajax('Yinse/Piano/d2.mp3');});
	owhite8.addEventListener('mousedown',function(){RanColor(owhite8);})

	owhite9.addEventListener('mousedown',oPdown);
	owhite9.addEventListener('mousedown',function(){Ajax('Yinse/Piano/e2.mp3');});
	owhite9.addEventListener('mousedown',function(){RanColor(owhite9);})

	owhite10.addEventListener('mousedown',oPdown);
	owhite10.addEventListener('mousedown',function(){Ajax('Yinse/Piano/f2.mp3');});
	owhite10.addEventListener('mousedown',function(){RanColor(owhite10);})

	owhite11.addEventListener('mousedown',oPdown);
	owhite11.addEventListener('mousedown',function(){Ajax('Yinse/Piano/g2.mp3');});
	owhite11.addEventListener('mousedown',function(){RanColor(owhite11);})

	owhite12.addEventListener('mousedown',oPdown);
	owhite12.addEventListener('mousedown',function(){Ajax('Yinse/Piano/a2.mp3');});
	owhite12.addEventListener('mousedown',function(){RanColor(owhite12);})

	owhite13.addEventListener('mousedown',oPdown);
	owhite13.addEventListener('mousedown',function(){Ajax('Yinse/Piano/b2.mp3');});
	owhite13.addEventListener('mousedown',function(){RanColor(owhite13);})

	owhite14.addEventListener('mousedown',oPdown);
	owhite14.addEventListener('mousedown',function(){Ajax('Yinse/Piano/c2.mp3');});
	owhite14.addEventListener('mousedown',function(){RanColor(owhite14);})

	owhite15.addEventListener('mousedown',oPdown);
	owhite15.addEventListener('mousedown',function(){Ajax('Yinse/Piano/d3.mp3');});
	owhite15.addEventListener('mousedown',function(){RanColor(owhite15);})

	owhite16.addEventListener('mousedown',oPdown);
	owhite16.addEventListener('mousedown',function(){Ajax('Yinse/Piano/e3.mp3');});
	owhite16.addEventListener('mousedown',function(){RanColor(owhite16);})

	owhite17.addEventListener('mousedown',oPdown);
	owhite17.addEventListener('mousedown',function(){Ajax('Yinse/Piano/f3.mp3');});
	owhite17.addEventListener('mousedown',function(){RanColor(owhite17);})

	owhite18.addEventListener('mousedown',oPdown);
	owhite18.addEventListener('mousedown',function(){Ajax('Yinse/Piano/g3.mp3');});
	owhite18.addEventListener('mousedown',function(){RanColor(owhite18);})

	owhite19.addEventListener('mousedown',oPdown);
	owhite19.addEventListener('mousedown',function(){Ajax('Yinse/Piano/a3.mp3');});
	owhite19.addEventListener('mousedown',function(){RanColor(owhite19);})

	owhite20.addEventListener('mousedown',oPdown);
	owhite20.addEventListener('mousedown',function(){Ajax('Yinse/Piano/b3.mp3');});
	owhite20.addEventListener('mousedown',function(){RanColor(owhite20);})

	owhite21.addEventListener('mousedown',oPdown);
	owhite21.addEventListener('mousedown',function(){Ajax('Yinse/Piano/c3.mp3');});
	owhite21.addEventListener('mousedown',function(){RanColor(owhite21);})

	owhite22.addEventListener('mousedown',oPdown);
	owhite22.addEventListener('mousedown',function(){Ajax('Yinse/Piano/d4.mp3');});
	owhite22.addEventListener('mousedown',function(){RanColor(owhite22);})

	owhite23.addEventListener('mousedown',oPdown);
	owhite23.addEventListener('mousedown',function(){Ajax('Yinse/Piano/e4.mp3');});
	owhite23.addEventListener('mousedown',function(){RanColor(owhite23);})

	owhite24.addEventListener('mousedown',oPdown);
	owhite24.addEventListener('mousedown',function(){Ajax('Yinse/Piano/f4.mp3');});
	owhite24.addEventListener('mousedown',function(){RanColor(owhite24);})

	owhite25.addEventListener('mousedown',oPdown);
	owhite25.addEventListener('mousedown',function(){Ajax('Yinse/Piano/g4.mp3');});
	owhite25.addEventListener('mousedown',function(){RanColor(owhite25);})

	owhite26.addEventListener('mousedown',oPdown);
	owhite26.addEventListener('mousedown',function(){Ajax('Yinse/Piano/a4.mp3');});
	owhite26.addEventListener('mousedown',function(){RanColor(owhite26);})

	owhite27.addEventListener('mousedown',oPdown);
	owhite27.addEventListener('mousedown',function(){Ajax('Yinse/Piano/b4.mp3');});
	owhite27.addEventListener('mousedown',function(){RanColor(owhite27);})

	// 黑键事件
	oblack1.addEventListener('mousedown',oPdown);
	oblack1.addEventListener('mousedown',function(){Ajax('Yinse/Piano/ds1.mp3');});
	oblack1.addEventListener('mousedown',function(){RanColor(oblack1);})

	oblack2.addEventListener('mousedown',oPdown);
	oblack2.addEventListener('mousedown',function(){Ajax('Yinse/Piano/fs1.mp3');});
	oblack2.addEventListener('mousedown',function(){RanColor(oblack2);})

	oblack3.addEventListener('mousedown',oPdown);
	oblack3.addEventListener('mousedown',function(){Ajax('Yinse/Piano/gs1.mp3');});
	oblack3.addEventListener('mousedown',function(){RanColor(oblack3);})

	oblack4.addEventListener('mousedown',oPdown);
	oblack4.addEventListener('mousedown',function(){Ajax('Yinse/Piano/as1.mp3');});
	oblack4.addEventListener('mousedown',function(){RanColor(oblack4);})

	oblack5.addEventListener('mousedown',oPdown);
	oblack5.addEventListener('mousedown',function(){Ajax('Yinse/Piano/cs1.mp3');});
	oblack5.addEventListener('mousedown',function(){RanColor(oblack5);})

	oblack6.addEventListener('mousedown',oPdown);
	oblack6.addEventListener('mousedown',function(){Ajax('Yinse/Piano/ds2.mp3');});
	oblack6.addEventListener('mousedown',function(){RanColor(oblack6);})

	oblack7.addEventListener('mousedown',oPdown);
	oblack7.addEventListener('mousedown',function(){Ajax('Yinse/Piano/fs2.mp3');});
	oblack7.addEventListener('mousedown',function(){RanColor(oblack7);})

	oblack8.addEventListener('mousedown',oPdown);
	oblack8.addEventListener('mousedown',function(){Ajax('Yinse/Piano/gs2.mp3');});
	oblack8.addEventListener('mousedown',function(){RanColor(oblack8);})

	oblack9.addEventListener('mousedown',oPdown);
	oblack9.addEventListener('mousedown',function(){Ajax('Yinse/Piano/as2.mp3');});
	oblack9.addEventListener('mousedown',function(){RanColor(oblack9);})

	oblack10.addEventListener('mousedown',oPdown);
	oblack10.addEventListener('mousedown',function(){Ajax('Yinse/Piano/cs2.mp3');});
	oblack10.addEventListener('mousedown',function(){RanColor(oblack10);})

	oblack11.addEventListener('mousedown',oPdown);
	oblack11.addEventListener('mousedown',function(){Ajax('Yinse/Piano/ds3.mp3');});
	oblack11.addEventListener('mousedown',function(){RanColor(oblack11);})

	oblack12.addEventListener('mousedown',oPdown);
	oblack12.addEventListener('mousedown',function(){Ajax('Yinse/Piano/fs3.mp3');});
	oblack12.addEventListener('mousedown',function(){RanColor(oblack12);})

	oblack13.addEventListener('mousedown',oPdown);
	oblack13.addEventListener('mousedown',function(){Ajax('Yinse/Piano/gs3.mp3');});
	oblack13.addEventListener('mousedown',function(){RanColor(oblack13);})
	
	oblack14.addEventListener('mousedown',oPdown);
	oblack14.addEventListener('mousedown',function(){Ajax('Yinse/Piano/as3.mp3');});
	oblack14.addEventListener('mousedown',function(){RanColor(oblack14);})

	oblack15.addEventListener('mousedown',oPdown);
	oblack15.addEventListener('mousedown',function(){Ajax('Yinse/Piano/cs3.mp3');});
	oblack15.addEventListener('mousedown',function(){RanColor(oblack15);})

	oblack16.addEventListener('mousedown',oPdown);
	oblack16.addEventListener('mousedown',function(){Ajax('Yinse/Piano/ds4.mp3');});
	oblack16.addEventListener('mousedown',function(){RanColor(oblack16);})

	oblack17.addEventListener('mousedown',oPdown);
	oblack17.addEventListener('mousedown',function(){Ajax('Yinse/Piano/fs4.mp3');});
	oblack17.addEventListener('mousedown',function(){RanColor(oblack17);})

	oblack18.addEventListener('mousedown',oPdown);
	oblack18.addEventListener('mousedown',function(){Ajax('Yinse/Piano/gs4.mp3');});
	oblack18.addEventListener('mousedown',function(){RanColor(oblack18);})

	oblack19.addEventListener('mousedown',oPdown);
	oblack19.addEventListener('mousedown',function(){Ajax('Yinse/Piano/as4.mp3');});
	oblack19.addEventListener('mousedown',function(){RanColor(oblack19);})



	// 键盘事件
	document.onkeydown=function(e)
	{

		var oEv=e||event;
		if (oEv.keyCode==49)
		 {
		 	oPdown();
		 	Ajax('Yinse/Piano/d1.mp3');
		 	RanColor(owhite1);
		 }else if (oEv.keyCode==50)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/e1.mp3');
		 	RanColor(owhite2);
		  }else if (oEv.keyCode==51)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/f1.mp3');
		 	RanColor(owhite3);
		  }else if (oEv.keyCode==52)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/g1.mp3');
		 	RanColor(owhite4);
		  }else if (oEv.keyCode==53)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/a1.mp3');
		 	RanColor(owhite5);
		  }else if (oEv.keyCode==54)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/b1.mp3');
		 	RanColor(owhite6);
		  }else if (oEv.keyCode==55)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/c1.mp3');
		 	RanColor(owhite7);
		  }else if (oEv.keyCode==56)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/d2.mp3');
		 	RanColor(owhite8);
		  }else if (oEv.keyCode==57)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/e2.mp3');
		 	RanColor(owhite9);
		  }else if (oEv.keyCode==48)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/f2.mp3');
		 	RanColor(owhite10);
		  }else if (oEv.keyCode==65)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/g2.mp3');
		 	RanColor(owhite11);
		  }else if (oEv.keyCode==66)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/a2.mp3');
		 	RanColor(owhite12);
		  }else if (oEv.keyCode==67)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/b2.mp3');
		 	RanColor(owhite13);
		  }else if (oEv.keyCode==68)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/c2.mp3');
		 	RanColor(owhite14);
		  }else if (oEv.keyCode==69)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/d3.mp3');
		 	RanColor(owhite15);
		  }else if (oEv.keyCode==70)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/e3.mp3');
		 	RanColor(owhite16);
		  }else if (oEv.keyCode==71)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/f3.mp3');
		 	RanColor(owhite17);
		  }else if (oEv.keyCode==72)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/g3.mp3');
		 	RanColor(owhite18);
		  }else if (oEv.keyCode==73)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/a3.mp3');
		 	RanColor(owhite19);
		  }else if (oEv.keyCode==74)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/b3.mp3');
		 	RanColor(owhite20);
		  }else if (oEv.keyCode==75)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/c3.mp3');
		 	RanColor(owhite21);
		  }else if (oEv.keyCode==76)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/d4.mp3');
		 	RanColor(owhite22);
		  }else if (oEv.keyCode==77)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/e4.mp3');
		 	RanColor(owhite23);
		  }else if (oEv.keyCode==78)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/f4.mp3');
		 	RanColor(owhite24);
		  }else if (oEv.keyCode==79)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/g4.mp3');
		 	RanColor(owhite25);
		  }else if (oEv.keyCode==80)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/a4.mp3');
		 	RanColor(owhite26);
		  }else if (oEv.keyCode==81)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/b4.mp3');
		 	RanColor(owhite27);
		  }else if (oEv.keyCode==82)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/ds1.mp3');
		 	RanColor(oblack1);
		  }else if (oEv.keyCode==83)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/fs1.mp3');
		 	RanColor(oblack2);
		  }else if (oEv.keyCode==84)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/gs1.mp3');
		 	RanColor(oblack3);
		  }else if (oEv.keyCode==85)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/as1.mp3');
		 	RanColor(oblack4);
		  }else if (oEv.keyCode==86)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/cs1.mp3');
		 	RanColor(oblack5);
		  }else if (oEv.keyCode==87)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/ds2.mp3');
		 	RanColor(oblack6);
		  }else if (oEv.keyCode==88)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/fs2.mp3');
		 	RanColor(oblack7);
		  }else if (oEv.keyCode==89)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/gs2.mp3');
		 	RanColor(oblack8);
		  }else if (oEv.keyCode==90)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/as2.mp3');
		 	RanColor(oblack9);
		  }else if (oEv.keyCode==8)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/cs2.mp3');
		 	RanColor(oblack10);
		  }else if (oEv.keyCode==32)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/ds3.mp3');
		 	RanColor(oblack11);
		  }else if (oEv.keyCode==13)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/fs3.mp3');
		 	RanColor(oblack12);
		  }else if (oEv.keyCode==37)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/gs3.mp3');
		 	RanColor(oblack13);
		  }else if (oEv.keyCode==38)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/as3.mp3');
		 	RanColor(oblack14);
		  }else if (oEv.keyCode==39)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/cs3.mp3');
		 	RanColor(oblack15);
		  }else if (oEv.keyCode==40)
		  {
		  	oPdown();
		 	Ajax('Yinse/Piano/ds4.mp3');
		 	RanColor(oblack16);
		  }
	}

