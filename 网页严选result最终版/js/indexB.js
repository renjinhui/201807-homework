/**
 * Created by Administrator on 2018/8/31/031.
 */

(function () {
    let timer1 = null,
        index1 = 0,
        $oLi = $('.oLi'),
        $focusBd = $('.focus-bd'),
        $leftBtn = $('.leftBtn'),
        $rightBtn = $('.rightBtn'),
        $tipLi = $('.tip-li'),
        n1 = $oLi.length;
    function autoPlay1() {
        timer1 = setInterval(()=>{
            play1()
        },2000)
    };
    autoPlay1();
    function play1() {
        if($focusBd.running)return;
        $focusBd.running = true;
        index1++;
        if(index1 === n1){
            index1 =0
        }
        if(index1 <= -1){
            index1 = n1-1
        }

        $tipLi.eq(index1).addClass('tip').siblings().removeClass('tip');
        $oLi.eq(index1).css({zIndex:10}).siblings().css({zIndex:1});
        $oLi.eq(index1).animate({opacity:1},500,function () {
            $(this).siblings().css({opacity:0});
            $focusBd.running = false;
        })
    }
    $focusBd.on('mouseenter',function () {
        $leftBtn.show();
        $rightBtn.show();
        clearInterval(timer1)
    });
    $focusBd.on('mouseleave',function () {
        $leftBtn.hide();
        $rightBtn.hide();
        autoPlay1();
    });
    $leftBtn.on('click',function () {
        index1 -= 2;
        play1();
    });
    $rightBtn.on('click',function () {
        play1();
    });

    $tipLi.on('mouseenter',function () {
        let $this = $(this);
        let q = $this.index();
        index1 = q-1;
        play1();
    });

    let $lunBoTu = $('.lunBoTu'),
        $itemUl = $('.itemUl'),
        $itemLi = $('.itemLi'),
        $btnLeft = $('.btn-left'),
        $btnRight = $('.btn-right'),
        $gRow = $('.g-row');
    let data = null;
    let n = null;
    let timer = null;
    let index = 0;
    let w = $itemLi[0].offsetWidth;
    let getData = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('get','json/index.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)){
                data = utils.toJson(xhr.responseText);
            }
        };
        xhr.send()
    };
    getData();
    let giveHtml = function (data) {
        let str = '';
        data.push(data[0]);
        data.push(data[1]);
        data.push(data[2]);
        data.forEach(({img,frontName,date,pname,price,content})=>{
            str += `<li class="itemLi">
                    <div class="m-product">
                        <a title="${pname}" href="">
                            <div class="bd-img">
                                <img class="img" src="${img}" alt="">
                            </div>
                        </a>
                        <div class="m-comment">
                            <div class="bd-top">
                                <span class="frontName">${frontName}</span>
                                <span class="date">${date}</span>
                            </div>
                            <div class="bd-middle">
                                <span class="pname">${pname}</span>
                                <span class="price">
                                    <span>￥</span>
                                    <span>${price}</span>
                                </span>
                            </div>
                            <div class="comment-content">
                                <p>${content}</p>
                            </div>
                        </div>
                    </div>
                </li>`
        });
        n = data.length;
        $itemUl.html(str);
        $itemUl.css({'width':w*n})
    };
    giveHtml(data);
    let autoPlay = function () {
        timer = setInterval(()=>{
            play();
        },2000)
    };
    autoPlay();
    let play = function () {
        if(utils.css($itemUl[0],'left')%w !==0 )return;
        index++;
        if(index <= -1){
            $itemUl.css({left:-w*(n-3)});
            index = n-4
        }
        if(index == n-2){
            $itemUl.css({'left':0});
            index =1;
        }
        let l = -w*index;
        //$itemUl.css({'left':l});
        //$itemUl.animate({'left':l},500)
        myAnimate($itemUl[0],500,{'left':l});
    };
    $btnLeft.on('click',function () {
        if(utils.css($itemUl[0],'left')%w !==0 )return;

        index -=2;
        play();
    });
    $btnRight.on('click',function () {
        play();
    });
    $gRow.on('mouseenter',function () {
        clearInterval(timer)
    });
    $gRow.on('mouseleave',function () {
        autoPlay();
    });

    let $fix = $('.fix'),
        $app = $('.m-appDownloadGuide');

    $fix.on('click',function () {
        $app.css({display:'none'})
    })
})();



