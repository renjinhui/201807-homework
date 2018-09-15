/**
 * Created by Administrator on 2018/8/29.
 */

// var footer=(function () {
//         var linkBox=document.getElementById('linkbox'),
//          expansion=linkBox.getElementsByClassName('expansion')[0];
//         var exp_span=expansion.getElementsByTagName('span')[0];
//         var $linkBox=$('#linkbox');
//         var $i=$linkBox.find('.expansion >i').eq(0);
//         var flag=0;
//         expansion.onclick=expansion
//             function expansion() {
//             $this=$(this);
//             if(flag==0){
//                 // 这是要点击的元素span
//                 $linkBox.removeClass('shadow-linkbox');
//                 exp_span.innerHtml="收起";
//                 $i.addClass('i-up');
//                 flag=1;
//             }else if(flag==1){
//                 $linkBox.addClass('shadow-linkbox');
//                 exp_span.innerHtml='展开';
//                 $i.removeClass('i-up');
//                 flag=0;
//             }
//         };
//
//         var backTop=document.getElementById('backtop');
//         var duration=1000; //设置固定时间1s回到顶部
//         var timer=null;
//         backTop.onclick=backTop;
//             function backTop () {
//             var time=0;//已经运动的时间
//             var interval=20;// 定时器间隔时间
//             var changeL=document.documentElement.scrollTop||document.body.scrollTop;// 这是滚动条的长度变化，即运动的总距离
//             var step=changeL/duration*interval ;// 每20毫秒运动的距离
//             if(timer!=null)return;
//             timer=window.setInterval(function () {
//                 changeL-=step;
//                 if(changeL<=0){
//                     clearInterval(timer);
//                     timer=null;
//                     changeL=0
//                 }
//                 document.documentElement.scrollTop=changeL;
//                 document.body.scrollTop=changeL;
//
//             },interval)
//         };
// // var fixed=document.getElementsByClassName('footer_module_right')[0];
//         var $fixed=$('.copyright');
//         var n=0
//         window.onscroll=function () {
//             console.log(12);
//             if((document.documentElement.scrollTop||document.body.scrollTop)>5){
//                 backTop.style.display='block';
//                 backTop.style.bottom='88px';
//                 // while((document.documentElement.clientHeight+document.documentElement.scrollTop)>=$fixed.offset().top){
//                 //     backTop.style.bottom= '156px';
//                 // }
//             }else {
//                 backTop.style.display='none';
//             }
//         };
//         window.onmousewheel=function () {
//             clearInterval(timer);
//             timer=null;
//         };
//
//        return {
//            init:function () {
//                backTop ();
//                expansion();
//            }
//        }
//
//     })();
// footer.init();

var linkBox=document.getElementById('linkbox'),
    expansion=linkBox.getElementsByClassName('expansion')[0];
var exp_span=expansion.getElementsByTagName('span')[0];
console.dir(exp_span);
var $linkBox=$('#linkbox');
var $i=$linkBox.find('.expansion >i').eq(0);
var flag=0;
expansion.onclick=function () {
    $this=$(this);
    if(flag==0){
        // 这是要点击的元素span
        $linkBox.removeClass('shadow-linkbox');
        exp_span.innerText="收起";
        $i.addClass('i-up');
        flag=1;
    }else if(flag==1){
        $linkBox.addClass('shadow-linkbox');
        exp_span.innerText='展开';
        $i.removeClass('i-up');
        flag=0;
    }
};

var backTop=document.getElementById('backtop');
var duration=1000; //设置固定时间1s回到顶部
var timer=null;
backTop.onclick=function () {
    var time=0;//已经运动的时间
    var interval=20;// 定时器间隔时间
    var changeL=document.documentElement.scrollTop||document.body.scrollTop;// 这是滚动条的长度变化，即运动的总距离
    var step=changeL/duration*interval ;// 每20毫秒运动的距离
    if(timer!=null)return;
    timer=window.setInterval(function () {
        changeL-=step;
        if(changeL<=0){
            clearInterval(timer);
            timer=null;
            changeL=0
        }
        document.documentElement.scrollTop=changeL;
        document.body.scrollTop=changeL;

    },interval)
};
// var fixed=document.getElementsByClassName('footer_module_right')[0];
var $fixed=$('.copyright');
var n=0
window.onscroll=function () {
    console.log(12);
    if((document.documentElement.scrollTop||document.body.scrollTop)>5){
        backTop.style.display='block';
        backTop.style.bottom='88px';
        // while((document.documentElement.clientHeight+document.documentElement.scrollTop)>=$fixed.offset().top){
        //     backTop.style.bottom= '156px';
        // }
    }else {
        backTop.style.display='none';
    }
};
window.onmousewheel=function () {
    clearInterval(timer);
    timer=null;
};

