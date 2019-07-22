$(function(){
   $(".right1-nav").mouseover(function(){
       $(".right1-ul3").stop().slideDown(500)
       $(".right1").css("backgroundColor","white").css("opacity",0.5);
   });
    $(".right1-nav").mouseout(function(){
       $(".right1-ul3").stop().slideUp(500)
       $(".right1").css("backgroundColor","").css("opacity",1);
   });


});