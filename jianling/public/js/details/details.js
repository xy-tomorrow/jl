
$(function(){
    
    //    底部点击切换效果
 $("ul.title").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var id=$(this).attr("data-id");
 // console.log(id)
$(`#${id}`).addClass("block").siblings().removeClass("block")
// console.log(`#${id}`)
 })
 var n=1;
 var num=$("#num")
 var n= $("#num").html();
 $("#btn2").click(function(){
    n++;
    num.html(n)
  })
 $("#btn1").click(function(){ 
   
    if(n>1){
        n--;
        num.html(n)
    }

   
     
 })


})