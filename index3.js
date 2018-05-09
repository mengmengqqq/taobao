$(".btn").click(function () {
    $(".bg").fadeTo(300,1);
    //隐藏窗体的滚动条
    $("body").css({ "overflow": "hidden" });
});

//模态框OK按钮点击事件
$(".delete").click(function () {
    $(".bg").hide();
    //显示窗体的滚动条
    $("body").css({ "overflow": "visible" });
});