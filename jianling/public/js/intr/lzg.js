/*$(function(){

    console.log($("#screen").width);
})*/

window.onload= function () {
    /**
     * Created by yyz on 2017-05-13.
     */

//�ֲ�ͼ
     var timer3 = null;
    //���� ʵ��һ�� �������ֲ�ͼ
    //����
    var box = document.getElementById("wrapbox");
    var screen = document.getElementById("screen");
    var ul = screen.children[0];
    var ulLis = ul.children;//���еĹ��
    var imgWidth = screen.offsetWidth;
    console.log(screen.offsetWidth);
    //���� ʵ��һ�� �������ֲ�ͼ
    var arr = document.getElementById("sp");
    var left = document.getElementById("wrapl");
    var right = document.getElementById("wrapr");
    //1.��̬���ɽṹ
    //1.1����ͼƬ������̬���ɰ�ť
    /*for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;//���еİ�ť
    olLis[0].className = "current";*/
    //1.2��¡��һ�Ź�� �ŵ����
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);
    //2.��꾭����ť
    //��꾭����ť ��ť���� �Զ�������ʽ��ul�ƶ���ָ����λ��
/*
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //����
            //�ɵ�������
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //�������Լ�
            this.className = "current";
            //�Զ�������ʽ��ul�ƶ���ָ����λ��
            //Ŀ�� �� ��ť�����й� �� ͼƬ�����й� �����Ǹ���
            var target = -this.index * imgWidth;
            animate(ul, target);
        };
    }
*/
    //3.�������ͷ
    //3.1��꾭������ ��ʾ��ͷ ����뿪���� ���ؼ�ͷ
    box.onmouseover = function () {
        arr.style.display = "block";
    };
    box.onmouseout = function () {
        arr.style.display = "none";
    };
    var pic = 0;//��¼��ǰ������ʾ��ͼƬ������
    var square = 0;//��¼��ǰ��������İ�ť������
    right.onclick = function () {
         console.log(456);
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;//����ҲҪ����
        }
        pic++;//�������Ҫ��ʾ��ͼƬ������
        console.log(pic);
        console.log(imgWidth);
        var target = -pic * imgWidth;
        animate(ul, target);}
     /*   if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";
    };*/
    left.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;//����ҲҪ����
        }
        pic--;//�������Ҫ��ʾ��ͼƬ������
        var target = -pic * imgWidth;
        animate(ul, target);}
      /*  if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";
    };
*/
    /*setInterval(right.onclick, 1000);*///�Զ�����

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 30;
            step = leader < target ? step : -step;//step��������
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";//�ֶ��ŵ��յ�
                clearInterval(obj.timer);
            }
        }, 15);
    }




    //��һ���б�
    var first = document.getElementById("first");
//����
    var main = document.getElementById("main");
//�ڰ��б�
    var heian = document.getElementById("heian");
    var heians = heian.children;

//��һ�������Ǳ���
    var mains = main.children;
    //��һ���б���
    var lis = first.children;
    var jia1 =mains[1].children[2];
    var jia2=mains[1].children[3];
    jia1.onmouseover = function(){
        console.log(11);
        this.children[0].src = "././img/intr/zb_03.png";
        clearInterval(timer1);
        clearInterval(timer2);
    }
    jia1.onmouseout =function(){
        this.children[0].src = "././img/intr/jia_07.png";
        small1(jia1);

    }
    jia2.onmouseover = function(){
        this.children[0].src = "././img/intr/zb_03.png";
        clearInterval(timer3);
        clearInterval(timer4);
    }
    jia2.onmouseout =function(){
        this.children[0].src = "././img/intr/jia_07.png";
        small2(jia2);
    }
    //ѭ��������ÿ���б������ӵ���¼�
    for(var i=0;i<lis.length;i++){
        //���ӱ�����¼i
        lis[i].num = i;
        //�Ӻ�
        //�б�����¼�
        lis[i].onclick=function(){
            //����
            for(var i=0;i<lis.length;i++) {
                lis[i].className="";
                lis[i].children[0].src ="././img/intr/"+0+i+".png";
            }
            this.className="lis";
            this.children[0].src ="././img/intr/"+this.num+".png";
            //��ǰ������ɫ�ı�,ͼƬ�ı�,�߿���ɫ�ı�
            //���ʱ��Ӧ�ı�����ʾ
            //��һ��ʼ,��ȥ�����
            for(var i=1;i<mains.length;i++){
            mains[i].style.display="none";
            mains[this.num+1].style.display = "block";
            }
            jia1 =mains[this.num+1].children[2];
            jia2=mains[this.num+1].children[3];
            jia1.onmouseover = function(){
                console.log(11);
                this.children[0].src = "././img/intr/zb_03.png";
                clearInterval(timer1);
                clearInterval(timer2);
            }
            jia1.onmouseout =function(){
                this.children[0].src = "././img/intr/jia_07.png";
                small1(jia1);
            }
            jia2.onmouseover = function(){
                this.children[0].src = "././img/intr/zb_03.png";
                clearInterval(timer1);
                clearInterval(timer2);
            }
            jia2.onmouseout =function(){
                this.children[0].src = "././img/intr/jia_07.png";
                small1(jia2);
            }
            turn1(jia1,function(){
                turn2(jia1,function(){
                    console.log(23);
                    small1(jia1);
                })
            });
            turn1(jia2,function(){
                turn2(jia2,function(){
                    small1(jia1);
                })
            });

            jia1.onclick = function (event) {
                wrap.style.display = "block";
                wrapbox.style.display = "block";
                var event = event || window.event;
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
            };
            jia2.onclick = function (event) {
                wrap.style.display = "block";
                wrapbox.style.display = "block";
                var event = event || window.event;
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
            };
            wrap.onclick = function (event) {
                var event = event || window.event;
                var target = event.target || event.srcElement;
                if (target.id !== "wrapbox") {
                    console.log(11);
                    //��ȡ�¼�Ŀ�� �������show������ʧ
                    wrap.style.display = "none";
                    wrapbox.style.display = "none";
                }
            };

        }
    }

    //�Ӻ�������껬���¼�
   /* jia1.onmouseover = function(){
        this.children[0].src = "././img/intr/zb_03.png";


    }
    jia1.onmouseout =function(){
        this.children[0].src = "././img/intr/jia_07.png";
        turn();
    }
    jia2.onmouseover = function(){
        this.children[0].src = "././img/intr/zb_03.png";
        ii=1;
    }
    jia2.onmouseout =function(){
        this.children[0].src = "././img/intr/jia_07.png";
        turn();
    }*/

