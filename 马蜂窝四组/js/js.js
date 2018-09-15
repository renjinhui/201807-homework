/**
 * Created by 911 on 2018/8/30.
 */
//判断是否显示 下拉bar
;(function () {
    window.showBarFlag = true;
    var realPathName = location.pathname,$nav = $('#Js_middleNav');
    var regExp = /localdeals|sales|flight|insurance|activity/gi;
    var pathArr = realPathName.match(regExp);
    if(window.Env.middleNavHide) { $('.dropdown-bar').hide();return;}
    if(realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType ==5){
        $nav.children('[data-type="cruise"]').addClass('on');
        window.showBarFlag = false;
        $('.dropdown-bar').show();
    }else if(realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType ==21){
        $nav.children('[data-type="wifi"]').addClass('on');
        window.showBarFlag = false;
        $('.dropdown-bar').show();
    }else if(window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4){
        $nav.children('[data-type="visa"]').addClass('on');
        window.showBarFlag = false;
        $('.dropdown-bar').show();
    }else if(window.Env.sales_title_tag == 'semi_self_service' || realPathName == '/sales/0-0-0-6-0-0-0-0.html?group=4' || window.Env.salesType == 30 || window.Env.salesType == 6){
        $nav.children('[data-type="freewalker"]').addClass('on');
        window.showBarFlag = false;
        $('.dropdown-bar').show();
    }
    else if(window.Env.salesType) {
        switch(window.Env.salesType|0) {
            case 1:
            case 3:
                $nav.children('[data-type="sales"]').addClass('on');
                break;
            case 2:
                $nav.children('[data-type="localdeals"]').addClass('on');
                break;
            case 30:
            case 6:
                $nav.children('[data-type="freewalker"]').addClass('on');
                break;
            default:
                $nav.children('[data-type="localdeals"]').addClass('on');
                break;
        }
        window.showBarFlag = false;
        $('.dropdown-bar').show();
    }
    else {
        if( pathArr){
            if(pathArr.length == 1 && pathArr[0] != 'activity'){
                switch(pathArr[0]){
                    case 'localdeals':
                        $nav.children('[data-type="localdeals"]').addClass('on');
                        break;
                    case 'insurance':
                        $nav.children('[data-type="insurance"]').addClass('on');
                        break;
                    case 'sales':
                        $nav.children('[data-type="sales"]').addClass('on');
                        break;
                    case 'flight':
                        $nav.children('[data-type="flight"]').addClass('on');
                        break;
                    default:
                        break;
                }
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }else {
                if('activity'.indexOf(pathArr) != -1){
                    window.showBarFlag  = true;
                    $('.dropdown-bar').hide();
                }
            }
        }
    }
    // 点击时触发
    $('.ul-dropdown-bar > li').on('click',function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
})();
