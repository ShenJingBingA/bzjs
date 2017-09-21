// 新增 弹框
$(".class-add").click(function () {
    $("#alert-box").fadeIn(300)
    $("#alert-box form").delay(200).fadeIn(300);
})
// 关闭 新增弹框
// 取消
$(".alert-cancel").click(function () {
    $("#alert-box").delay(200).fadeOut(300)
    $("#alert-box form").fadeOut(300);
})
// 关闭
$(".alert-close").click(function () {
    $("#alert-box").delay(200).fadeOut(300)
    $("#alert-box form").fadeOut(300);
})