// 登录中状态 点击退出登录清除数据
$("#logout").click(function(){
    if(confirm("是否退出登录？")){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.setItem("loginFlag", false);
    alert("成功退出登录！");
    }
});