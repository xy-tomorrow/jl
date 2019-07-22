/**
 * Created by yyz on 2017-05-08.
 */

//获取事件对象的兼容方式
var eventUtils = {
    getEvent: function (event) {
        return event || window.event;
    },
    //鼠标在页面上水平坐标的兼容
    getPageX: function (event) {
        var event = eventUtils.getEvent (event);
        return event.pageX || document.documentElement.scrollLeft;
    },
    //鼠标在页面上竖直坐标的兼容
    getPageY:function(event){
        var event = eventUtils.getEvent (event);
        return  event.pageY || document.documentElement.scrollTop;
    },
    //阻止冒泡
    stopPropagation: function (event){
        var event = eventUtils.getEvent (event);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },
    //获取事件的目标
    getTarget : function (event) {
        var event = eventUtils.getEvent (event);
        return event.target || event.srcElement;
    },
}


//注册函数兼容性
function addEvent(element,eventName,fn){
    if(element.addEventListener){
        element.addEventListener(eventName,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+eventName,fn);
    }else{
        element["on"+eventName] = fn;
    }
}

//清除函数的兼容函数
function removeEvent(element,eventName,fn){
    if(element.removeEventListener){
        element.removeEventListener(eventName,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+eventName,fn);
    }else {
        element["on"+eventName] = null;
    }
}


//获取任意属性
var getStyle = function(obj,attr){
    if(window.getComputedStyle(obj,null)[attr]){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

//获取可视区宽高
function client(){
    return{
        clientWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

//封装一个创建方法兼容性函数
//定义一个函数(要添加事件的元素,要添加的方法名,事件处理函数)
function addEvent(element,eventname,listener){
    if(element.addEventListener){
        element.addEventListener(eventname,listener,false)
    }else if(element.attachEvent){
        element.attachEvent("on"+eventname,listener)
    }else{
        element["on"+eventname]= listener;
    }
}

//实现任意对象的多个属性的缓动
function animate(obj,json,fn){
    var getStyle = function(obj,attr){
        if(window.getComputedStyle(obj,null)[attr]){
            return window.getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
    //清除上一次的浮动
    clearInterval(obj.timer);
    //添加定时器
    obj.timer = setInterval(function() {
        var flag = true;
        //for in循环遍历所有属性
        for (var k in json) { //k:json[k]  键:键值
            //判断是否为opacity
            if (k === "opacity") {
                //获取原始值
                var leader = getStyle(obj, k) * 100;
                //要到达的值
                var target = json[k] * 100;
                //每次移动的距离
                step = (target - leader) / 10;
                //判断取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次执行定时器改变每一项的距离
                leader = leader + step;
                obj.style[k] = leader / 100;
                //判断是否每个属性都到达要到的值
            }
            //判断zIndex指数,可以直接变成要改变的
            else if (k === "zIndex") {
                obj.style[k] = json[k];
            } else {
                //获取原始值
                var leader = parseInt(getStyle(obj, k)) || 0;
                //要到达的值
                var target = json[k];
                //每次移动的距离
                step = (target - leader) / 10;
                //判断取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次执行定时器改变每一项的距离
                leader = leader + step;
                obj.style[k] = leader + "px";
                //判断是否每个属性都到达要到的值
                if (leader !== target) {
                    flag = false;
                }
            }


        }
        if (flag) {
        clearInterval(obj.timer);
        //fn存在的话就返回 fn()
        fn && fn();
        }
    },15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//获取鼠标在页面中的坐标
document.onclick = function (event){
    var event =  event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY  ||event.clientY +document.documentElement.scrollTop
}