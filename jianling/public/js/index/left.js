/**
 * Created by Vision��� on 2017/5/17.
 */
$(function(){
    //��������֣��������¼�
   $(".leftZ-3").mouseover(function(){
      $(".leftZ-31").stop().hide(500);
   }).mouseout(function(){
       $(".leftZ-31").stop().show(500);
   });
    
//leftZ-7ul����
    $(".leftZ-7").mouseover(function(){
       $(".leftZ-7ul").css("display","block");
       $(".leftZ-8").css("display","none");
        $(".leftZ-7ul>li").mouseover(function(){
           $(this) .css("backgroundColor","#3090BA").siblings().css("backgroundColor","#246C92");
        });
    }).mouseout(function(){
        $(".leftZ-7ul").css("display","none");
        $(".leftZ-8").css("display","block");
    });
});