var $table = $('#table');
    $(document).on('focus', 'input[type="text"]', function() {
        $(this).parent().find('label').addClass('active');
    }).on('blur', 'input[type="text"]', function() {
        if ($(this).val() == '') {
            $(this).parent().find('label').removeClass('active');
        }
    });
    var datas=[
        {
            "id": 1,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 2,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 3,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 4,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 5,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 6,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 7,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 8,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 9,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 10,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 11,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 12,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 13,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 14,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 15,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 16,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 17,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 18,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 19,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 20,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 21,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 22,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 23,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id":24,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 8,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 9,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 10,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 11,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 12,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 13,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 14,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 15,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 16,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 17,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 18,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 19,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 20,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 21,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 22,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id": 23,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        },
        {
            "id":24,
            "username": "shuzheng",
            "password": "123456",
            "name": "张三",
            "sex": 1,
            "age": 28,
            "phone": 13987654321,
            "email": "469741414@qq.com",
            "address": "中国 北京",
            "remark": "官网：http://www.shuzheng.cn"
        }
    ];
    // bootstrap table初始化
    // http://bootstrap-table.wenzhixin.net.cn/zh-cn/documentation/
    $table.bootstrapTable({
        //url: 'data/data1.json',
        data:datas,
        height: getHeight(),
        striped: true,
//            search: true,
//            searchOnEnterKey: true,
//            showRefresh: true,
//            showToggle: true,
//            showColumns: true,
        minimumCountColumns: 2,
//            showPaginationSwitch: true,
//            showRefresh:true,
        clickToSelect: true,
        detailView: false,
        detailFormatter: 'detailFormatter',
        pagination: true,
        paginationLoop: false,
        classes: 'table table-hover table-no-bordered',
        //sidePagination: 'server',
        //silentSort: false,
        smartDisplay: false,
        idField: 'id',
        sortName: 'id',
        sortOrder: 'desc',
        escape: true,
        searchOnEnterKey: true,
        idField: 'systemId',
        maintainSelected: true,
        toolbar: '#toolbar',
        onClickRow:function (row,$element,field) {
            //单击触发 row:会获取到这行的信息;$element:标签;field:字段名
            //console.log(field)
        },
        columns: [
            {field: 'state', checkbox: true},
            {field: 'id', title: '编号', sortable: true, halign: 'center',align:"center",width:200},
            {field: 'username', title: '账号', halign: 'center',align:"center"},
            {field: 'password', title: '密码', halign: 'center',align:"center"},
            {field: 'name', title: '姓名', halign: 'center',align:"center"},
            {field: 'sex', title: '性别', halign: 'center',align:"center"},
            {field: 'age', title: '年龄', halign: 'center',align:"center"},
            {field: 'phone', title: '手机', halign: 'center',align:"center"},
            {field: 'email', title: '邮箱', shalign: 'center',align:"center"},
            {field: 'address', title: '地址',halign: 'center',align:"center"},
            {field: 'remark', title: '备注',halign: 'center',align:"center"},
//                {field: 'action', title: '操作', halign: 'center', align: 'center', formatter: 'actionFormatter', events: 'actionEvents', clickToSelect: false}
        ]
    }).on('all.bs.table', function (e, name, args) {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });
function actionFormatter(value, row, index) {
    return [
        '<a class="like" href="javascript:void(0)" data-toggle="tooltip" title="Like"><i class="glyphicon glyphicon-heart"></i></a>　',
        '<a class="edit ml10" href="javascript:void(0)" data-toggle="tooltip" title="Edit"><i class="glyphicon glyphicon-edit"></i></a>　',
        '<a class="remove ml10" href="javascript:void(0)" data-toggle="tooltip" title="Remove"><i class="glyphicon glyphicon-remove"></i></a>'
    ].join('');
}

window.actionEvents = {
    'click .like': function (e, value, row, index) {
        alert('You click like icon, row: ' + JSON.stringify(row));
        console.log(value, row, index);
    },
    'click .edit': function (e, value, row, index) {
        alert('You click edit icon, row: ' + JSON.stringify(row));
        console.log(value, row, index);
    },
    'click .remove': function (e, value, row, index) {
        alert('You click remove icon, row: ' + JSON.stringify(row));
        console.log(value, row, index);
    }
};
function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}
// 新增
function createAction() {
    $.confirm({
        type: 'dark',
        animationSpeed: 300,
        title: '新增',
        content: $('#createDialog').html(),
        buttons: {
            confirm: {
                text: '确认',
                btnClass: 'waves-effect waves-button',
                action: function () {
                    $.alert('确认');
                }
            },
            cancel: {
                text: '取消',
                btnClass: 'waves-effect waves-button'
            }
        }
    });
}
// 编辑
function updateAction() {
    var rows = $table.bootstrapTable('getSelections');
    if (rows.length == 0) {
        $.confirm({
            title: false,
            content: '请至少选择一条记录！',
            autoClose: 'cancel|3000',
            backgroundDismiss: true,
            buttons: {
                cancel: {
                    text: '取消',
                    btnClass: 'waves-effect waves-button'
                }
            }
        });
    } else {
        $.confirm({
            type: 'blue',
            animationSpeed: 300,
            title: '编辑系统',
            content: $('#createDialog').html(),
            buttons: {
                confirm: {
                    text: '确认',
                    btnClass: 'waves-effect waves-button',
                    action: function () {
                        $.alert('确认');
                    }
                },
                cancel: {
                    text: '取消',
                    btnClass: 'waves-effect waves-button'
                }
            }
        });
    }
}
// 删除
function deleteAction() {
    var rows = $table.bootstrapTable('getSelections');
    if (rows.length == 0) {
        $.confirm({
            title: false,
            content: '请至少选择一条记录！',
            autoClose: 'cancel|3000',
            backgroundDismiss: true,
            buttons: {
                cancel: {
                    text: '取消',
                    btnClass: 'waves-effect waves-button'
                }
            }
        });
    } else {
        $.confirm({
            type: 'red',
            animationSpeed: 300,
            title: false,
            content: '确认删除该系统吗？',
            buttons: {
                confirm: {
                    text: '确认',
                    btnClass: 'waves-effect waves-button',
                    action: function () {
                        var ids = new Array();
                        for (var i in rows) {
                            ids.push(rows[i].systemId);
                        }
                        $.alert('删除：id=' + ids.join("-"));
                    }
                },
                cancel: {
                    text: '取消',
                    btnClass: 'waves-effect waves-button'
                }
            }
        });
    }
}