$(".order").click(function() {
    alert("您未登录，请您先登录");
    var flag = localStorage.getItem("loginFlag");
    if (flag == 'true'){
        $(".order").attr('href', './orders.html');
    }
    else {
        $(".order").attr('href', './login.html');
    }
});