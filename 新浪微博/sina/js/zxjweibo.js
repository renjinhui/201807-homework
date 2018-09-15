/**
 * Created by Administrator on 2018/9/10.
 */
var tel_country=document.getElementsByClassName('tel_country')[0];
var $tel_country=$('.tel_country'),
    $menu_list=$('.layer_menu_list'),
    $icon_addone=$('.icon_addone'),
    $yscroll=$('.y_scroll'),
    $olis=$yscroll.children('li'),
    $foreign_tel=$('.foreign_tel');
$tel_num=$('.tel_num');
var oP=document.getElementsByClassName('error')[0];
console.log($olis);
var flag=0;
/*国旗的点击事件*/
tel_country.onclick=function (e) {
    if(flag==0){
        $tel_country.addClass('W_input_focus');
        $menu_list.css({
            display: 'inline-block'
        });
        flag=1
    }else if(flag==1){
        $tel_country.removeClass('W_input_focus');
        flag=0;
        $menu_list.css({
            display: 'none'
        })
    }
};
// document.onclick=function (e) {
//
//     if(flag==1){
//         $tel_country.removeClass('W_input_focus');
//         flag=0;
//         $menu_list.css({
//             display: 'none'
//         })
//     }
// }
/*点击出现对勾，然后国旗变换，右侧数字变换*/
console.log(tel_country.className)
var str='tel_country '
$olis.on('click',function (e) {
    e.stopPropagation();
    var $this=$(this);
    $this.addClass('select');
    $this.siblings().removeClass('select');
    /*-------------------------*/
    /*实现国旗变换*/
    console.dir(this.getAttribute('action-data'));// 获取正确
    var reg1=/^key=([A-Z]+)&code=(\d+)$/;
    var ary=this.getAttribute('action-data').match(reg1);// 1 和2
    var $num=$('.tel_forenum');
    tel_country.className=str+`${ary[1]}`;
    // $tel_country.addClass(ary[1]);
    $num.text(ary[2]);
    // oDiv.innerText=ary[2];
    $menu_list.css({
        display: 'none'
    });
    $foreign_tel.addClass('W_input_focus')

});
// 给document绑定点击事件
// document.onclick=function () {
//
//     console.log(2);
//     $foreign_tel.removeClass('W_input_focus')
// };
// 给input框绑定点击事件
//   $tel_num.on('focus',function () {
//       $foreign_tel.addClass('W_input_focus');
//       oP.className='notice';
//       oP.style.display='block';
//       oP.innerHTML=`<span class="icon_rederrors notice_span"></span>
//       请输入您的手机号码`
//   });
$tel_num.on('focus',function () {
    $foreign_tel.addClass('W_input_focus');
    oP.className='notice';
    oP.style.display='block';
    oP.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入你的常用邮箱请不要使用私人邮箱作为企业微博的注册邮箱`
});
$tel_num.on('blur',function () {
    $foreign_tel.removeClass('W_input_focus');
    oP.className='error'
    oP.style.display='block';
    oP.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入常用邮箱`
});

var set_input=document.getElementsByClassName('setting')[0];
var oP2=document.getElementsByClassName('error')[1];
var oP3=document.getElementsByClassName('error')[2];
var oP4=document.getElementsByClassName('error')[3];
var jh_input=document.getElementsByClassName('pinPai')[0];
console.log(jh_input)
set_input.onfocus=function () {
    var $this=$(this);
    $this.addClass('W_input_focus')
    oP2.className='notice';
    oP2.style.display='block';
    oP2.innerHTML=`<span class="icon_rederrors notice_span"></span>
      6-16字符组成，区分大小写`
}
set_input.onblur=function () {
    var $this=$(this);
    $this.removeClass('W_input_focus')
    oP2.className='error'
    oP2.style.display='block';
    oP2.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入密码`
}
jh_input.onfocus=function () {
    var $this=$(this);
    $this.addClass('W_input_focus');
    oP3.className='notice';
    oP3.style.display='block';
    oP3.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请填写企业\品牌的全称或无歧义简称可输入4-30位,包括英文、数字和中文`
    if (this.value =='请参考组织/企业/品牌全称'){this.value =''};
};
jh_input.onblur=function () {
    var $this=$(this);
    $this.removeClass('W_input_focus')
    oP3.className='error'
    oP3.style.display='block';
    oP3.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入昵称`
    if (this.value ==''){this.value='请参考组织/企业/品牌全称'}
};
// 验证码
var yanZheng=document.getElementsByClassName('yan_zheng')[0];
yanZheng.onfocus=function () {
    var $this=$(this);
    $this.addClass('W_input_focus')
    oP4.className='notice';
    oP4.style.display='block';
    oP4.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入验证码`
}
yanZheng.onblur=function () {
    var $this=$(this);
    $this.removeClass('W_input_focus')
    oP4.className='error'
    oP4.style.display='block';
    oP4.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入验证码`
}

// 随机数
var changeNum=document.getElementsByClassName('change_num')[0]
var changes=document.getElementsByClassName('change_num')[1]
function getRadom() {
    var  ary=[];
    var i = 0;
    for (; i <4;) {
        var n=Math.round(Math.random()*61);
        if(ary.indexOf(n)==-1){
            ary.push(n);
            i++
        }else {
            i--
        }
    }
    return ary;
}
function getstr() {
    var str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    var str2='';
    var ary=getRadom();
    for (var i = 0; i < 4; i++) {
        var n=ary[i];// 取的随机数
        str2+=str[n];
    }
    return str2;
}

changeNum.onclick=function () {
    changeNum.innerHTML=getstr();// 将随机数字展现在页面上
}
changes.onclick=function () {
    changeNum.innerHTML=getstr();// 将随机数字展现在页面上

}