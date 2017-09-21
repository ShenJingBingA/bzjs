$(function () {
    //班组 页面初始化显示
    $(".class-list a").each(function (index,val) {
        if($(val).attr("class")=="class-list-active"){
            $(val).children().each(function (index,val) {
                if(index==0){
                    $("<li class='class-bottom-active'>").html(`
                        <a href='${$(val).attr("ahref")}' target="page">${$(val).attr("tablename")}</a>
                        <div></div>
                    `).appendTo($(".class-bottom-con .class-mid-list"))
                }else {
                    $("<li>").html(`
                    <a href='${$(val).attr("ahref")}' target="page">${$(val).attr("tablename")}</a>
                    <div></div>
                    `).appendTo($(".class-bottom-con .class-mid-list"))
                }

            })
        }
    })

    //班组右 头 点击选中
    $(".class-list a").click(function () {
        $(".class-bottom-con ul").html("")
        $(this).addClass("class-list-active").siblings().removeClass("class-list-active");
        //加载显示内容
        $(this).children().each(function (index,val) {
            if(index==0){
                $("<li class='class-bottom-active'>").html(`
                    <a href='${$(val).attr("ahref")}' target="page">${$(val).attr("tablename")}</a>
                    <div></div>
                `).appendTo($(".class-bottom-con .class-mid-list"))
                $("iframe[name=page]").attr("src",$(".class-bottom-active a").attr("href"));
            }else {
                $("<li>").html(`
                    <a href='${$(val).attr("ahref")}' target="page">${$(val).attr("tablename")}</a>
                    <div></div>
                `).appendTo($(".class-bottom-con .class-mid-list"))
            }
        })

    });

    // 班组 右 中间 初始化
    $(".class-bottom-con ul li").each(function (index,val) {
        if($(val).attr("class")=="class-bottom-active"){
            var iframePath=$(val).children("a").attr("href");
            $("iframe[name=page]").attr("src",iframePath);
        }
    });


    //班组 右 中间 选中
    $(".class-bottom-con").delegate("li","click",function () {
        $(this).addClass("class-bottom-active").siblings().removeClass("class-bottom-active");
    })

});