/*//�Ӻ�������껬���¼�
   */

//��껬������ĺ��Ӹ���
    for(var i=0;i<heians.length;i++) {
        heians[2].num =2;
        heians[i].onmouseover = function () {
            /* for (var i = 0; i < heians.length; i++) {
             heians[i].style.color = "#5B5B5B";
             }*/
            if(this.num !== 2){
                this.children[0].src = "././img/intr/ahxn_1.png";
                this.style.color = "#BEBEBE";
            }else{
                this.children[0].src = "././img/intr/gmx.png";
                this.style.color = "#BEBEBE";
            }

        }
        heians[i].onmouseout=function(){
            if(this.num !== 2){
                this.children[0].src = "././img/intr/ahxn_01.jpg";
                this.style.color = "#5B5B5B";
            }else{
                this.children[0].src = "././img/intr/gmx2.png";
                this.style.color = "#5B5B5B";
            }
        }
    }

///��װת��
    function turn1(obj,fn){
        var timer = null;
        clearInterval(timer);
        var  leader = 0;
        timer= setInterval(function(){
            if(leader<720){
                leader=leader+15;
                obj.style.transform="rotate("+leader+"deg)"
            }else{

                clearInterval(timer);
                fn();
            }

        },15)


    }
    //��װת�� ��ת
    function turn2(obj,fn){
        var timer = null;
        clearInterval(timer);
        var  leader =720;
        timer= setInterval(function(){
            if(leader>0){
                leader=leader-15;
                obj.style.transform="rotate("+leader+"deg)"
            }else{

                clearInterval(timer);
                fn();
            }

        },15)
    }
    var timer1 =null;
    function small1(obj){
        clearInterval(timer1);
        var  leader =1;
        timer1= setInterval(function(){
            if(leader>0.4){
                leader=leader-0.1;
                obj.style.transform="scale("+leader+")"
            }else{
                clearInterval(timer1);
                big1(obj);
            }

        },100)
    }
    var timer2 =null;
    function big1(obj){
        clearInterval(timer2);
        var  leader =0.4;
        timer2= setInterval(function(){
            if(leader<1){
                leader=leader+0.1;
                obj.style.transform="scale("+leader+")"
            }else{

                clearInterval(timer2);
                small1(obj);
            }

        },100)
    }
//���ú���
    turn1(jia1,function(){
        turn2(jia1,function(){
            small1(jia1);
        })
    });
    turn1(jia2,function(){
        turn2(jia2,function(){
            small2(jia2);
        })
    });
    var timer3 =null;
    function small2(obj){
        clearInterval(timer3);
        var  leader =1;
        timer3= setInterval(function(){
            if(leader>0.4){
                leader=leader-0.1;
                obj.style.transform="scale("+leader+")"
            }else{
                clearInterval(timer3);
                big2(obj);
            }

        },100)
    }
    var timer4 =null;
    function big2(obj){
        clearInterval(timer4);
        var  leader =0.4;
        timer4= setInterval(function(){
            if(leader<1){
                leader=leader+0.1;
                obj.style.transform="scale("+leader+")"
            }else{

                clearInterval(timer4);
                small2(obj);
            }

        },100)
    }


 /*   playImg.onclick = function () {
        wrapp.style.display = "block";
        bg.style.display = "block";
    };
    bg.onclick = function () {
        wrapp.style.display = "none";
        bg.style.display = "none";
    };
*/


    var wrap = document.getElementById("wrap");
    var wrapbox = document.getElementById("wrapbox");

    //
    jia1.onclick = function (event) {
        wrap.style.display = "block";
        wrapbox.style.display = "block";
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };
    wrap.onclick = function (event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.id !== "wrapbox") {
            console.log(11);
            //��ȡ�¼�Ŀ�� �������show������ʧ
            wrap.style.display = "none";
            wrapbox.style.display = "none";
        }
    };
    jia1.onclick = function (event) {
        wrap.style.display = "block";
        wrapbox.style.display = "block";
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };
    jia2.onclick = function (event) {
        wrap.style.display = "block";
        wrapbox.style.display = "block";
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };
    wrap.onclick = function (event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.id !== "wrapbox") {
            console.log(11);
            //��ȡ�¼�Ŀ�� �������show������ʧ
            wrap.style.display = "none";
            wrapbox.style.display = "none";
        }
    };
//ʵ���������Ķ�����ԵĻ���
  /*  function animate(obj,json,fn){
        var getStyle = function(obj,attr){
            if(window.getComputedStyle(obj,null)[attr]){
                return window.getComputedStyle(obj,null)[attr];
            }else{
                return obj.currentStyle[attr];
            }
        }
        //�����һ�εĸ���
        clearInterval(obj.timer);
        //���Ӷ�ʱ��
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
    }*/
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

}
/*
$(function(){
   $(".jia1").mouseover(function(){


   })




})*/
