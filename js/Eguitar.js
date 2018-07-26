	var oEguitar=document.getElementById('eguitar');
	var isClick=0;

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
	
	function oEgdown()
	{

		function music()
		{

			if (isClick==0)
			 {
			 	Ajax('Yinse/Eguitar/Ckey1.mp3');
			 	isClick=1;
			 }else if (isClick==1)
			  {
			  	Ajax('Yinse/Eguitar/Gkey1.mp3');
			  	isClick=2;
			  }else if (isClick==2)
			   {
			  	Ajax('Yinse/Eguitar/Dkey1.mp3');
			  	isClick=3;
			   }else if (isClick==3)
			    {
			  	Ajax('Yinse/Eguitar/Ekey1.mp3');	
			  	isClick=4;		    	
			    }else if (isClick==4)
			     {
			 	 	Ajax('Yinse/Eguitar/Bkey1.mp3');	
			 	 	isClick=5;  	
			     }else if (isClick==5)
			      {
			 	 	Ajax('Yinse/Eguitar/Gkey1.mp3');	
			 	 	isClick=6;			      	
			      }else if (isClick==6)
			       {
			 	 		Ajax('Yinse/Eguitar/Dkey1.mp3');	
			 	 		isClick=7;			       	
			       }else if (isClick==7)
			        {
			 	 		Ajax('Yinse/Eguitar/Ekey1.mp3');	
			 	 		isClick=8;        	
			        }else if (isClick==8)
			         {
			 	 		Ajax('Yinse/Eguitar/Akey1.mp3');
			 	 		isClick=9			         	
			         }else if (isClick==9)
			          {
			 	 		Ajax('Yinse/Eguitar/Ekey2.mp3');
			 	 		isClick=10;			          	
			          }else if (isClick==10)
			           {
			 	 		Ajax('Yinse/Eguitar/Akey2.mp3');
			 	 		isClick=11;			           	
			           }else if (isClick==11)
			            {
			 	 			Ajax('Yinse/Eguitar/Ckey2.mp3');	
			 	 			isClick=12;		            	
			            }else if (isClick==12)
			             {
			 	 			Ajax('Yinse/Eguitar/Gkey2.mp3');	
			 	 			isClick=13;             	
			             }else if (isClick==13)
			              {
			 	 			Ajax('Yinse/Eguitar/Dkey2.mp3');	
			 	 			isClick=14;		              	
			              }else if (isClick==14)
			               {
			 	 				Ajax('Yinse/Eguitar/Gkey1.mp3');
			 	 				isClick=15;			               	
			               }else if (isClick==15)
			                {
				 	 			Ajax('Yinse/Eguitar/Bkey2.mp3');
				 	 			isClick=0;			                	
			                }

		}
		music();



		document.getElementById('c1').style.transform=' translate(356.7px,130px) scale(1.2,1.2) translate(-356.7px,-130px)';
   		document.getElementById('c2').style.transform=' translate(356.7px,130px) scale(1.3,1.3) translate(-356.7px,-130px)';
   		document.getElementById('star').style.opacity='100';
   		// document.getElementById('animation2').beginElement();

   		RanColor(document.getElementById('string1'));
   		RanColor(document.getElementById('string2'));
   		RanColor(document.getElementById('string3'));
   		RanColor(document.getElementById('string4'));
   		RanColor(document.getElementById('string5'));
   		RanColor(document.getElementById('string6'));
   		RanColor(document.getElementById('xiangti'));



	}

	function oEgup()
	{
		document.getElementById('c1').style.transform=' translate(356.7px,130px) scale(1,1) translate(-356.7px,-130px)';
  	 	document.getElementById('c2').style.transform=' translate(356.7px,130px) scale(1,1) translate(-356.7px,-130px)';
  	 	document.getElementById('star').style.opacity='0';

  	 	document.getElementById('string1').style.fill='';
  	 	document.getElementById('string2').style.fill='';
  	 	document.getElementById('string3').style.fill='';
  	 	document.getElementById('string4').style.fill='';
  	 	document.getElementById('string5').style.fill='';
  	 	document.getElementById('string6').style.fill='';
	}



	oEguitar.addEventListener('mousedown',oEgdown);
	// oEguitar.addEventListener('touchstart',oEgdown);
	document.addEventListener('mouseup',oEgup);
	// document.addEventListener('touchend',oEgup);
	document.addEventListener('keyup',oEgup);

	document.onkeydown=function(e)
	{
		var oev=e||event;
		if (oev.keyCode>=48&&oev.keyCode<=57)
		 {
		 	oEgdown();
		 }
	}
	