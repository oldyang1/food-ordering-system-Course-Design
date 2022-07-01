$("#btn1").click(function(){
    // 从本地get到注册时储存的用户名和密码
    var uname = localStorage.getItem("username");
    var pwd = localStorage.getItem("password");
    console.log("用户名:",uname);
    console.log("密码:",pwd);
    if($("#username").val()==uname && $("#password").val()==pwd){
        alert("恭喜你登录成功！");
        
        localStorage.setItem("loginFlag", true);
        window.location.href = "./new_user.html";

    }else{
        alert("输入错误请重新输入！");
    }
});