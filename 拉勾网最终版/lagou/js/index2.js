var commany=function () {
    var data=null;
    var oul=document.getElementsByClassName('model')[0];
    function getdata() {
        var xhr=new XMLHttpRequest();
        xhr.open('get','json/data.json',false);
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4&&/^2\d{2}/.test(xhr.status)){
                data=utils.toJson(xhr.responseText)
            }
        };
        xhr.send();
    };


    function givehtml() {
        var str='';
        data.forEach((item,index)=>{
            var {picImg,company,introduce,level,advantage,num1,num2,num3}=item;
            str+=`<li>
                <!--上半部分-->
                <div class="top">
                <div class="img"><a href=""><img src="${picImg}" alt=""></a></div>
                <p class="company-name"><a href="">${company}</a></p>
                <p class="company-content">${introduce}<span> /</span> ${level}</p>
                <p class="company-advantage">${advantage}</p>
                </div>
                <!--下半部分-->
                <div class="bottom">
                    <a class="item1" href="">
                        <p class="num">${num1}</p>
                        <p class="comment">面试评价</p>
                    </a>
                    <a class="item2" href="">
                        <p class="num">${num2}</p>
                        <p class="comment">面试评价</p>
                    </a>
                    <a  class="item3" href="">
                        <p class="num">${num3}</p>
                        <p class="comment">面试评价</p>
                    </a>
                </div>
            </li>`
        });
        oul.innerHTML=str;
    }
   return {
        init:function () {
            getdata();
            givehtml()
        }
   }
}();
    commany.init();
