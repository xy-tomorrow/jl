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
    //���� ʵ��һ�� �������ֲ�ͼ
    //����


    //��ͷ
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    //1.��̬���ɽṹ
    //1.1����ͼƬ������̬���ɰ�ť
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;//���еİ�ť
    olLis[0].className = "current";
    //1.2��¡��һ�Ź�� �ŵ����
    var firstImg = lis[0].cloneNode(true);
    picul.appendChild(firstImg);
    //2.��꾭����ť
    //��꾭����ť ��ť���� �Զ�������ʽ��ul�ƶ���ָ����λ��
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
            //Ŀ�� �� ��ť�����й� �� ͼƬ����й� �����Ǹ���
            var target = -this.index * imgwidth;
            animate(picul, target);
            //��Ҫ�Ѽ�������ͳһ
            pic = this.index;
            square = this.index;
        };
    }
    //3.�������ͷ
    //3.1��꾭������ ��ʾ��ͷ ����뿪���� ���ؼ�ͷ
    pict.onmouseover = function () {
        arr.style.display = "block";//��ʾ��ͷ
        clearInterval(timer);//ֹͣ�Զ�����
    };
    pict.onmouseout = function () {
        arr.style.display = "none";//���ؼ�ͷ
        timer = setInterval(right.onclick, 1000);//�����Զ�����
    };
    //3.2����Ҽ�ͷ �Զ�������ʽ��ul�ƶ���ָ����λ��
    var pic = 0;//��¼��ǰ������ʾ��ͼƬ������
    var square = 0;//��¼��ǰ��������İ�ť������
    right.onclick = function () {
        //���ж� ��������һ��ͼƬ ����ul˲�����Ὺʼλ�� Ȼ������ҲҪ����
        if (pic === lis.length - 1) {
            picul.style.left = 0 + "px";
            pic = 0;//����ҲҪ����
        }
        pic++;//�������Ҫ��ʾ��ͼƬ������
        //Ŀ�� ��pic�й� �� ͼƬ����й� �����Ǹ���
        var target = -pic * imgwidth;
        animate(picul, target);
        //��ťҲҪ������
        if (square < olLis.length - 1) {
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
    };
    left.onclick = function () {
        //���ж� ����ǵ�һ��ͼƬ ����ul˲����������λ�� Ȼ������ҲҪ�����
        if (pic === 0) {
            picul.style.left = -(lis.length - 1) * imgwidth + "px";
            pic = lis.length - 1;//����ҲҪ����
        }
        pic--;//�������Ҫ��ʾ��ͼƬ������
        //Ŀ�� ��pic�й� �� ͼƬ����й� �����Ǹ���
        var target = -pic * imgwidth;
        animate(picul, target);
        //��ťҲҪ������
        if (square > 0) {
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

    timer = setInterval(right.onclick, 1000);//�Զ�����

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 20;
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



