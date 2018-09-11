var $oul=$('.ulBox');

/*轮播图*/
function bannerFn() {
    var mySwiper = new Swiper ('.bannerBox', {
        autoplay:{
            disableOnInteraction:true,
            delay:10000
        },
        loop: true,
        pagination: { //分页器
            el: '.bulletsBox',  //分页器的盒子
            type: 'bullets',  //分页器的类型
        },
    });
}
/*获取数据*/
$.ajax({
    type: 'get',
    url: 'data/banner.json',
    data: {t: 123, q: 234},
    success: function (d) {
        giveHtml1(d);
    },
    error: function () {
    }
});

/*渲染页面*/
function giveHtml1(data) {
    data=data||[];
    var str='';//存储 拼接好的 结构字符串
    data.forEach((item)=>{
        str+=`<li class="swiper-slide">
                    <a href="##">
                        <img src="${item.img}" alt="">
                        <div>${item.title}</div>
                    </a>
                </li>`
    });
    $oul.html(str);
    bannerFn();
}






