var $min=$('.min'),
    $menuBox=$min.find('.menu_box');
console.log($menuBox);
$menuBox.on('mouseenter',function () {
    var $this=$(this);
    $this.addClass('current').siblings().removeClass('current');
});