/*网页游戏的选项卡*/
let $olis=$('.center-top>ul>li'),
    $content=$('.content'),
    $content1=$('.content:nth-child(1)'),
    $content2=$('.content:nth-child(2)'),
    $content3=$('.content:nth-child(3)');

$olis.on('mouseenter',function () {
    $(this).addClass('current').siblings().removeClass('current');
    var n=$(this).index();
    $content.eq(n).show().siblings().hide();});

/*AJAX*/
/*网页游戏选项卡放入页面中*/
$.ajax({
    type:'get',
    url:'./data/xt-hot.json',

    data:{q:1},
    success:function (data) {
        giveHtml(data,$content1);
        console.log(data);
    },
    error:function () {

    }
});

$.ajax({
    type:'get',
    url:'./data/xt-love.json',
    data:{q:1},
    success:function (data2) {
        giveHtml(data2,$content2);
        console.log(data2);
    },
    error:function () {

    }
});

$.ajax({
    type:'get',
    url:'./data/xt-game.json',
    data:{q:1},
    success:function (data3) {
        giveHtml(data3,$content3);
        console.log(data3);
    },
    error:function () {

    }
});
/*把数据放到页面上去*/
function giveHtml(data,ele) {
    var str='';
    data.forEach((item,index)=>{
        str += ` <div><a href="##"><img src="${item.img}" alt=""></a>
                        <p class="name">${item.name}</p>
                        <div class="float-play">
                            <a href="##"class="left-a"> <i class="lf">礼包</i>|<i>官网</i></a> <a href="##" ><span>进入游戏</span>
                            <em></em>
                        </a></div></div>`
    });

        ele.html(str);

}

/*推荐游戏右侧选项卡*/


/*
* h5游戏部分二维码显示
* */
// let $erweima=$('.erweima'),
//     $play=$('.play');
// for(let i=0;i<$play.length;i++){
//     $play.index(i).on('mouseenter',function () {
//         $erweima.index(i).show()
//     });
//     $play.index(i).on('mouseleave',function () {
//         $erweima.index(i).hide();
//     });
//
// }

let play=document.getElementsByClassName('play');
let erweima=document.getElementsByClassName('erweima');
console.log(play, erweima);
for(let i=0;i<play.length;i++){
    play[i].onmouseenter=function () {
        erweima[i].style.display="block";
        console.log(1);
    }
    play[i].onmouseleave=function () {
        erweima[i].style.display="none";
    }
}



