
	// 产生随机数
	function Random(m,n)
	{
		return Math.round(Math.random()*(n-m)+m);
	}
	// 产生随机颜色
	function RanColor(obj)
	{
		obj.style.fill="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
		obj.style.background="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";		
	}




	var oAguitar1=document.getElementById('guitar1');
	var oAguitar2=document.getElementById('guitar2');
	var ostring1=document.getElementById('string1');
	var ostring2=document.getElementById('string2');
	var ostring3=document.getElementById('string3');
	var ostring4=document.getElementById('string4');
	var ostring5=document.getElementById('string5');
	var ostring6=document.getElementById('string6');
	var ostring7=document.getElementById('string7');
	var ostring8=document.getElementById('string8');
	var ostring9=document.getElementById('string9');
	var ostring10=document.getElementById('string10');
	var ostring11=document.getElementById('string11');
	var ostring12=document.getElementById('string12');
	var onote1=document.getElementById('note1');
	var onote2=document.getElementById('note2');
	var onote3=document.getElementById('note3');












	var isClick=0;

	function oAgdown()
	{

		function music()
		{

			if (isClick==0)
			 {
			 	Ajax('Yinse/Aguitar/11.mp3');
			 	isClick=1;
			 }else if (isClick==1)
			  {
			  	Ajax('Yinse/Aguitar/12.mp3');
			  	isClick=2;
			  }else if (isClick==2)
			   {
			  	Ajax('Yinse/Aguitar/2a.mp3');
			  	Ajax('Yinse/Aguitar/21.mp3');			  	
			  	isClick=3;
			   }else if (isClick==3)
			    {
			  	Ajax('Yinse/Aguitar/22.mp3');	
			  	isClick=4;		    	
			    }else if (isClick==4)
			     {
			 	 	Ajax('Yinse/Aguitar/23.mp3');	
			 	 	isClick=5;  	
			     }else if (isClick==5)
			      {
			 	 	Ajax('Yinse/Aguitar/24.mp3');	
			 	 	isClick=6;			      	
			      }else if (isClick==6)
			       {
			 	 		Ajax('Yinse/Aguitar/2a.mp3');	
			 	 		isClick=7;			       	
			       }else if (isClick==7)
			        {
			 	 		Ajax('Yinse/Aguitar/12.mp3');	
			 	 		Ajax('Yinse/Aguitar/31.mp3');
			 	 		isClick=8;        	
			        }else if (isClick==8)
			         {
			 	 		Ajax('Yinse/Aguitar/22.mp3');
			 	 		isClick=9			         	
			         }else if (isClick==9)
			          {
			 	 		Ajax('Yinse/Aguitar/33.mp3');
			 	 		isClick=10;			          	
			          }else if (isClick==10)
			           {
			 	 		Ajax('Yinse/Aguitar/24.mp3');
			 	 		isClick=11;			           	
			           }else if (isClick==11)
			            {
			 	 			Ajax('Yinse/Aguitar/32.mp3');	
			 	 			isClick=12;		            	
			            }else if (isClick==12)
			             {
			 	 			Ajax('Yinse/Aguitar/12.mp3');	
			 	 			isClick=13;             	
			             }else if (isClick==13)
			              {
			 	 			Ajax('Yinse/Aguitar/11.mp3');
			 	 			Ajax('Yinse/Aguitar/41.mp3');	
			 	 			isClick=14;		              	
			              }else if (isClick==14)
			               {
			 	 				Ajax('Yinse/Aguitar/42.mp3');
			 	 				isClick=15;			               	
			               }else if (isClick==15)
			                {
				 	 			Ajax('Yinse/Aguitar/43.mp3');
				 	 			isClick=16;			                	
			                }else if (isClick==16)
			                {
				 	 			Ajax('Yinse/Aguitar/23.mp3');
				 	 			isClick=17;			                	
			                }else if (isClick==17)
			                {
				 	 			Ajax('Yinse/Aguitar/24.mp3');
				 	 			isClick=18;			                	
			                }else if (isClick==18)
			                {
				 	 			Ajax('Yinse/Aguitar/5a.mp3');
				 	 			Ajax('Yinse/Aguitar/51.mp3');
				 	 			isClick=19;			                	
			                }else if (isClick==19)
			                {
				 	 			Ajax('Yinse/Aguitar/52.mp3');
				 	 			isClick=20;			                	
			                }else if (isClick==20)
			                {
				 	 			Ajax('Yinse/Aguitar/22.mp3');
				 	 			isClick=21;			                	
			                }else if (isClick==21)
			                {
				 	 			Ajax('Yinse/Aguitar/33.mp3');
				 	 			isClick=22;			                	
			                }else if (isClick==22)
			                {
				 	 			Ajax('Yinse/Aguitar/53.mp3');
				 	 			isClick=23;			                	
			                }else if (isClick==23)
			                {
				 	 			Ajax('Yinse/Aguitar/6a.mp3');
				 	 			Ajax('Yinse/Aguitar/61.mp3');
				 	 			isClick=24;			                	
			                }else if (isClick==24)
			                {
				 	 			Ajax('Yinse/Aguitar/21.mp3');
				 	 			isClick=25;			                	
			                }else if (isClick==25)
			                {
				 	 			Ajax('Yinse/Aguitar/63.mp3');
				 	 			isClick=26;			                	
			                }else if (isClick==26)
			                {
				 	 			Ajax('Yinse/Aguitar/43.mp3');
				 	 			isClick=27;			                	
			                }else if (isClick==27)
			                {
				 	 			Ajax('Yinse/Aguitar/11.mp3');
				 	 			isClick=28;			                	
			                }else if (isClick==28)
			                {
				 	 			Ajax('Yinse/Aguitar/6a.mp3');
				 	 			isClick=29;			                	
			                }else if (isClick==29)
			                {
				 	 			Ajax('Yinse/Aguitar/53.mp3');
				 	 			Ajax('Yinse/Aguitar/71.mp3');
				 	 			isClick=30;			                	
			                }else if (isClick==30)
			                {
				 	 			Ajax('Yinse/Aguitar/31.mp3');
				 	 			isClick=31;			                	
			                }else if (isClick==31)
			                {
				 	 			Ajax('Yinse/Aguitar/42.mp3');
				 	 			isClick=32;			                	
			                }else if (isClick==32)
			                {
				 	 			Ajax('Yinse/Aguitar/22.mp3');
				 	 			isClick=33;			                	
			                }else if (isClick==33)
			                {
				 	 			Ajax('Yinse/Aguitar/23.mp3');
				 	 			isClick=34;			                	
			                }else if (isClick==34)
			                {
				 	 			Ajax('Yinse/Aguitar/8a.mp3');
				 	 			Ajax('Yinse/Aguitar/81.mp3');
				 	 			isClick=35;			                	
			                }else if (isClick==35)
			                {
				 	 			Ajax('Yinse/Aguitar/41.mp3');
				 	 			isClick=36;			                	
			                }else if (isClick==36)
			                {
				 	 			Ajax('Yinse/Aguitar/52.mp3');
				 	 			isClick=37;			                	
			                }else if (isClick==37)
			                {
				 	 			Ajax('Yinse/Aguitar/63.mp3');
				 	 			isClick=38;			                	
			                }else if (isClick==38)
			                {
				 	 			Ajax('Yinse/Aguitar/5a.mp3');
				 	 			isClick=39;			                	
			                }else if (isClick==39)
			                {
				 	 			Ajax('Yinse/Aguitar/24.mp3');
				 	 			Ajax('Yinse/Aguitar/51.mp3');
				 	 			isClick=40;			                	
			                }else if (isClick==40)
			                {
				 	 			Ajax('Yinse/Aguitar/52.mp3');
				 	 			isClick=41;			                	
			                }else if (isClick==41)
			                {
				 	 			Ajax('Yinse/Aguitar/22.mp3');
				 	 			isClick=42;			                	
			                }else if (isClick==42)
			                {
				 	 			Ajax('Yinse/Aguitar/43.mp3');
				 	 			isClick=43;			                	
			                }else if (isClick==43)
			                {
				 	 			Ajax('Yinse/Aguitar/33.mp3');
				 	 			isClick=0;			                	
			                }

		}
		music();


		RanColor(ostring1);
		RanColor(ostring2);
		RanColor(ostring3);
		RanColor(ostring4);
		RanColor(ostring5);
		RanColor(ostring6);
		RanColor(ostring7);
		RanColor(ostring8);
		RanColor(ostring9);
		RanColor(ostring10);
		RanColor(ostring11);
		RanColor(ostring12);
		RanColor(onote1);
		RanColor(onote2);
		RanColor(onote3);
		RanColor(document.getElementById('yinying1'));





	}

	function oAgup()
	{
		
  	 	ostring1.style.fill='';
  	 	ostring2.style.fill='';
  	 	ostring3.style.fill='';
  	 	ostring4.style.fill='';
  	 	ostring5.style.fill='';
  	 	ostring6.style.fill='';
  	 	ostring7.style.fill='';
  	 	ostring8.style.fill='';
  	 	ostring9.style.fill='';
  	 	ostring10.style.fill='';
  	 	ostring11.style.fill='';
  	 	ostring12.style.fill='';

	}



	oAguitar1.addEventListener('mousedown',oAgdown);
	oAguitar2.addEventListener('mousedown',oAgdown);
	// oAguitar1.addEventListener('touchstart',oAgdown);
	// oAguitar2.addEventListener('touchstart',oAgdown);
	document.addEventListener('mouseup',oAgup);
	// document.addEventListener('touchend',oAgup);
	document.addEventListener('keyup',oAgup);

	document.onkeydown=function(e)
	{
		var oev=e||event;
		if (oev.keyCode==13||oev.keyCode==32)
		 {
		 	oAgdown();
		 }
	}
	