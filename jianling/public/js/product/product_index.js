//轮播图
$(function(){
    //克隆第一张图到最后一张
    var firstLi = $('#imgBox li').eq(0).clone(true);
    //添加克隆的第一张图到ul中
    $('#imgBox').append(firstLi);
    //点击右箭头事件
    var imgIndex = 0;
    $('#arrowRight').click(function(){
        imgIndex++;
        if(imgIndex>3){
            //瞬间移动到第一张图
            $('#imgBox').css('left','0');
            imgIndex=1;
        }
        //得到第几张图,得计算要移动的left值距离
        var move = -imgIndex*$('.player').width();
        $('#imgBox').stop().animate({left:move},500);

        //切换原点
        if(imgIndex==3){
             $('#dianBox li').eq(0).addClass('current').siblings().removeClass('current');
        }else{
             $('#dianBox li').eq(imgIndex).addClass('current').siblings().removeClass('current');
        }
        
    })
    //点击左箭头事件
    $('#arrowLeft').click(function(){
     imgIndex--;
        if(imgIndex<0){
            $('#imgBox').css('left','-4047px');
            imgIndex=2;
        }
        var move = -imgIndex*$('.player').width();
        $('#imgBox').stop().animate({left:move},500);

        $('#dianBox li').eq(imgIndex).addClass('current').siblings().removeClass('current');
    })
    //点击小圆点添加事件
    $('#dianBox li').click(function(){
         $(this).addClass('current').siblings().removeClass('current');
         imgIndex = $(this).index();

         var move = -imgIndex*$('.player').width();
         $('#imgBox').stop().animate({left:move},500);
    })

    //定时器切换
    var timer = setInterval(function(){
     $('#arrowRight').click();
    },2000);
    $('.player').hover(function(){
         //停止定时器
         clearInterval(timer);
    },function(){
         //重新开启定时器
         timer = setInterval(function(){
             $('#arrowRight').click();
         },2000);
    })
})

//tab菜单
$(function(){
    $('#tab-r').mouseover(function(){
        $('#submenu').addClass('show');
        $('#tab-r>i').addClass('i-arrpar').removeClass('i-arrbot');
    })
    $('#submenu').mouseover(function(){
                $(this).addClass('show');
                $('#tab-r>i').addClass('i-arrpar').removeClass('i-arrbot');
        }).mouseout(function(){
                $(this).removeClass('show');
                $('#tab-r>i').addClass('i-arrbot').removeClass('i-arrpar');
        })
        $('#ahead').mouseover(function(){
            $('#submenu').removeClass('show');
            $('#tab-r>i').addClass('i-arrbot').removeClass('i-arrpar');
    })
})

//固定导航栏
$(function () {
    //滚动条事件
    $(window).scroll(function () {
       //判断向上卷曲出去的距离是否大于等于 应用类样式top的div的高度
        if($(document).scrollTop() >= 629){
            //获取导航栏的元素 .nav 脱离文档流
            $(".nav").css("position","fixed").css("top",0);
            $(".player").css("marginTop",155);

        }else{
            $(".nav").css("position","static");
            $(".player").css("marginTop",0);
        }
    });
});
//返回顶部
$(function () {
    //滚动条事件
    $(window).scroll(function () {
       //判断向上卷曲出去的距离是否大于等于 应用类样式top的div的高度
        if($(document).scrollTop() >= 629){
            //获取导航栏的元素 .nav 脱离文档流
            $('.topnav').addClass('show-one')
        }else{
            $('.topnav').removeClass('show-one')
        }
    });
});