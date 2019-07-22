function card_fu1(){
    $('.h_card1>li').css({"height":"4vh"});//给定一个li的高度
    var $n1=$(".h_card1>li").length;//获取li的个数
    var $height_a=$(".h_card1>li").outerHeight();//获取li的高度
    var $h_card1=$(".h_card1");//获取ul
    var $height_card1=$n1*$height_a;//ul的高度=li的个数*li的高度
    var $card_fu1=$(".card_fu1");//最外层父元素
    $h_card1.css({"height":$height_card1})//鼠标进入后
    $card_fu1.mouseleave(function(){
       $h_card1.css({
        "height":0,
       })
    })
}

function card_fu2(){
    $('.h_card2>li').css({"height":"4vh"});//给定一个li的高度
    var $n2=$(".h_card2>li>a").length;//获取a的个数
    var $height_a=$(".h_card2>li").outerHeight();//获取a的高度
    var $h_card2=$(".h_card2");//获取ul
    var $height_card2=$n2*$height_a;//ul的高度=a的个数*a的高度
    var $card_fu2=$(".card_fu2");//最外层父元素
    $h_card2.css({"height":$height_card2})// 鼠标进入后
    $card_fu2.mouseleave(function(){
       $h_card2.css({
        "height":0,
       })
    })    
}

function card_fu3(){
    $('.h_card3>li').css({"height":"4vh"});//给定一个li的高度
    var $n3=$(".h_card3>li>a").length;//获取a的个数
    var $height_a=$(".h_card3>li").outerHeight();//获取li的高度
    var $h_card3=$(".h_card3");//获取ul
    var $height_card3=$n3*$height_a;//ul的高度=a的个数*a的高度
    var $card_fu3=$(".card_fu3");//最外层父元素
    $h_card3.css({"height":$height_card3})//鼠标进入后
    $card_fu3.mouseleave(function(){
       $h_card3.css({
        "height":0,
       })
    })   
}