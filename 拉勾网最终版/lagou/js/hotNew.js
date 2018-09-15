//获取数据
var data=null;
var data2=null;
function getData() {
    var xhr=new XMLHttpRequest();
    var xhr2=new XMLHttpRequest();
    xhr.open('get','json/xt-data2.json',false);
    xhr2.open('get','json/xt-data.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
            data=utils.toJson(xhr.responseText)
        }
    };
    xhr2.onreadystatechange=function () {
        if(xhr2.readyState==4 && /^2\d{2}$/.test(xhr2.status)){
            data2=utils.toJson(xhr2.responseText)
        }
    };
    xhr.send();
    xhr2.send();
}
getData();
console.log(data);
console.log(data2);


//把数据放上去
var minTop=document.getElementsByClassName('minTop')[0];
var oUl=minTop.getElementsByTagName('ul')[0];
var oUl2=minTop.getElementsByTagName('ul')[1];
console.log(oUl);
console.log(oUl2);


function giveHtml(data,ele) {
    var str='';
    for(let i=0;i<data.length;i++){
   str +=`     <li>
            <div class="top">
                <a href="##" >${data[i].job}</a>
                <span class="time">${data[i].time}</span>
                <div class="chat-box">${data[i].chat}
                <div class="chat_pop_up">
		<span class="arrow"></span>
		<dl class="chat_main clearfix">
			<dt><img src="images/img1/erweima.png" alt=""></dt>
			<dd>
				<dl class="chat_head clearfix">
					<dt>
						
							<img class="hr_headpic" src="${data[i].img}" alt="hr头像" width="62" height="62">
						
					</dt>
					<dd>
						<div class="hr_name">${data[i].name}</div>
						<div class="hr_position">${data[i].post}</div>
					</dd>
					<dd class="tips_text">Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！</dd>
				</dl>
			</dd>
		</dl>
	</div>
                
                </div>
                
                <span class="salary">${data[i].pay}</span>
             </div>
        <div class="center">
            <span>${data[i].experience}</span>
            <span>/${data[i].education}</span>
        </div>
            <div class="type">
                <span>${data[i].type1}</span>
                <span>${data[i].type2}</span>
                <span>${data[i].type3}</span>
            </div>
        <div class="bottom">
            <div class="lf-box">
            <img src="${data[i].img}" alt=""></div>
            <div class="rt-box">
                <div class="box1"> <a href="javascript::">${data[i].company}</a></div>
       <div class="box2">
            <span>${data[i].introduce1}</span>
           <span>/ ${data[i].introduce2}</span>
           <span>/ ${data[i].introduce3}</span>
       </div>
            </div>
        </div></li>`
    }
    ele.innerHTML=str;
}
giveHtml(data,oUl);
giveHtml(data2,oUl2);

var zHot=document.getElementsByClassName('zHot')[0];
var zNew=document.getElementsByClassName('zNew')[0];


zHot.onclick=function () {
    oUl.style.display='block';
    oUl2.style.display='none';
    zHot.className+=' current';
    zNew.className='';

};
zNew.onclick=function () {
    oUl2.style.display='block';
    oUl.style.display='none';
    zNew.className+=' current';
    zHot.className='';
};

var chats=document.getElementsByClassName('chat-box');
var cards=document.getElementsByClassName('chat_pop_up');

for (let i = 0; i < chats.length; i++) {
    chats[i].onmouseenter=function () {
        cards[i].style.display='block'
    };
    chats[i].onmouseleave=function () {
        cards[i].style.display='none'
    }
    
}