var $head_nav = $('.head_nav ul li'),
    $nav_menu = $('.nav_menu'),
    $cateUl = $('.cateUl'),
    $oLis = null,
    $banner = $('.ul_box'),
    $child_box = $('.child_box'),
    $menu_ul = $('.menu_ul'),
    $sg_banner = $('.sg_banner'),
    $timer_title = $('.timer_titile'),
    $timer_box = $('.timer_box');

//获取分类列表
function getData(type,url){
    var res = null;
    $.ajax({
        type:type,//请求方式
        url:url,//请求路径
        async:false,
        success:function (succ) {
            res = succ;
        },
        error:function (err) {
            res = err;
        }
    });
    return res;
};

var category = getData('get','./data/category.json');
appendCategory(category);
function appendCategory(data) {
    var str = '';
    data.forEach((item) => {
        str += `<li class="curr">${item.category}<span class="sep"> > </span></li>`;
    })
    $cateUl.html(str);
    $oLis = $('.curr');
}

var banner = getData('get','./data/banner.json');
appendBanner(banner);
function appendBanner(data) {
    var str = '';
    data.forEach((item) => {
        str += `<li class="swiper-slide"><img src="${item.pic}" alt=""></li>`;
    })
    $banner.html(str);
    bannerFn();
}

function bannerFn() {
    var mySwiper = new Swiper('.banner',{
        autoplay:{
            disableOnInteraction:true
        },
        loop:true,
        pagination: {//分页器
            el: '.pageBox',//分页器的盒子
            type: 'bullets',//分页器的类型
            bulletActiveClass: 'active',
            clickable :true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
}

$oLis.on('mouseenter',function () {
    var n = $(this).index();
    $(this).addClass('bgc').siblings().removeClass('bgc');
    showInfo(category[n]['child']);
});
$oLis.on('mouseleave',function () {
    $(this).removeClass('bgc');
    $child_box.html('').hide();
});
function showInfo(data) {
    var str = '';
    data.forEach((item,index) => {//循环鼠标划入分类下的所有子分类
        if(index % 6 == 0){//每个ul下6个li，所以对6求余
            str = '';
        }
        str += `<li><img src="${item.img}" alt=""><span>${item.title}</span></li>`;
        if((index + 1) % 6 == 0 && index > 0){//每6个li创建一个ul，判断当前索引是否是第六个
            var eleUl = document.createElement('ul');
            eleUl.innerHTML = str;
            $child_box[0].appendChild(eleUl);
        }else if(index == data.length - 1){//如果当前索引不是第六个，但是是最后一个也需要创建一个ul
            var eleUl = document.createElement('ul');
            eleUl.innerHTML = str;
            $child_box[0].appendChild(eleUl);
        }
    })
    $child_box.show();
}

var nav_menu = getData('get','./data/nav_menu.json');

function appendMenu(data) {
    var str = '';
    data.forEach((item) => {
        str += `<li>`;
        if(item.flag){
            str += `<span class="flag">${item.flag}</span>`;
        }
        str += `<img src="${item.img}" alt="">
                    <p class="title">${item.title}</p>
                    <p class="price">${item.price}</p>
                </li>`;
    })
    $menu_ul.html(str);
}

$head_nav.on('mouseenter',function () {
    var n = $(this).index();
    if(nav_menu[n]['child'].length > 0){
        appendMenu(nav_menu[n]['child']);
        $nav_menu.show();
    }
});
$head_nav.on('mouseleave',function () {
    $menu_ul.html('');
    $nav_menu.hide();
});

var sg_list = getData('get','./data/sg_banner.json');
appendSg(sg_list);
function appendSg(data) {
    var str = '';
    data.forEach((item) => {
        str += `<li class="swiper-slide">`;
        if(item.flag){
            str += `<span class="flag">${item.flag}</span>`;
        }
        str += `<img src="${item.img}" alt="">
                <p class="title">${item.title}</p>
                <p class="desc">${item.desc}</p>
                <p class="price"><span class="now">${item.price}</span><span class="old">${item.del_price}</span></p>
            </li>`;
    })
    $sg_banner.html(str);
    sgFn();
}
function sgFn() {
    var mySwiper = new Swiper('.sg_main',{
        autoplay:false,
        slidesPerView : 'auto',
        outline: 'none',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
}

//定时器
function sgTimer() {
    var nowTime = new Date(); // 一定是要获取最新的时间
    var endTime = new Date(`${nowTime.getFullYear()}-${nowTime.getMonth() + 1}-${nowTime.getDate()} ${nowTime.getHours() + 1}:00:00`);// 距离下一个小时的毫秒数
    var second = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
    var timer_titile = `${nowTime.getHours() + 1}:00`;
    var m = parseInt(second / 60 );// second / 3600 一共的分钟数
    var s = parseInt(second - m * 60 ); // 当前的秒

    m<10 ? m="0"+m : m;
    s<10 ? s="0"+s : s;
    $timer_title.html(timer_titile);
    $timer_box.eq(1).html(m);
    $timer_box.eq(2).html(s);

    timer = setInterval(function () {
        sgTimer();
    },1000);
}
sgTimer();

