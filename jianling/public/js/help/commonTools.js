/**
 * Created by Administrator on 2017/5/10 0010.
 */
function animateAvg(obj, json, fn,time) {
    function getStyle(obj, arrt) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[arrt]
        }
        else {
            return obj.currentStyle[attr];
        }
    }
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function () {
        for (k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100
            }
            else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            }
            else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k]
                var step = 1
                step = target-leader>0?step:-step
                if(Math.abs(target-leader)>Math.abs(step)){
                    leader = leader + step;
                    obj.style[k] = leader+"px"
                }
                else{
                    clearInterval(obj.timeId)
                    obj.style[k] = target+"px";
                    if (fn) {
                        fn()
                    }
                }
            }
        }
    }, time)
}


/**
 * 封装匀速动画函数
 * @param obj
 * @param target
 */
function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var leader = obj.offsetLeft;
        var step = 40;
        step=leader>target?-step:step;
        if(Math.abs(target-leader)>Math.abs(step)){
            leader =leader +step;
            obj.style.left = leader+"px";
        }else{
            obj.style.left = target+"px";
            clearInterval(obj.timer);
        }
    },15)
}
/**
 * 封装获取任意对象 任意属性 缓动动画函数
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj,json, fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var k in json){
            if(k==="opacity"){
                var leader = getStyle(obj,k)*100;
                var target = json[k]*100;
                var step = (target - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader +step;
                obj.style[k]= leader/100;
            }else if(k==="zIndex"){
                obj.style[k]= json[k];
            }else{
                var leader = parseInt(getStyle(obj,k))||0;
                var target = json[k];
                var step = (target - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader +step;
                obj.style[k]= leader + "px";
            }
            if(leader !==target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },15)
}
/**
 * 封装获取计算后样式函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr]
    }
}

/**
 * 封装响应式布局函数
 */
function responsive(){
    if(client().width>960){
        document.body.style.backgroundColor = "red";
        document.body.innerHTML = "computer";
    }else if(client().width>640){
        document.body.style.backgroundColor = "green";
        document.body.innerHTML = "tablet";
    }else {
        document.body.style.backgroundColor = "yellow";
        document.body.innerHTML = "mobile";
    }
}
/**
 * 封装获取可视区宽高函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width :window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height :window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    };
}

/**
 * 封装获取页面被卷去的头部高度和左侧宽度的 兼容函数
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


//图片变大变小
function getSize(idd, dushu) {
    var width = idd.offsetWidth;                            // 初始化img宽度
    var target = width +15;
    var height = idd.offsetHeight;                          // 初始化img高度
    var marginLeft = 0;                               // 初始化img左外边距
    var marginTop = 0;                                // 初始化img上外边距
    var overTimer = null;                             // 初始化定时器，用于鼠标接触时
    var outTimer = null;                              // 初始化定时器，用于鼠标离开时
    var leader1 = 0;
    var leader2 = 220;
    idd.onmouseover = function () {                     // 鼠标接触img
        clearInterval(outTimer);                      // 清除鼠标离开的定时器
        overTimer = setInterval(function () {           // 设置鼠标接触触发的定时器，时距15毫秒
            var pao = (dushu - leader1) / 30;
            pao = pao > 0 ? Math.ceil(pao) : Math.floor(pao);
            leader1 = pao + leader1;
            var pao1 = (182 - leader2) / 5;
            pao1 = pao1 > 0 ? Math.ceil(pao1) : Math.floor(pao1);
            leader2 = pao1 + leader2;
            width = width + 1;                        // 宽度+2
            height = height + 1;                      // 高度+1
            marginLeft = marginLeft - 1;              // 左外边距-1
            marginTop = marginTop - 0.5;              // 上外边距-0.5
            idd.style.width = width + 'px';           // 设置img宽度
            idd.style.height = height + 'px';         // 设置img高度
            idd.style.marginLeft = marginLeft + 'px'; // 设置img左外边距
            idd.style.marginTop = marginTop + 'px';   // 设置img上外边距
            idd.nextElementSibling.style.transform = "rotate(" + leader1 + "deg)";
            idd.nextElementSibling.nextElementSibling.nextElementSibling.style.top = leader2 + "px";
            if (width >= target ) {// 如果img宽度大于某值
                clearInterval(overTimer);             // 清除定时器
            }
            ;
        }, 30);
    };

    idd.onmouseout = function () {                      // 鼠标离开img
        console.log(leader2)
        clearInterval(overTimer);                     // 清除鼠标接触的定时器
        outTimer = setInterval(function () {// 设置鼠标离开触发的定时器，时距15毫秒
            width = width - 1;                            // 宽度-2
            height = height - 1;                          // 高度-1
            marginLeft = marginLeft + 1;                  // 左外边距+1
            marginTop = marginTop + 0.5;                  // 上外边距+0.5
            var pao = (-dushu - leader1) / 30;
            pao = pao > 0 ? Math.ceil(pao) : Math.floor(pao);
            leader1 = pao + leader1;
            var pao1 = (220 - leader2) / 5;
            pao1 = pao1 > 0 ? Math.ceil(pao1) : Math.floor(pao1);
            leader2 = pao1 + leader2;
            console.log(leader2);
            idd.style.width = width + 'px';               // 设置img宽度
            idd.style.height = height + 'px';             // 设置img高度
            idd.style.marginLeft = marginLeft + 'px';     // 设置img左外边距
            idd.style.marginTop = marginTop + 'px';       // 设置img上外边距
            idd.nextElementSibling.style.transform = "rotate(" + leader1 + "deg)";
            idd.nextElementSibling.nextElementSibling.nextElementSibling.style.top = leader2 + "px";
            if (width <= target - 15) {                           // 如果img宽度小于某值
                clearInterval(outTimer);// 清除定时器
                leader1 = 0
            }
            ;
        }, 30);
    };
}
