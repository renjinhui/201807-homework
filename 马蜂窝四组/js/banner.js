//日历插件
//日期选择器
laydate.render({
    elem: '.dataStart',
    type: 'date',
    range: 'true'
});
laydate.render({
    elem: '.dataEnd',
    type: 'date',
    range: 'true'
});

let bannerModule = (function ($) {
    //发布订阅
    let $plan = $.Callbacks(),
        $bannerBox = $('.mfw-banner'),
        $imgBox = $bannerBox.find('.show-image'),
        $navBox = $bannerBox.find('.show-nav'),
        $searchTabList = $('.searchBox .searchGroup .searchTab ul li'),
        $searchBar = $('.searchBox .searchGroup .searchBar'),
        imgIndex = 0,//当前轮播的图片
        autoTimer = null;
    //图片区域
    //ajax
    let newP = new Promise((resolve, reject) => {
        $.ajax({
            url: './data/banner.json',
            type: 'get',
            data: 'json',
            success: (data) => {
                resolve(data);
            },
            error: () => {
                reject();
            }
        })
    });

    //绑定数据
    $plan.add((data) => {
        let imgStr = '',
            navStr = '';
        data.forEach((item, index) => {
            const {day, month, title, pic, travel, total, author} = item;
            imgStr += `<li>
            <a href="javascript:;" class="mfw-banner-pic"><img src="${pic}" data-src="${pic}"></a>
            <a href="" class="mfw-banner-title">
                <div class="date">
                    <span class="day">${day}</span>/${month}
                </div>
                <h3>${title}</h3>
            </a>
            <div class="content"><p>图片来自于<span><a href="">${travel}</a></span>，此目的地共收藏了<span><a href="">${total}</a></span>张<span><a href="">${travel}</a></span>图片。本片由<span><a href="">${author}</a></span>荣誉出品！
            </p></div>
        </li>`;
            navStr += `<li>
            <a href="javascript:;">
                <img src="${pic}" alt="">
                <span style="display:${index === 0 ? 'block' : 'none'}"></span>
            </a>
        </li>`;
        });
        $imgBox.html(imgStr);
        $navBox.html(navStr);
    });
    //轮播效果
    $plan.add((data) => {
        const $imgList = $imgBox.find('li'),
            $navList = $navBox.find('li'),
            $spanList = $navList.find('span');
        //切换效果
        const changeBanner = () => {
            //大图轮播
            $imgList.eq(imgIndex).css({
                opacity: 1,
                zIndex: '10'
            }).siblings().css({
                opacity: 0,
                zIndex: '1'
            });
            //导航轮播
            $spanList.each((index, item) => {
                if (imgIndex === index) {
                    $(item).css('display', 'block');
                } else {
                    $(item).css('display', 'none');
                }
            })
        };
        //autoChange
        const autoChange = () => {
            autoTimer = setInterval(() => {
                imgIndex++;
                if (imgIndex >= $imgList.length) {
                    imgIndex = 0;
                }
                changeBanner();
            }, 2000);
        };
        autoChange();
        //鼠标划入清除定时器
        $bannerBox.on('mouseenter', function () {
            clearInterval(autoTimer);
        }).on('mouseleave', function () {
            autoChange();
        });
        //实现点击切换
        $navList.on('click', function (ev) {
            ev.preventDefault();
            clearInterval(autoTimer);
            imgIndex = $(this).index();
            changeBanner();
        })
    });

    //搜索框区域
    $plan.add(() => {
        $searchTabList.on('click', function () {
            let index = $(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            $searchBar.eq(index).removeClass('hide').siblings().addClass('hide');
        });
    });

    return {
        init: function () {
            newP.then((data) => {
                $plan.fire(data);
            })
        }
    }
})(jQuery);
bannerModule.init();