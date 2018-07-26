

 // var scrollFunc=function(e){
 // e=e || window.event;
 // if(e.wheelDelta && event.ctrlKey){//IE/Opera/Chrome
 //  event.returnValue=false;
 // }else if(e.detail){//Firefox
 //  event.returnValue=false;
 // }
 // }
 // /*注册事件*/
 // if(document.addEventListener){
 // document.addEventListener('DOMMouseScroll',scrollFunc,false);
 // }//W3C
 // window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari


 var scrollFunc=function(e){
 var ev=e||event;
 if(ev.wheelDelta && ev.ctrlKey){//IE/Opera/Chrome
  return false;
 }else if(ev.detail){//Firefox
  return false;
 }
 }
 /*注册事件*/
 if(document.addEventListener){
 document.addEventListener('DOMMouseScroll',scrollFunc,false);
 }//W3C
 window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
