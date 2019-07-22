/**
 * Created by yyz on 2017-05-08.
 */

//��ȡ�¼�����ļ��ݷ�ʽ
var eventUtils = {
    getEvent: function (event) {
        return event || window.event;
    },
    //�����ҳ����ˮƽ����ļ���
    getPageX: function (event) {
        var event = eventUtils.getEvent (event);
        return event.pageX || document.documentElement.scrollLeft;
    },
    //�����ҳ������ֱ����ļ���
    getPageY:function(event){
        var event = eventUtils.getEvent (event);
        return  event.pageY || document.documentElement.scrollTop;
    },
    //��ֹð��
    stopPropagation: function (event){
        var event = eventUtils.getEvent (event);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },
    //��ȡ�¼���Ŀ��
    getTarget : function (event) {
        var event = eventUtils.getEvent (event);
        return event.target || event.srcElement;
    },
}


//ע�ắ��������
function addEvent(element,eventName,fn){
    if(element.addEventListener){
        element.addEventListener(eventName,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+eventName,fn);
    }else{
        element["on"+eventName] = fn;
    }
}

//��������ļ��ݺ���
function removeEvent(element,eventName,fn){
    if(element.removeEventListener){
        element.removeEventListener(eventName,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+eventName,fn);
    }else {
        element["on"+eventName] = null;
    }
}


//��ȡ��������
var getStyle = function(obj,attr){
    if(window.getComputedStyle(obj,null)[attr]){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

//��ȡ���������
function client(){
    return{
        clientWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

//��װһ���������������Ժ���
//����һ������(Ҫ����¼���Ԫ��,Ҫ��ӵķ�����,�¼�������)
function addEvent(element,eventname,listener){
    if(element.addEventListener){
        element.addEventListener(eventname,listener,false)
    }else if(element.attachEvent){
        element.attachEvent("on"+eventname,listener)
    }else{
        element["on"+eventname]= listener;
    }
}

//ʵ���������Ķ�����ԵĻ���
function animate(obj,json,fn){
    var getStyle = function(obj,attr){
        if(window.getComputedStyle(obj,null)[attr]){
            return window.getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
    //�����һ�εĸ���
    clearInterval(obj.timer);
    //��Ӷ�ʱ��
    obj.timer = setInterval(function() {
        var flag = true;
        //for inѭ��������������
        for (var k in json) { //k:json[k]  ��:��ֵ
            //�ж��Ƿ�Ϊopacity
            if (k === "opacity") {
                //��ȡԭʼֵ
                var leader = getStyle(obj, k) * 100;
                //Ҫ�����ֵ
                var target = json[k] * 100;
                //ÿ���ƶ��ľ���
                step = (target - leader) / 10;
                //�ж�ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //ÿ��ִ�ж�ʱ���ı�ÿһ��ľ���
                leader = leader + step;
                obj.style[k] = leader / 100;
                //�ж��Ƿ�ÿ�����Զ�����Ҫ����ֵ
            }
            //�ж�zIndexָ��,����ֱ�ӱ��Ҫ�ı��
            else if (k === "zIndex") {
                obj.style[k] = json[k];
            } else {
                //��ȡԭʼֵ
                var leader = parseInt(getStyle(obj, k)) || 0;
                //Ҫ�����ֵ
                var target = json[k];
                //ÿ���ƶ��ľ���
                step = (target - leader) / 10;
                //�ж�ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //ÿ��ִ�ж�ʱ���ı�ÿһ��ľ���
                leader = leader + step;
                obj.style[k] = leader + "px";
                //�ж��Ƿ�ÿ�����Զ�����Ҫ����ֵ
                if (leader !== target) {
                    flag = false;
                }
            }


        }
        if (flag) {
        clearInterval(obj.timer);
        //fn���ڵĻ��ͷ��� fn()
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

//��ȡ�����ҳ���е�����
document.onclick = function (event){
    var event =  event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY  ||event.clientY +document.documentElement.scrollTop
}