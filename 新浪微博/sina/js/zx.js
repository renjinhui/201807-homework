/**
 * Created by Administrator on 2018/9/9 0009.
 */
var bigAd=document.getElementsByClassName('big_ad')[0];
var litAd=document.getElementsByClassName('lit_ad')[0];
var qp=document.getElementsByClassName('qp')[0];
var web=document.getElementsByClassName('web')[0];
var weChat=document.getElementsByClassName('we_chat')[0];
var login=document.getElementsByClassName('user_login')[0];
var qFloat=document.getElementsByClassName('qipai-float')[0];
var wFloat=document.getElementsByClassName('webgame-float')[0];
var weFloat=document.getElementsByClassName('weChat-float')[0];
var lFloat=document.getElementsByClassName('login-float')[0];
var sBox=document.getElementsByClassName('small-box');
var bBox=document.getElementsByClassName('big-box');

litAd.onmouseenter=function () {
    litAd.style.display="none";
    bigAd.style.top=0;
};
bigAd.onmouseleave=function () {
    litAd.style.display="block";
    bigAd.style.top='-250px';
};

qp.onmouseenter=function () {
    qFloat.style.display='block'
};
qp.onmouseleave=function () {
    qFloat.style.display='none'
};
web.onmouseenter=function () {
    wFloat.style.display='block'
};
web.onmouseleave=function () {
    wFloat.style.display='none'
};
weChat.onmouseenter=function () {
    weFloat.style.display='block'
};
weChat.onmouseleave=function () {
    weFloat.style.display='none'
};
login.onmouseenter=function () {
    lFloat.style.display='block'
};
login.onmouseleave=function () {
    lFloat.style.display='none'
};
/*轮播图*/
(function () {
    function bannerPlugin(options) {
        options = options || {};
        var _default = {
            eventType:'click'
        };
        for(var k in options){
            _default[k] = options[k];
        }
        var $box = this,
            $ul = $box.children('.img_box'),
            $lis = $ul.children('li'),
            $tipBox = $box.find('.tip_box'),
            $tip = $tipBox.find('.tip');
            $p=$tip.find('p');
            $h=$tip.find('h2');
        console.log($p);
        var index = 0,// 显示图片的索引
            n = 4,// 图片的个数
            timer = null; // 存储定时器
        init();
        console.log($tip);
        /*
         * 做处理 显示第一张
         * */
        function init() {
            $lis = $ul.children('li');
            // $lis.eq(0).css('zIndex',10).siblings().css('zIndex',1);
            $lis.eq(0).css({zIndex:10}).siblings().css({zIndex:1,opacity:0});
            $tip.eq(0).addClass('current').siblings().removeClass('current');
            autoPlay();
            tipClick();
            eventFn()
        }

        function play() {
            if($box.running)return;
            $box.running = true;
            index++;
            if(index == 5){
                index = 0;
            }

            $tip.eq(index).addClass('current').siblings().removeClass('current');

            $lis.eq(index).css({zIndex:10}).siblings().css({zIndex:1});
            $lis.eq(index).animate({opacity:1},500,function () {
                $(this).siblings().css({opacity:0});
                $box.running = false;
            })
        }
        function autoPlay() {
            timer = setInterval(function () {
                play();
            },3000)
        }
        function eventFn() {
            $box.on('mouseenter',function () {
                clearInterval(timer);
            });
            $box.on('mouseleave',function () {
                autoPlay();
            });
        }

        function tipClick() {
            $tip.on(_default.eventType,function () {
                var $this = $(this);// this 是点击的哪个元素
                var n = $this.index();// n 是点击哪个元素的索引
                index = n - 1;
                play();
            })
        }
    }

    $.fn.extend({
        bannerPlugin:bannerPlugin
    })
})();
$('.play-box').bannerPlugin({
    eventType:'click'
});

/*鼠标移动图片变宽*/
for (let i = 0; i < sBox.length; i++) {
   sBox[i].onmouseenter=function () {
       [...sBox].forEach((item)=>{
           item.style.display='block';
       });
       [...bBox].forEach((item)=>{
           item.style.display='none';
       });
       sBox[i].style.display='none';
       bBox[i].style.display='block';
   }
}