/**
 * Created by Administrator on 2018/9/8.
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
      请输入您的手机号码`
});
$tel_num.on('blur',function () {
    $foreign_tel.removeClass('W_input_focus');
    oP.className='error'
    oP.style.display='block';
    oP.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入手机号码`
});

var set_input=document.getElementsByClassName('setting')[0];
var oP2=document.getElementsByClassName('error')[1];
var oP3=document.getElementsByClassName('error')[2];
var jh_input=document.getElementsByClassName('jh_inp')[0];
    console.log(jh_input)
set_input.onfocus=function () {
var $this=$(this);
    $this.addClass('W_input_focus')
    oP2.className='notice';
    oP2.style.display='block';
    oP2.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入6-16位数字、字母或常用符号,字母区分大小写`
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
    $this.addClass('W_input_focus')
    oP3.className='notice';
    oP3.style.display='block';
    oP3.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入短信激活码`
};
jh_input.onblur=function () {
    var $this=$(this);
    $this.removeClass('W_input_focus')
    oP3.className='error'
    oP3.style.display='block';
    oP3.innerHTML=`<span class="icon_rederrors notice_span"></span>
      请输入短信激活码`

}
// 邮箱注册




