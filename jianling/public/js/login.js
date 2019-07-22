$(function(){
    $("#login").click(function(){
      var uname=$(".uname").val(),
      upwd=$(".upwd").val()
      console.log(uname,upwd)
    $.ajax({
        url:"http://localhost:3000/user/login",
        type:"post",
        data:{
            uname,
            upwd   
        },
        
        dataType:"json",
        success:function(result){
            console.log(result.code)
            if(result.code==200){
                window.location.href="index.html"    
            }else{
                this.uname="";
                this.upwd="";
                alert("账号或密码错误")

            }
        }

    })
})
  
})