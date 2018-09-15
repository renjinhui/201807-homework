~function () {
    console.log(document.documentElement.clientWidth);
    let a=1
  $('.rightNav .left').click(function () {
      $('.rightNav .idLogo').show();
      $('.rightNav .logoContent').hide();
      $('.rightNav .left').addClass('current')
      $('.rightNav .right').removeClass('current');
      $('.rightNav .idLogoBig').show();
      $('.rightNav .phoneLogo').hide();
      a=0;
      $('.rightNav .changeBtn').removeClass('changeBtn1');
  })
  $('.rightNav .right').click(function () {
      $('.rightNav .idLogo').hide();
      $('.rightNav .logoContent').show();
      $('.rightNav .left').removeClass('current')
      $('.rightNav .right').addClass('current');
      $('.rightNav .phoneBg').show();
      $('.rightNav .changeBtn').addClass('changeBtn1');
      setTimeout(function () {
          $('.rightNav .phoneBg').hide();
      },4000);
      a=0;
  })
$('.rightNav .ewm').mouseover(function () {
    $('.rightNav .phoneBg').show();
}).mouseleave(function () {
    $('.rightNav .phoneBg').hide();
})
$('.rightNav .changeBtn').click(function () {
    if (a){
        $('.rightNav .changeBtn').addClass('changeBtn1');
        $('.rightNav .idLogo').hide();
        $('.rightNav .logoContent').show();
        $('.rightNav .left').removeClass('current')
        $('.rightNav .right').addClass('current');
        $('.rightNav .phoneBg').show();
        setTimeout(function () {
            $('.rightNav .phoneBg').hide();
        },4000)
        a=0
    }
    else{
        $('.rightNav .changeBtn').removeClass('changeBtn1');
        $('.rightNav .idLogo').show();
        $('.rightNav .logoContent').hide();
        $('.rightNav .idLogoBig').hide();
        $('.rightNav .phoneLogo').show();
        $('.rightNav .right').removeClass('current')
        a=1
    }
});
    window.addEventListener("scroll",function () {

        var curheight=$('.mainArea').height()+$('.footer').height()+70
        $('#b').css({
            height:curheight
        })
        if(document.documentElement.scrollTop>=$('.header')[0].clientHeight){
            $('.leftNav').css({
                opacity:0
            });
            $('.leftNav1').show();
            $('.header').css({
                boxShadow:'2px 2px 1px #eee'
            })

        };
        if(document.documentElement.scrollTop<=$('.header')[0].clientHeight){
            $('.leftNav').css({
                opacity:1
            });
            $('.leftNav1').hide();
            $('.header').css({
                boxShadow:''
            })
        }
    },false)

    $('.denglu').click(function () {
        $('.fiexdLogo').show();
        $('#b').show();
    })
    $('.close').click(function () {
        $('#b').hide();
        $('.fiexdLogo').hide()
    })
    $('.fiexdLogo .right').click(function () {
        $('.fiexdLogo .idLogo').hide();
        $('.fiexdLogo .logoContent').show()
        $('.fiexdLogo .right').addClass('current');
        $('.fiexdLogo .left').removeClass('current');
    });
    $('.fiexdLogo .left').click(function () {
        $('.fiexdLogo .idLogo').show();
        $('.fiexdLogo .logoContent').hide()
        $('.fiexdLogo .right').removeClass('current');
        $('.fiexdLogo .left').addClass('current');
    })
    $('.zhuce').click(function () {
        window.open(url='zxjsingup.html')
    })

}()