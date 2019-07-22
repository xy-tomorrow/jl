$(function(){
    $("#btn").click(function(){
        console.log($("#uname").val())
    $.ajax({
        url:"http://localhost:3000/user/reg",
        type:"post",
        data:{
            uname:$("#uname").val(),
            upwd:$("#upwd").val(),
            phone:$("#phone").val()
            
        },
        
        dataType:"json",
        success:function(result){
            console.log(result.code)
            if(result.code==200){
                window.location.href="login.html"
                
            }
        }

    })
})
  
})