function play1(){
    var video_top=document.querySelector(".video_top");
    var img=document.querySelector(".img_play");
    var video=document.querySelector(".video");
    var img2=document.querySelector(".img2");
    img2.style.display="none"
    if(video.paused){
        video.play();
        img.src="./img/g_stop.png";
    }else{
        video.pause();
        img.src="./img/g_play.png";
    }
    video_top.onmouseenter=function(){
        img.style.display="block";
    };
    video_top.onmouseleave=function(){
            img.style.display="none";
    };
}

function play2(){
    var play2=document.querySelector(".play2_1");
    var img_play2=document.querySelector(".img2_1");
    var small_video1=document.querySelector(".small_video1");
    var img=document.querySelector(".img_play");
    var video=document.querySelector(".video");
    var img2=document.querySelector(".img2");
    var video_top=document.querySelector(".video_top");
          img2.style.display="none";
          img.style.display="none";
          video.src=small_video1.src;
          if(video.paused){
            video.play();
            img.src="./img/g_stop.png";
            img2.src="./img/g_stop.png";
          }else{
             video.pause();
             img.src="./img/g_play.png";
             img2.src="./img/g_play.png";
          }
     video_top.onmouseenter=function(){
            img.style.display="block";
    };
    video_top.onmouseleave=function(){
           img.style.display="none";
    };
    play2.onmouseenter=function(){
        img_play2.style.display="block";
    };
    play2.onmouseleave=function(){
        img_play2.style.display="none";
    };              
}

function play3(){
    var play3=document.querySelector(".play2_2");
    var img_play3=document.querySelector(".img2_2");
    var small_video2=document.querySelector(".small_video2");
    var img=document.querySelector(".img_play");
    var video=document.querySelector(".video");
    var img2=document.querySelector(".img2");
    var video_top=document.querySelector(".video_top");
          img2.style.display="none";
          img.style.display="none";
          video.src=small_video2.src;
          if(video.paused){
            video.play();
            img.src="./img/g_stop.png";
            img2.src="./img/g_stop.png";
          }else{
             video.pause();
             img.src="./img/g_play.png";
             img2.src="./img/g_play.png";
          }
     video_top.onmouseenter=function(){
            img.style.display="block";
    };
    video_top.onmouseleave=function(){
            img.style.display="none";
    };
    play3.onmouseenter=function(){
        img_play3.style.display="block";
    };
    play3.onmouseleave=function(){
        img_play3.style.display="none";
    };              
}

function play4(){
    var play4=document.querySelector(".play2_3");
    var img_play4=document.querySelector(".img2_3");
    var small_video3=document.querySelector(".small_video3");
    var img=document.querySelector(".img_play");
    var video=document.querySelector(".video");
    var img2=document.querySelector(".img2");
    var video_top=document.querySelector(".video_top");
          img2.style.display="none";
          img.style.display="none";
          video.src=small_video3.src;
          if(video.paused){
            video.play();
            img.src="./img/g_stop.png";
            img2.src="./img/g_stop.png";
          }else{
             video.pause();
             img.src="./img/g_play.png";
             img2.src="./img/g_play.png";
          }
     video_top.onmouseenter=function(){
            img.style.display="block";
    };
    video_top.onmouseleave=function(){
            img.style.display="none";
    };
    play4.onmouseenter=function(){
        img_play4.style.display="block";
    };
    play4.onmouseleave=function(){
        img_play4.style.display="none";
    };              
}
