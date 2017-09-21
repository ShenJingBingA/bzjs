$(function () {
    // 头部 左部 选项卡
    $(".nav li").click(function () {
        if($(this).hasClass('home')){
            $(".body-left").css('display','none')
            $(".body-right").css('width','100%')
            $(".path-view").css('display','none')
        }else {
            $(".body-left").css('display','block')
            $(".body-right").css('width','87%')
        }
        $(this).addClass("first").siblings().removeClass('first');
        // $(".body-left > li span").removeClass("click-active");
        // $(".down a").removeClass("down-active")
        // $(".type a").removeClass("other-active")
        $(".body-left > li").eq($(this).index()).addClass("active").siblings().removeClass("active")
    })
    //班组建设 下拉
    $(".type .click").click(function () {
        $(this).toggleClass("click-active").next().toggle(300).end().parent("div").siblings().children(".click").removeClass("click-active").siblings(".down").css("display","none")
    })
    //班组 点击选中效果
    $(".down a").click(function () {
        $(this).addClass("down-active").siblings().removeClass("down-active")
    })

    // 班组考评选中效果
    $(".type>a").click(function () {
        $(this).addClass("other-active").siblings().removeClass("other-active");
        // 路径面包屑
        var pathP=$(".first").html();
        var pathS=$(this).html();
        $(".path-view").css("display","block")
        $(".pathP").html(pathP);
        $(".pathS").html(pathS);
    });
    $(".down>a").click(function () {
        $(".path-view").css("display","none")
    })
    $(".body-left li:last-child .down a").click(function () {
        var pathP=$(".click-active").find("span").html();
        var pathS=$(this).html();
        $(".body-right .path-view").css("display","block")
        $(".pathP").html(pathP);
        $(".pathS").html(pathS);
    })
    // 退出登录弹框
    $(".lout").click(function () {
        $(".logout").css("display","block")
    })
    $(".lbtn").click(function () {
        $(".logout").css("display","none")
    })





})