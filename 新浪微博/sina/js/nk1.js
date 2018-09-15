var data=null,
    oUl=document.getElementsByClassName('content_box')[0],
    oDiv=oUl.getElementsByTagName('div');
var tip=document.getElementsByClassName('loadTip')[0];
var tip1=document.getElementsByClassName('endTip')[0];
var footer=document.getElementsByClassName('footer')[0];
console.log(oUl);

function getData() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','data/index.json',false);
    xhr.onreadystatechange=function () {
        if (xhr.readyState===4&&/^2\d{2}|304/.test(xhr.status)){
            data= utils.toJson( xhr.responseText)
        }
    };
    xhr.send();
}
getData();
function giveHtml2(data) {
    data.forEach(function (item,index) {
        var {type,img,video,title,content,icon,name,time,zan,comment,trans}=item;
        var li=document.createElement('li');
        var str='';
        if (type==1){
            str=`<div class="ztyw">
             <div class="pic">
                        <img src="${img}"  alt="">
                    </div>
             <div class="list_des">
                        <h3 class="list_title">
                            <a href="##"class="may_tex">${title}</a>
                            <div>${content}</div>
                        </h3>
                        <div class="icon_box">
                            <a href="##">
                            <span class="icon_face">
                                <img src="${icon}" alt="">
                            </span>
                            </a>
                            <a href="##">
                                <span class="name_box">${name}</span>
                            </a>
                            <span class="time">${time}</span>
                            <span class="zan">
                           <em class="icon W_ficon">ñ</em>
                            <em class="num">${zan}</em>
                        </span>
                            <span class="rLine"></span>
                            <span class="comment">
                          <em class="icon W_ficon"></em>
                            <em class="num">${comment}</em>
                        </span>
                            <span class="rLine"></span>
                            <span class="trans">
                            <em class="icon W_ficon"></em>
                            <em class="num">${trans}</em>
                        </span>

                        </div> 
              </div>`;
        }
        if(type==4){
            str=`<div class="swxt">
                  <h3 class="list_tile">
                        <a href="##" class="may_tex">${title}</a>
                        <div>${content}</div>
                    </h3>
                  <div class="list_pic">
                        <div class="pic">
                            <img src="${img}" alt="">
                        </div>
                        <div class="pic">
                            <img src="${img}" alt="">
                        </div>
                        <div class="pic">
                            <img src="${img}" alt="">
                        </div>
                        <div class="pic">
                            <img src="${img}"  alt="">
                        </div>
                    </div>
                  <div class="icon_box">
                        <a href="##">
                            <span class="icon_face">
                                <img src="${icon}" alt="">
                            </span>
                        </a>
                        <a href="##">
                            <span class="name_box">${name}</span>
                        </a>
                        <span class="time">${time}</span>
                        <span class="zan">
                           <em class="icon W_ficon">ñ</em>
                            <em class="num">${zan}</em>
                        </span>
                        <span class="rLine"></span>
                        <span class="comment">
                          <em class="icon W_ficon"></em>
                            <em class="num">${comment}</em>
                        </span>
                        <span class="rLine"></span>
                        <span class="trans">
                            <em class="icon W_ficon"></em>
                            <em class="num">${trans}</em>
                        </span>

                    </div>
                  </div>`;
        }
        if(type==0){
            str=`<div class="zpyw">
                  <div class="vid_box">
                        <div class="video">
                            <img src="${video}" alt="">
                            <i class="vid_icon vid_icon_box"></i>
                        </div>
                    </div>
                  <div class="list_des">
                            <h3 class="list_title">
                                <a href="##" class="may_tex">${title}</a>
                    <div>${content}</div>
                            </h3>
                            <div class="icon_box">
                                <a href="##">
                            <span class="icon_face">
                               <img src="${icon}" alt="">
                            </span>
                                </a>
                                <a href="##">
                                    <span class="name_box">${name}</span>
                                </a>
                                <span class="time">${time}</span>
                            </div>
                            <div class="icon_box icon_box_btm">
 <span class="zan">
                           <em class="icon W_ficon">ñ</em>
                            <em class="num">${zan}</em>
                        </span>
                                <span class="rLine"></span>
                                <span class="comment">
                          <em class="icon W_ficon"></em>
                            <em class="num">${comment}</em>
                        </span>
                                <span class="rLine"></span>
                                <span class="trans">
                            <em class="icon W_ficon"></em>
                            <em class="num">${trans}</em>
                        </span>

                            </div>
                        </div>
                  </div>`;
        }
        li.innerHTML=str;
        oUl.appendChild(li);
    })
}
giveHtml2(data);
window.onscroll=function () {
    getMore();
};
function getMore() {
    var scroT=utils.scrollT();
    var cliH=utils.clientH();
    var tarT =utils.offset(footer).t;
    if(scroT<(cliH*10)){
        if (scroT+cliH>tarT) {
            utils.css(tip, 'display', 'block');
            getData();
            giveHtml2(data);
        }
    }else {
        utils.css(tip,'display',"none");
        utils.css(tip1,'display',"block");
    }
};


