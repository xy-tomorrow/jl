/**
 * Created by ma on 2017/5/12.
 */
window.onload = function () {
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var span4 = document.getElementById("span4");
    var span5 = document.getElementById("span5");
    var span6 = document.getElementById("span6");
    var span7 = document.getElementById("span7");
    var span8 = document.getElementById("span8");
    var span9 = document.getElementById("span9");
    var span0 = document.getElementById("span0");
    var timer = null;
    var timer1 = null;
    /*泡泡动画*/
    animate1(span1, {"top": 50, "left": 600, "opacity": 0.6}, function () {
        animate1(span1, {"top": -100, "left": 400, "opacity": 0})
    });
    animate1(span2, {"top": 100, "left": 470, "opacity": 0.4}, function () {
        animate1(span2, {"top": 0, "left": 0, "opacity": 0})
    });
    animate1(span3, {"top": 200, "left": 410, "opacity": 0.8}, function () {
        animate1(span3, {"top": 200, "left": -50, "opacity": 0})
    });
    animate1(span4, {"top": 330, "left": 470, "opacity": 0.6}, function () {
        animate1(span4, {"top": 450, "left": 50, "opacity": 0})
    });
    animate1(span5, {"top": 450, "left": 500, "opacity": 0.4}, function () {
        animate1(span5, {"top": 600, "left": 100, "opacity": 0})
    });
    animate1(span6, {"top": 50, "left": 780, "opacity": 0.8}, function () {
        animate1(span6, {"top": -50, "left": 900, "opacity": 0})
    });
    animate1(span7, {"top": 150, "left": 850, "opacity": 0.6}, function () {
        animate1(span7, {"top": 0, "left": 1300, "opacity": 0})
    });
    animate1(span8, {"top": 300, "left": 910, "opacity": 0.4}, function () {
        animate1(span8, {"top": 250, "left": 1400, "opacity": 0})
    });
    animate1(span9, {"top": 400, "left": 850, "opacity": 0.8}, function () {
        animate1(span9, {"top": 500, "left": 1300, "opacity": 0})
    });
    animate1(span0, {"top": 500, "left": 770, "opacity": 0.6}, function () {
        animate1(span0, {"top": 600, "left": 1300, "opacity": 0})
    });
    /*人物定位*/
    var p01 = document.getElementById("p01");
    var p02 = document.getElementById("p02");
    var p03 = document.getElementById("p03");
    var p04 = document.getElementById("p04");
    var p05 = document.getElementById("p05");
    var p06 = document.getElementById("p06");
    var p07 = document.getElementById("p07");
    /*图一动画*/
    timer = setTimeout(function () {
        animate1(p01, {"left": -110, "top": 230, "opacity": 1});
        animate1(p02, {"left": 320, "top": 260, "opacity": 1});
    }, 200)
    timer = setTimeout(function () {
        animate1(p03, {"left": -160, "top": 380, "opacity": 1});
        animate1(p04, {"left": 430, "top": 424, "opacity": 1});
    }, 800)
    timer = setTimeout(function () {
        animate1(p05, {"left": -30, "top": 230, "opacity": 1});
        animate1(p06, {"left": 266, "top": 230, "opacity": 1});
    }, 1300)
    timer = setTimeout(function () {
        animate1(p07, {"left": 140, "top": 260, "opacity": 1});
    }, 1800)
    /*图二动画*/
    var flyMoon = document.getElementById("flyMoon");
    var hill = document.getElementById("hill");
    var fist = document.getElementById("fist");
    var grandfather = document.getElementById("grandfather");
    var newPlay1 = document.getElementById("newPlay1");
    var fourPer = document.getElementById("fourPer");
    var withyou1 = document.getElementById("withyou1");
    var know1 = document.getElementById("know1");
    animate1(newPlay1, {"opacity": 1});
    animate1(fourPer, {"opacity": 1});
    animate1(withyou1, {"opacity": 1});
    animate1(know1, {"opacity": 1});
    timer = setInterval(function () {
        animate(flyMoon, {"left": 150, "top": 300, "opacity": 1});
    }, 200);
    timer = setInterval(function () {
        animate(hill, {"left": 800, "top": 230, "opacity": 1});
    }, 600);
    timer = setInterval(function () {
        animate(fist, {"left": 550, "top": 380, "opacity": 1});
    }, 1000);
    timer = setInterval(function () {
        animate(grandfather, {"left": 310, "top": 440, "opacity": 1});
    }, 1400);
    /*轮播图*/
    var pic0303 = document.getElementById("pic0303");
    var ul = pic0303.children[0];
    var ullis = ul.children;
    var img6 = ullis[0].cloneNode(true);
    ul.appendChild(img6);
    var imgWid = pic0303.offsetWidth;
    var pic = 0;
    var span = document.getElementById("span");
    var mask = document.getElementById("mask");
    console.log(imgWid);
    timer1 = setInterval(function () {
        if (pic === ullis.length - 1) {
            pic = 0;
            ul.style.left = 0;
        }
        pic++;
        balAnimate(ul, -pic * imgWid);
    }, 1500);

    /*图片随鼠标晃动*/
    var pic0302 = document.getElementById("pic0302");
    var pic0304 = document.getElementById("pic0304");
    var iMax = 6;
    pic0302.startX = parseInt(getStyle(pic0302, 'left'));
    pic0304.startX = parseInt(getStyle(pic0304, 'left'));
    document.body.onmousemove = function (ev) {
        ev = ev || window.event;
        var iX = ev.clientX - (document.body.offsetLeft + this.offsetWidth / 2);
        var iZindex = getStyle(pic0302, 'zIndex');
        var iDisl = -parseInt(iX / iMax * (iMax - iZindex) / 5);
        pic0302.style.left = pic0302.startX + iDisl + 'px';
        var iZindex1 = getStyle(pic0304, 'zIndex');
        var iDisl1 = -parseInt(iX / iMax * (iMax - iZindex1) / 5);
        pic0304.style.left = pic0304.startX + iDisl1 + 'px';
    }
    /*点击查看大图*/
    var d_tu1 = document.getElementById("d_tu1");
    var d_tu2 = document.getElementById("d_tu2");
    var d_tu3 = document.getElementById("d_tu3");
    var d_tu7 = document.getElementById("d_tu7");
    var mask1 = document.getElementById("mask1");
    var mask2 = document.getElementById("mask2");
    var mask3 = document.getElementById("mask3");
    var mask4 = document.getElementById("mask4");
    var mask5 = document.getElementById("mask5");
    var closePic1 = document.getElementById("closePic1");
    var closePic2 = document.getElementById("closePic2");
    var closePic3 = document.getElementById("closePic3");
    var closePic4 = document.getElementById("closePic4");
    var closePic5 = document.getElementById("closePic5");
    d_tu1.onclick = function () {
        mask2.style.display = "block";
        closePic2.style.display = "block";
    }
    d_tu2.onclick = function () {
        mask3.style.display = "block";
        closePic3.style.display = "block";
    }
    d_tu3.onclick = function () {
        mask4.style.display = "block";
        closePic4.style.display = "block";
    }
    d_tu7.onclick = function () {
        mask5.style.display = "block";
        closePic5.style.display = "block";
    }
    closePic1.onclick = function () {
        mask1.style.display = "none";
        closePic1.style.display = "none";
    };
    closePic2.onclick = function () {
        mask2.style.display = "none";
        closePic2.style.display = "none";
    };
    closePic3.onclick = function () {
        mask3.style.display = "none";
        closePic3.style.display = "none";
    };
    closePic4.onclick = function () {
        mask4.style.display = "none";
        closePic4.style.display = "none";
    };
    closePic5.onclick = function () {
        mask5.style.display = "none";
        closePic5.style.display = "none";
    };
    /*锚点缓动跳转*/
    var anchor1 = document.getElementById("anchor1");
    var anchor2 = document.getElementById("anchor2");
    var anchor3 = document.getElementById("anchor3");
    var anchor4 = document.getElementById("anchor4");
    anchor1.onclick = function () {
        var target = 100;
        clearInterval(timer);
        timer = setInterval(function () {
            var leder = Math.ceil(scroll().top);
            var step = (target - leder) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leder = leder + step;
            window.scrollTo(0, leder);
            if (leder === target) {
                clearInterval(timer);
                console.log("已清除")
            }
        }, 34);
    };
    anchor2.onclick = function () {
        var target = 1080;
        clearInterval(timer);
        timer = setInterval(function () {
            var leder = Math.ceil(scroll().top);
            var step = (target - leder) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leder = leder + step;
            window.scrollTo(0, leder);
            if (leder === target) {
                clearInterval(timer);
                console.log("已清除")
            }
        }, 34);
    };
    anchor3.onclick = function () {
        var target = 1900;
        clearInterval(timer);
        timer = setInterval(function () {
            var leder = Math.ceil(scroll().top);
            var step = (target - leder) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leder = leder + step;
            window.scrollTo(0, leder);
            if (leder === target) {
                clearInterval(timer);
                console.log("已清除")
            }
        }, 34);
    };
    anchor4.onclick = function () {
        var target = 2790;
        clearInterval(timer);
        timer = setInterval(function () {
            var leder = Math.ceil(scroll().top);
            var step = (target - leder) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leder = leder + step;
            window.scrollTo(0, leder);
            if (leder === target) {
                clearInterval(timer);
                console.log("已清除")
            }
        }, 34);
    };
    /*手风琴*/
    var picUl=document.getElementById("picUl");
    var lis=picUl.children;
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            for(var j=0;j<lis.length;j++){
                animate(lis[j],{"width":100});
            }
            animate(this,{"width":500});
        };
    };
    picUl.onmouseout=function(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],{"width":200});
        }
    }
    /*底部提示图*/
    var hint = document.getElementById("hint");
    var maskPic = document.getElementById("maskPic");
    var index = 0;
    window.onscroll = function () {
        if (scroll().top >= 2910) {
            hint.style.display = "block";
            maskPic.style.display = "block";
            animate(hint, {"opacity": 1})
            animate(maskPic, {"opacity": 0.6})
        } else {
            animate(hint, {"opacity": 0})
            animate(maskPic, {"opacity": 0})
            hint.style.display = "none";
            maskPic.style.display = "none";
        }
    }
    console.log(index);
    /*获取屏幕卷曲的高度*/
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
    }

    /*匀速动画函数*/
    function balAnimate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 30;
            step = (target - leader) > 0 ? step : -step;
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
            }
        }, 15);
    };
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }
};





