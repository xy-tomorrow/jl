/**
 * Created by Administrator on 2017/5/12 0012.
 */
window.onload = function(){

var top = document.getElementById("top");
var header = document.getElementById("header");
    window.onscroll = function(){
        if(scroll().top>0){
            top.className = "top fixed"
            header.style.paddingTop =top.offsetHeight;
        }
    }
    var pict =document.getElementById("pict")
    var picul =document.getElementById("picul");
    var ol = picul.nextElementSibling;
    var lis = picul.children;
   var imgwidth = pict.offsetWidth;
    var timer = null;
    //需求 实现一个 完整的轮播图
    //找人


    //箭头
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    //1.动态生成结构
    //1.1根据图片数量动态生成按钮
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;//所有的按钮
    olLis[0].className = "current";
    //1.2克隆第一张广告 放到最后
    var firstImg = lis[0].cloneNode(true);
    picul.appendChild(firstImg);
    //2.鼠标经过按钮
    //鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //排他
            //干掉所有人
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //留下我自己
            this.className = "current";
            //以动画的形式把ul移动到指定的位置
            //目标 和 按钮索引有关 和 图片宽度有关 而且是负数
            var target = -this.index * imgwidth;
            animate(picul, target);
            //还要把几个索引统一
            pic = this.index;
            square = this.index;
        };
    }
    //3.鼠标点击箭头
    //3.1鼠标经过盒子 显示箭头 鼠标离开盒子 隐藏箭头
    pict.onmouseover = function () {
        arr.style.display = "block";//显示箭头
        clearInterval(timer);//停止自动播放
    };
    pict.onmouseout = function () {
        arr.style.display = "none";//隐藏箭头
        timer = setInterval(right.onclick, 1000);//从新自动播放
    };
    //3.2点击右箭头 以动画的形式把ul移动到指定的位置
    var pic = 0;//记录当前正在显示的图片的索引
    var square = 0;//记录当前正在亮起的按钮的索引
    right.onclick = function () {
        //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
        if (pic === lis.length - 1) {
            picul.style.left = 0 + "px";
            pic = 0;//索引也要归零
        }
        pic++;//计算出将要显示的图片的索引
        //目标 和pic有关 和 图片宽度有关 而且是负数
        var target = -pic * imgwidth;
        animate(picul, target);
        //按钮也要跟着走
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";
    };
    left.onclick = function () {
        //先判断 如果是第一个图片 先让ul瞬间跳到最后的位置 然后索引也要到最后
        if (pic === 0) {
            picul.style.left = -(lis.length - 1) * imgwidth + "px";
            pic = lis.length - 1;//索引也要归零
        }
        pic--;//计算出将要显示的图片的索引
        //目标 和pic有关 和 图片宽度有关 而且是负数
        var target = -pic * imgwidth;
        animate(picul, target);
        //按钮也要跟着走
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";
    };

    timer = setInterval(right.onclick, 1000);//自动播放

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 20;
            step = leader < target ? step : -step;//step有了正负
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";//手动放到终点
                clearInterval(obj.timer);
            }
        }, 15);
    }


    var sen_bord = document.getElementById("sen_bord")


    setInterval(function () {
        if (parseInt(getStyle(sen_bord, "top")) === 0) {
            animateAvg(sen_bord, {top: 105}, null, 15)
            console.log(getStyle(sen_bord, "top"));
        }
        else if (parseInt(getStyle(sen_bord, "top")) === 105) {
            animateAvg(sen_bord, {top: 0}, null, 15)
        }
    }, 100)




}



