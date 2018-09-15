
$(document).ready(function(){

    $box=$(".box");
    var index=0;
    setInterval(autoplay,3000);
     
    function autoplay(){
        index++;
        if(index==4){
            $box.css("top",0);
            index=1;
        }
        $box.animate({"top":-36*index+"px"
        }, 1000)
    }
});

//滑动效果
var $huadong=$(".huadong-l");

$huadong.on('mousedown',function () {
    alert("123");
        dragStart.call(this);

        this.DragMove = dragMove.bind(this);
        this.DragEnd = dragEnd.bind(this);
        $(document).on('mousemove',this.DragMove);
        $(document).on('mouseup',this.DragEnd);
        
    });


    function dragStart(e) {
        this.startX = this.offsetLeft;
        this.mx = e.clientX;
    }
    function dragMove(e) {
        var x = e.clientX - this.mx;
        $(this).css({
            left:this.startX + x,
        });
       
    }
    function dragEnd(e) {
       
        $(document).off('mousemove');
        $(document).off('mouseup');
    }