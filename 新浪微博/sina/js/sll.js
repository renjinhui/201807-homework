var index=0;
var timer=null;
var oul=document.getElementsByClassName('oul')[0];
var dotbox=document.getElementsByClassName('dotbox')[0];
var dots=dotbox.getElementsByTagName('li');

// 轮播图
function aotuplay() {
    timer=setInterval(function () {
        play()
    },2000)
}
aotuplay();
function play() {
    index++;
    if(index==5){
        utils.css(oul,'left',0);
        index=0;
    }
    [...dots].forEach((item,index)=>{
        utils.remove(item,'current')
    });
    utils.addClass(dots[index],'current');
    //utils.css(oul,'left',-868*index);
    myAnimate(oul,1000,{left:-868*index})
}


// 热门节目
var data=null;
var uls=document.getElementsByClassName('list')[0];
function getData() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','json-sll/data.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&/^2\d{2}/.test(xhr.status)){
            data=utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();
console.log(data);



function giveHtml() {
    var str='';
    data.forEach(function(item){
       var {picImg,time,h3,name,see}=item;
       str+=`<li class="lists">
                            <div class="img">
                                <img src="${picImg}" alt="">
                                <span>${time}</span>
                            </div>
                            <h3>${h3}</h3>
                            <p class="name"><a href="">${name}</a></p>
                            <p class="see">${see}</p>
                        </li>`
    });
    uls.innerHTML=str;
};
giveHtml();



// 系列节目
var data=null;
var seriesbox=document.getElementsByClassName('seriesbox')[0];
var series=document.getElementsByClassName('series')[0];
console.log(series);
var title=document.getElementsByClassName('title')[0];
var tv=document.getElementsByClassName('tv')[0];
var footer=document.getElementsByClassName('footer')[0];
console.log(tv);
console.log(title);
function getData2() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','json-sll/data2.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&/^2\d{2}/.test(xhr.status)){
            data=utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData2();
console.log(data);

// function giveHtml2() {
//     var tilstr='';
//     var str='';
//     // tilstr=`<div class="title">
//     //                         <div class="img">
//     //                             <img src="//wx1.sinaimg.cn/thumb150/0071Jvc4ly1frm6t469vhj326r21te82.jpg" alt="">
//     //                         </div>
//     //                         <div class="name">
//     //                             <span class="tvname">熊小米第一季</span>
//     //                             <span class="number">6,384播放量</span>
//     //                             <span class="weibo">官方微博: 一条鱼爱画画</span>
//     //                         </div>
//     //                         <div class="attention">
//     //                             <a href="">关注官微</a>
//     //                         </div>
//     //                     </div>`;
//     data.forEach(function(item){
//         var {picImg,time,h3,name,see}=item;
//
//         str+=`<div class="tvs">
//                             <div class="img">
//                                 <img src="${picImg}" alt="">
//                                 <span>${time}</span>
//                             </div>
//                             <h3>${h3}</h3>
//                             <span class="date">${name}</span>
//                             <span class="watch">${see}</span>
//                         </div>`
//     });
//     //title.innerHTML=tilstr;
//     tv.innerHTML=str;
// };
// giveHtml2();

function giveHtml2() {
    var tilstr='';
    var str='';
    data.forEach(function(item){
        if(item.type=='true'){
            tilstr=`
                            <div class="img">
                                <img src="${item.picImg}" alt="">
                            </div>
                            <div class="name">
                                <span class="tvname">${item.tvname}</span>
                                <span class="number">${item.number}</span>
                                <span class="weibo">${item.weibo}</span>
                            </div>
                            <div class="attention">
                                <a href="">关注官微</a>
                            </div>
                        `;
        }else{
            var {picImg,time,h3,name,see}=item;
            str+=`<div class="tvs">
                            <div class="img">
                                <img src="${picImg}" alt="">
                                <span>${time}</span>
                            </div>
                            <h3>${h3}</h3>
                            <span class="date">${name}</span>
                            <span class="watch">${see}</span>
                        </div>`
        }
    });
    title.innerHTML=tilstr;
    tv.innerHTML=str;
}
giveHtml2();




function getMore() {
    var cliT=utils.clientH(),
        scrT=utils.scrollT(),
        tarT=footer.clientHeight+utils.offset(footer).t;
    console.log(cliT,scrT,tarT);

    if(cliT+scrT>tarT){
        getData2();
        giveHtml2();
    }
}


// window.onscroll=function () {
//     getMore();
// }


//  回到顶部
var totop=document.getElementsByClassName('totop')[0];
totop.onclick=function () {
    document.documentElement.scrollTop=0;
}
function event() {
    var scrT=utils.scrollT();
    //console.log(scrT);
    if(scrT>200){
        utils.css(totop,'display','block')
    }else{
        utils.css(totop,'display','none')
    }

}
window.onscroll=function () {
    //getMore();
    event()
}


// input输入框
var input=document.getElementsByClassName('input')[0];
var seek=document.getElementsByClassName('seek')[0];

input.onfocus=function () {
    utils.css(seek,'background','#fff');
    utils.css(seek,'border','none');
    utils.css(input,'border','1px solid #fa7d3c');

};
input.onblur=function () {
    utils.css(seek,'background',' #f2f2f5;');


};
