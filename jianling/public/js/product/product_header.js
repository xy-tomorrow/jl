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