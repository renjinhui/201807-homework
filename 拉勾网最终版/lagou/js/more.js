$navBtn = $('.navBtn');
$nav_top = $('.nav_top');
let a = 1
$navBtn[0].onclick = function () {
    if (a == 0) {
      /*  $($nav_top[0]).hide().next().show();*/
        $($nav_top[0]).animate({display:'none'},5000).next().animate({display:'block'},5000);
        a = 1;
        this.style.background='#fafafa url("images/c.png") center no-repeat'
    }
    else if(a == 1) {
        $($nav_top[0]).show().next().hide();
        $($nav_top[0]).animate({display:'block'},5000).next().animate({display:'none'},5000);
        a = 0;
        this.style.background='#fafafa url("images/d.png") center no-repeat'
    }
}