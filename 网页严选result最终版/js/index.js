/**
 * Created by Administrator on 2018/8/30.
 */
(function () {
    // 头部轮播图
    (function () {
        let $oUl = $('.yx-cp-noticeListUL'),
            $liArr = $('.yx-cp-noticeListUL>li'),
            $ulBox = $('.yx-cp-m-noticeList'),
            $liW = $liArr[1].offsetHeight,
            index = 0,
            n=$liArr.length;
        console.log(n);
        function play() {
            if(parseFloat($oUl.css('top'))%$liW!==0)return;
            index++;
            if (index == n) {
                index = 0;
                $oUl.css({
                    top: 0
                })
            } else {
                $oUl.animate({
                    top: -index * $liW
                }, 1000)
            }

        }

        function autoPlay() {
            window.headTimer = setInterval(play, 2000)
        }  // 函数执行
        autoPlay();
        $ulBox.on('mouseenter', function () {
            clearInterval(window.headTimer);
        })
        $ulBox.on('mouseleave', function () {
            window.headTimer = setInterval(play, 2000)
        })

    })();
    // 获取光标，下拉菜单出现
    (function () {
        let $inp = $('.yx-cp-searchInput'),
            $sugList = $('.yx-cp-m-suggest '),
            $liArr = $('.yx-cp-noticeItem');
            $sugList.css({
                opacity:1,
                display:"none"
            })
        $inp.on('focus', function () {
            $sugList.css({
                display: "block"
            })
        });
        $inp.on('blur', function () {
            $sugList.css({
                display: "none"
            })
        })
    })();
    // 头部选项卡
    (function () {
        let $ulBox = $('.yx-cp-m-funcTab'),
            $liArr = $ulBox.find('.p'),
            $drop = $ulBox.find('.yx-cp-tabNav-dropdown');
            $liArr.each(function (index, item) {
            $(item).on('mouseenter', function () {
                $(this).children('a').css({
                    color: '#b4a078',
                    borderBottom: '3px solid #b4a078',
                    display:'block',
                    height: 18
                });
                $(this).children('div').css({
                    display: 'block',
                    opacity: 1
                }).next().css({
                    display: 'block',
                    opacity: 1
                })
            })
            $(item).on('mouseleave', function () {
                $(this).children('a').css({
                    color: '#000',
                    borderBottom: '0'
                })
                $(this).children('div').css({
                    display: 'none',
                    opacity: 0
                }).next().css({
                    display: 'none',
                    opacity: 0
                })
            })
        });

        let $flowUl=$('.yx-cp-m-funcTabSmall'),
            $flowLiArr = $flowUl.find('.p');
        $flowLiArr.each(function (index, item) {
            $(item).on('mouseenter', function () {
                $(this).children('a').css({
                    color: '#b4a078',
                    borderBottom: '3px solid #b4a078',
                    display:'block',
                    height: 18
                });
                $(this).children('div').css({
                    display: 'block',
                    opacity: 1
                }).next().css({
                    display: 'block',
                    opacity: 1
                })
            })
            $(item).on('mouseleave', function () {
                $(this).children('a').css({
                    color: '#000',
                    borderBottom: '0'
                })
                $(this).children('div').css({
                    display: 'none',
                    opacity: 0
                }).next().css({
                    display: 'none',
                    opacity: 0
                })
            })
        })
    })();
    // 头部浮动栏切换
    (function () {
        let $normalBox=$('.yx-cp-m-funcTab'),
            $normalHid=$normalBox.find('.yx-cp-m-tabNav'),
            $flowBox=$('.yx-cp-m-funcTabSmall'),
            $flowShow=$flowBox.find('.yx-cp-m-tabNav'),
          target=$normalHid.offset().top;
        let flag=false;
            document.onmousewheel=function () {
                let distance=document.documentElement.scrollTop||document.body.scrollTop;
            if(distance+50>target){
                if(flag)return;
                flag=true;
                $flowBox.show();
                    $flowBox.animate({
                        top:0
                    },500)
            }else{
                $flowBox.hide();
                $flowBox.css({
                    top:-60
                })
                flag=false;
            }

        }
    })();
    //中心部分轮播图      左边按键有点问题
    (function () {
        let $mFocus = $('.m-focus'),
            $prevBtn = $('.m-focus .slick-prev'),
            $nextBtn = $('.m-focus .slick-next'),
            $ulBox = $mFocus.find('.slick-track'),
            $liArr = $ulBox.children('li'),
            $dots = $mFocus.find('.slick-dots'),
            $dotArr = $dots.children('li'),
            n = 0,
            index = 0;
        // $liW=$liArr[0].offsetWidth;
        n = $liArr.length;

        // 运动函数
        function play() {
            if ($ulBox.running)return;
            $ulBox.running = true;
            index++;
            if (index === n) {
                index = 0;
            }
            if (index <= -1) {
                index = n - 1
            }
            $dotArr.eq(index).children('button').addClass('current');
            $dotArr.eq(index).siblings().children('button').removeClass('current');
            $liArr.eq(index).css('zIndex',100).siblings().css('zIndex',10);
            $liArr.eq(index).animate({
                opacity: 1,
            }, 1000, function () {
                $(this).siblings().css({
                    opacity: 0,
                })
                $ulBox.running = false;
            })
        }
        function autoPlay() {
            $ulBox.timer = setInterval(play, 3000)
        }
        autoPlay();
        // 绑定鼠标进入离开事件
        $mFocus.on('mouseenter', function () {
            clearInterval($ulBox.timer);
        });
        $mFocus.on('mouseleave', function () {
            autoPlay();
        });
        // 绑定点击事件
        $prevBtn.on('click', function () {
            if ($ulBox.running)return;
            index -= 2;
            play();
        });
        $nextBtn.on('click', function () {
            play();
        });
        // 底部小按钮
        $dotArr.each(function (key, item) {
            $(item).on('mouseenter', function () {
                index = key - 1;
                play();
            })
        })
    })();
    // 新品发布轮播图     按钮的背景色有点问题,最后一张没颜色依旧没解决
    (function () {
        let $indexRoot = $('#indexRoot'),
            $newProducts = $indexRoot.find('.m-newProducts'),
            $bd = $newProducts.find('.bd'),
            $leftBtn = $bd.find('.left'),
            $rightBtn = $bd.find('.right'),
            $slickList = $bd.find('.slick-list'),
            $picBox = $slickList.find('.slick-track'),
            $myProduct = $picBox.find('.m-product'),
            picW = $myProduct[0].offsetWidth,
            index = 0,
            n = $myProduct.length / 4;

        $picBox.css({
            width: picW * n * 4
        });
        // 轮播图运动
        let flagL = true,
            flagR = false;
        function play() {
            index == 0 ? flagL = true : flagL = false;
            index == n - 1 ? flagR = true : flagR = false;
            $picBox.animate({
                left: -picW * index * 4
            }, 500)
        }
        $leftBtn.on('click', function () {
            if (flagL){
               /* $(this).css({
                    backgroundColor:'#E7E2D7'
                });*/
                return;
            }else{
               /* $(this).css({
                    backgroundColor:'#B19E7A'
                })*/
            }
            index--;
            play();
        });
        $rightBtn.on('click', function () {
            if (flagR){
                /*$(this).css({
                    backgroundColor:'#E7E2D7'
                })*/
                return;
            }else{
                /*$(this).css({
                    backgroundColor:'#B19E7A'
                })*/
            }
            index++;
            play();
        })
    })();
    // 人气推荐部分
    (function () {
        let $mainItem=$('.m-indexPopularItem'),
            $gGrow=$mainItem.find('.g-row'),
            $fLeft=$gGrow.find('.f-left'),
            $item=$fLeft.find('.item'),
            $showContainer=$gGrow.find('.showContainer');
        $item.each(function(index,item){

                $(item).on('click',function () {
                    $(this).addClass('active').siblings().removeClass('active')
                    $showContainer.eq(index).removeClass('hidden').siblings('.showContainer').addClass('hidden');
                })
            })
    })();
    // 新品首发倒计时
    (function () {
        let $maxName=$('.flashSaleContainer'),
            $flashSaleLt=$maxName.find('.flashSaleLt'),
            $hours=$flashSaleLt.find('.j-hour'),
            $minute=$flashSaleLt.find('.j-minute'),
            $second=$flashSaleLt.find('.j-second');
        let tar=new Date('2018-9-15 18:00:00'),
            tarT=tar.getTime();
        function deadline(tarT) {
            if(tarT<0){
                tarT=0;
            }
            let now=new Date(),
                nowT=now.getTime(),
                time=tarT-nowT;
            let h=Math.floor(time/1000/3600),
                hours=h<10?'0'+h:h;
            time=time-h*1000*3600;
            let m=Math.floor(time/1000/60),
                minutes=m<10?'0'+m:m;
            time=time-m*1000*60;
            let s=Math.floor(time/1000),
                seconds=s<10?'0'+s:s;
            $hours.html(hours);
            $minute.html(minutes);
            $second.html(seconds);
        }
        let timer=setInterval(function () {
            deadline(tarT);
            if(tarT<0){
                clearInterval(timer);
            }
        },1000)
    })();
    // 侧边广告栏的显示
    (function () {
        let $fixedTool=$('.fixedTool'),
            $des=$('.j-yx-fixedtoolSubscribe'),
            $toTop=$fixedTool.find('.j-yx-fixedtoolGoTop'),
            $input=$('.j-yx-fixedtoolInput'),
            $inputClose=$('.yx-cp-icon-yxfixedtoolx'),
            $flowBox=$('.yx-cp-m-funcTabSmall'),
            $dialog=$fixedTool.find('.yx-subscribeDialog'),
            $text=$fixedTool.find('.yx-fixedtoolText'),
            $close=$fixedTool.find('.yx-cp-icon-yxclose');
        let flag=false;
        let n=0;
        window.onmousewheel=function () {
             n=document.documentElement.scrollTop||document.body.scrollTop;
            if(n>680){
                if(flag)return;
                $toTop.show();
                flag=true;
            }else{
                $toTop.hide();
                flag=false
            }
        };
        $toTop.on('click',function () {
            $(document.documentElement).animate({
                scrollTop:0
            },500);
            // 定时器
            /*if(n<10){*/
                console.log(1);
                $flowBox.hide();
                $flowBox.css({
                    top:-60
                })
            /*}*/
        })
       // 点击弹出框按钮让其关闭
        $close.on('click',function () {
            $dialog.addClass('hide');
        });
        $des.on('mouseenter',function () {
            $dialog.removeClass('hide')
        })
        $input.on('input',function () {
            $inputClose.addClass('show');
             $inputClose.on('click',function () {
                 $input.val('');
                 $inputClose.removeClass("show")
                // $inputClose.hide();
             });
            if($input.val()==''){
                $inputClose.removeClass('show');
            }

        });
        // 输入框为空的时候，为什么关闭按钮


    })();
    // 底部的js部分
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
            console.log(1);
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
})();