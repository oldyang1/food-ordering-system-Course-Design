// 给注册绑定单击事件
$(document).ready(function() {
    // alert(111111);
    // $("#username").blur(function() {

    //     console.info($("#username").val());
    // });
    $(".container span").hide();
    $("#btn1").click(function() {
        // 验证用户名：必须由字母，数字下划线组成，并且长度为5到12位
        //1 获取用户名输入框里的内容
        // console.info($("#username").val());
        var usernameText = $("#username").val();
        //2 创建正则表达式对象
        var usernamePatt = /^\w{5,12}$/;
        if(usernameText == '') {
            $(".username_error").text("用户名不能为空").show();
        } 
        else if(!usernamePatt.test(usernameText)) {
            $(".username_error").text("用户名格式有误").show();
        } 
        else {
            var flag1=1;
            $(".username_error").hide();
        }
        
        // 验证密码：必须由字母，数字下划线组成，并且长度为5到12位
        //1 获取用户名输入框里的内容
        var passwordText = $("#password").val();
        //2 创建正则表达式对象
        var passwordPatt = /^\w{5,12}$/;
        if(passwordText=='') {
            $(".password_error").text('密码不能为空').show();
        } 
        else if (!passwordPatt.test(passwordText)) {
            $(".password_error").text("输入密码格式有误").show();
        } 
        else {
            var flag2=1;
            $(".password").hide();
        }

        // 验证确认密码：和密码相同
        //1 获取密码和确认密码内容
        var passwordText = $("#password").val();
        var repwdText = $("#repwd").val();
        //2 和密码相比较
        if(passwordText==repwdText) {
            var flag3=1;
            $(".repwd_error").hide();
        }  
        else if(repwdText=='') {
            $(".repwd_error").text("密码不能为空").show();
        }  
        else {
            $(".repwd_error").text("两次输入不相等").show();
        }
    
        // 邮箱验证：xxxxx@xxx.com
        //1 获取邮箱里的内容
        var emailText = $("#email").val();
        // console.log(emailText)
        //2 创建正则表达式对象
        var emailPatt = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        if(emailText == '') {
            $(".email_error").text("邮箱不能为空").show();
        } 
        else if(!emailPatt.test(emailText)) {
            $(".email_error").text("邮箱格式有误").show();
        } 
        else {
            var flag4=1;
            $(".email_error").hide();
        }




        // Chrome浏览器为例，数据放在C:\Users\你的计算机名\AppData\Local\Google\
        // Chrome\User Data\\Default\Local Storage\leveldb
    
        var id = localStorage.getItem("username");
        //注册过的账号不能再注册
        if(usernameText==id){
            alert("账号已经注册过，请前去登录！")
            console.log(id)
            console.log(usernameText)
        }
        else{
            //没注册过，并且输入正确的账号注册成功
            if(flag1 && flag2 && flag3 && flag4){
            alert("successful!!");
            localStorage.setItem("username", usernameText);
            localStorage.setItem("password", passwordText);
            }
            else{
                // 输入不正确
                alert("输入有误，请重新输入！");
            }
        }
    });
});
