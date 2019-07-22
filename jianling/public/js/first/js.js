/**
 * Created by Administrator on 2017/5/12.
 */
window.onload = function () {
    //固定导航栏
    var top = document.getElementById("top");
    var logo = document.getElementById("logo");
    var banben = document.getElementById("banben")
    window.onscroll = function () {
        if (scroll().top > top.offsetHeight) {
            logo.className = "logo fixed clearfixed";
            banben.style.paddingTop = logo.offsetHeight + "px";
        } else {
            logo.className = "logo";
            banben.style.paddingTop = 0;
        }
        function scroll() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
            };
        }
    }
    //轮播图部分
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ulLis = ul.children;
    var imgWidth = screen.offsetWidth;
    var timer1 = null;
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            this.className = "current";
            var target = -this.index * imgWidth;
            animate(ul, target);
            pic = this.index;
            square = this.index;
        };
    }
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer1);
    };
    box.onmouseout = function () {
        arr.style.display = "none";
        timer1 = setInterval(right.onclick, 1000);
    };
    var pic = 0;
    var square = 0;
    right.onclick = function () {
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    };
    left.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    };
    timer1 = setInterval(right.onclick, 1000);
    function animate(obj, target) {
        clearInterval(obj.timer1);
        obj.timer1 = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 30;
            step = leader < target ? step : -step;
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer1);
            }
        }, 15);
    }
}
//转圈圈
var icon = document.getElementById("icon");
var icon_in = document.getElementById("icon_in")
var timers = null;
function clock() {
    var d = new Date();
    var ms = d.getMilliseconds()
    var s = d.getSeconds() + ms / 1000;
    icon.style.transform = "rotate(" + (s * 180) + "deg)";
    icon_in.style.transform = "rotate(" + (-s * 180) + "deg)";
}
icon.onmouseover = function () {
    timers = setInterval(clock, 10);
}
icon.onmouseout = function () {
    clearInterval(timers)
}

//显示精神
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var lis = wrap.getElementsByTagName("li");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    icon.onclick = function(){
        mask.style.display = "block";
        wrap.style.display = "block";
    }
    mask.onclick = function() {
            mask.style.display = "none";
            wrap.style.display = "none";
    }
    wrap.onmouseover = function(){
        animate(arrow,{"opacity":1})
    }
    wrap.onmouseout = function(){
        animate(arrow,{"opacity":0})
    }
var config = [
    {
        "width": 400,
        "top": 20,
        "left": 50,
        "opacity": 0.2,
        "zIndex": 2
    },//0
    {
        "width": 400,
        "top": 70,
        "left": 200,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 600,
        "top": 100,
        "left": 300,
        "opacity": 1,
        "zIndex": 4
    },//2
    {
        width: 400,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        "width": 400,
        "top": 20,
        "left": 750,
        "opacity": 0.2,
        "zIndex": 2
    }//4
];

function fn1(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function(){
                flag = true;
            });
        }
    }
    fn1()
    arrRight.onclick = function(){
        if(flag){
            flag = false;
            config.push(config.shift());
            fn1();
        }
    }
    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            fn1()
        }
    }
var kouhao = document.getElementById("kouhao");
var spans = kouhao.getElementsByTagName("span");
var btn = document.getElementById("btn");
var duiwu = document.getElementById("duiwu");
function fei(){
    if(duiwu.offsetLeft<700){
        animate2( duiwu,{"left":1750,"opacity":1})
    }else{
        duiwu.style.left = -1000+"px";
    }
}
fei()
var kouhao = document.getElementById("kouhao");
var spans = kouhao.getElementsByTagName("li");
function luo(){
    for(var i=0;i<spans.length;i++){
        animate(spans[0],{"opacity":1,"fontSize":40,"left":"100"},function(){
            animate(spans[1],{"opacity":1,"fontSize":40,"left":"200"},function(){
                animate(spans[2],{"opacity":1,"fontSize":40,"left":"300"},function(){
                    animate(spans[3],{"opacity":1,"fontSize":40,"left":"400"},function(){
                        animate(spans[4],{"opacity":1,"fontSize":40,"left":"500"},function(){
                            animate(spans[5],{"opacity":1,"fontSize":40,"left":"600"},function(){
                                animate(spans[6],{"opacity":1,"fontSize":40,"left":"700"},function(){
                                    animate(spans[7],{"opacity":1,"fontSize":40,"left":"800"})
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
luo()
var duiming = document.getElementById("duiming")
function ming (){
   animate(duiming,{"fontSize":50,"opacity":1})
}
ming()

var oDiv = document.getElementById("chengyuan");
var aA = oDiv.getElementsByTagName("li");
for(var i=0;i<aA.length;i++)
{
    aA[i].time=null;
    initialize(aA[i]);
}
setInterval(starmove,24);
function starmove()
{
    for(var i=0;i<aA.length;i++)
    {
        if(aA[i].pause)
        {
            domove(aA[i]);
        }
    }
}
function domove(obj)
{
    if(obj.offsetTop<=-obj.offsetHeight)
    {
        obj.style.top=1632+"px";
        initialize(obj);
    }
    else
    {
        obj.style.top=obj.offsetTop-obj.ispeed+"px";
    }
}
function initialize(obj)
{
    var iLeft=parseInt(Math.random()*oDiv.offsetWidth);
    var scale=Math.random()*1+1;
    var iTimer=parseInt(Math.random()*1500);
    obj.pause=0;

    obj.style.fontSize=12*scale+'px';

    if((iLeft-obj.offsetWidth)>0)
    {
        obj.style.left=iLeft-obj.offsetWidth+"px";
    }
    else
    {
        obj.style.left=iLeft+"px";
    }
    clearTimeout(obj.time);
    obj.time=setTimeout(function(){
        obj.pause=1;
    },iTimer);
    obj.ispeed=Math.ceil(Math.random()*4)+1;

};

//for(var i=0;i<lis.length;i++){
//    starMove1(lis[0]);
//    starMove1(lis[2]);
//    starMove1(lis[3]);
//    starMove1(lis[4]);
//    starMove1(lis[5]);
//    starMove1(lis[6]);
//    starMove1(lis[7]);
//}
//var timerq = null;
//function starMove1(obj){
//    clearInterval(timerq);
//    obj.timerq = setInterval(function(){
//        obj.style.left=x+"px";
//        var iSpeed = -10;
//        if(sun.offsetTop<-400){
//            obj.style.top = 1500+"px"
//        }else{
//            obj.style.top= obj.offsetTop+iSpeed+"px";
//        }
//    },50)
//}
