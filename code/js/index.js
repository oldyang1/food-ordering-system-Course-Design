// 轮播图部分开始
window.onload=image_scroll;   // 等页面完全加载后执行以下函数，要不然获取不到元素或标签
// 标识默认值
var idx = 0;
function image_scroll()
{
    var lis = $(".wrap a");
    setInterval(leftRun, 1000)
    
    function leftRun() {
        // 隐藏上一张图片
        lis.eq(idx).fadeOut(300);
        // 修改标识
        idx += 1;
        // 防止页面加载完，将索引归零，边界处理
        if (idx > lis.length-1) {
            idx = 0;
        }
        // 显示下一张图片
        lis.eq(idx).fadeIn(300)
        // 调用标识函数
        changeCircle();
    }
}

// 指示器函数
function changeCircle() {
    // 链式调用，找到当前显示的图片idx，让指示器高亮，然后把他的同级元素高亮删除掉
    $(".banner ul li").eq(idx).addClass('active').siblings().removeClass("active");
}
// 轮播图部分结束


// 消息转换部分开始
var message = $(".message span");
var im = 0;
setInterval(turnText, 3000)
function turnText() {
    if (im > message.length-1) {            // 第一次转换用时6秒，以后3秒一次
        im = 0;
    }
    changeSpan();
    im += 1;
}

function changeSpan() {
    // 链式调用，找到当前索引的span，让其显示，然后把他的同级元素的显示删除掉
    $(".message span").eq(im).addClass('current').siblings().removeClass("current");
}
// 消息转换部分结束


//回到顶部模块开始
//当高度达到400时，出现按钮，小于时隐藏
//点击按钮时，滚动条为0
//根据谁进行滚动 body 或 html
let goTop = document.getElementsByClassName('goTop')[0];
window.onscroll = function(){
    //获取高度 根据body 或 html
    let res = document.body.scrollTop || document.documentElement.scrollTop
    console.log(res);
    if (res >= 200) {
    goTop.style.display = 'block';
    }else{
    goTop.style.display = 'none';
    }
}
goTop.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// 回到顶部模块结束

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
