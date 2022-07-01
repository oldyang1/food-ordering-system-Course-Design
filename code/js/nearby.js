// 判断是否登录而确定跳转页面
$(function() {
    var flag = localStorage.getItem("loginFlag");
    if(flag=='true'){
        $(".user").click(function() {
            // alert(567567)
            // window.location.href = "./new_user.html";        
            $(".user").attr('href', './new_user.html');
        });
    }else {
        $(".user").attr('href', './user.html');
    }
});