
const containerRight = (()=>{
    var $lis = $('.header_r ul li'),
        $choose_btn=$('.choose_btn'),
        $choose=$('#down-choose-wr'),
        $input = $('.input_wr'),
        $inputX = $('.input_wr a'),
        $pages=$('.m-pagination a'),
        $body_wr = $('.body_wr');
    var data = null;//用来存储从后台获取的数据
    function getData() {
        var xhr =new XMLHttpRequest();
        xhr.open('get','1.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 &&/^2\d{2}$/.test(xhr.status)){
                data = utils.toJson(xhr.responseText)
            }
        };
        xhr.send();
    }
    getData();
    var bodys =document.getElementsByClassName('tn_body');
    var str = '';
    function giveHTML() {
        data.forEach(function (item,index) {
            var {img,title,dd,dizhi,name,head,app} = item;
            str= `<div class="tn_item">
        <div class="tn_img">
                    <img src="${img}" alt="">
                </div>
        <div class="tn_wrapper">
            <dl>
                <dt>
                    <a href="" class="tlt">${title}</a>
                    <a href="" class="chat">
                        <i></i>
                        "APP"
                        <img src="${app}" alt="" class="chat_img">
                    </a>
                </dt>
                <dd>${dd}</dd>
            </dl>
            <div class="tn_extra">
            <span class="tn_ding">
                <em>1380</em>
                <a href=""></a>
                    </span>
            <span class="tn_place">
                        <i></i>
                        <a href="">${dizhi}</a>,by
                    </span>
            <span class="tn_user">
                        <img src="${head}" alt="">
                      小浣熊
                    </span>
            <span class="tn_nums">
                        <i></i>
                        9307/202
                    </span>
        </div>
        </div>
    </div>`;
            bodys[0].innerHTML += str;
            bodys[1].innerHTML += str;
        });
    }
    giveHTML(data);
    var clientH = $body_wr.clientHeight;
    $pages.on('click',function () {
        $(this).addClass('pg-current').siblings().removeClass('pg-current') ;
    });
    $lis.on('click',function () {
        $(this).addClass('current').siblings().removeClass('current') ;
        $body.eq($(this).index()).show().siblings('.body_wr').hide();
    });
    $choose.on('click',function () {
        $input.show()
    });
    $inputX.on('click',function () {
        $input.hide();
    });
    $choose_btn.click(function () {
        $('.tn_body').animate({
            opacity:0
        });
        setTimeout(function () {
            $('.tn_body').animate({
                opacity:1
            });
            $(document.documentElement).animate({
                scrollTop:$('.header_r').offset().top
            })
        },500)
    });
    $pages.click(function () {
        $('.tn_body').animate({
            opacity:0
        });
        setTimeout(function () {
            $('.tn_body').animate({
                opacity:1
            });

            $(document.documentElement).animate({
                scrollTop:$('.header_r').offset().top
            })

        },500)
    });
})();

const leftAside = (() => {
    /*
     * 第一模块
     * */
    function Banner(id, url) {
        this.data = null;
        this.timer = null;
        this.url = url;
        this.odiv = document.getElementById(id);
        this.oUl = this.odiv.getElementsByClassName('traveller-images')[0];
        this.tipBox = utils.getByClass('traveller-tip_box', this.odiv)[0];
        this.tips = this.tipBox.getElementsByClassName('tip');
        this.n = 0; //记录图片个数,
        this.index = 0; //记录当前显示图片的索引
        this.boxW = utils.css(this.odiv, 'width');
        this.init();
    }
    Banner.prototype = {
        constructor: Banner,
        getData: function getData() {
            var xhr = new XMLHttpRequest();
            xhr.open('get', this.url, false);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                    this.data = utils.toJson(xhr.responseText);
                }
            };
            xhr.send();
        },

        giveHTML: function giveHtml() {
            var str = '';
            var tipStr = '';
            this.data.push(this.data[0]);
            this.data.forEach((item, index) => {
                var {
                    pic,
                    title,
                    h
                } = item;
                str += ` <li>
            <img src="${pic}"  alt="">
            <h3><a href="#">${h}</a></h3>
            <p>${title}</p>
        </li>`;
                if (index < this.data.length - 1) {
                    tipStr += `<li class="tip ${index == 0 ? 'current' : ''}"></li>`;
                }
                this.n = this.data.length;
                this.oUl.innerHTML = str;
                this.tipBox.innerHTML = tipStr;
                this.oUl.style.position = 'relative';
                this.oUl.style.width = this.boxW * this.n + 'px'; //设置 OUL的宽度
            });
        },
        autoPlay: function autoPlay() {
            this.timer = window.setInterval(() => {
                this.play();
            }, 5000)
        },

        play: function play() {
            if (utils.css(this.oUl, 'left') % this.boxW != 0) return;
            this.index++;
            if (this.index >= this.n) {
                utils.css(this.oUl, 'left', 0);
                this.index = 1
            }
            if (this.index <= -1) {
                utils.css(this.oUl, 'left', -this.boxW * (this.n - 1));
                this.index = this.n - 2
            }
            [...this.tips].forEach((item, index) => {
                utils.removeClass(item, 'current');
            });
            if (this.index == this.n - 1) {
                utils.addClass(this.tips[0], 'current');

            } else {
                utils.addClass(this.tips[this.index], 'current');
            }

            var curL = -this.boxW * this.index;
            myAnimate(this.oUl, 500, {
                left: curL
            })

        },
        tipClick: function tipClick() {
            for (let i = 0; i < this.tips.length; i++) {
                this.tips[i].onclick = () => {
                    this.index = i - 1;
                    this.play();
                }
            }
        },

        init: function () {
            this.getData();
            this.giveHTML();
            this.autoPlay();
            this.tipClick();
        }
    };
    // var banner = new Banner('img1','data/data.json');
    var banner1 = new Banner('img1', 'data/data.json');
    var banner2 = new Banner('img2', 'data/data2.json');

})();

const headerFooter = (() => {
	let dhNav = document.getElementsByClassName('hdNav')[0];
	let oLis = dhNav.getElementsByTagName('li');
	let oA = document.getElementsByClassName('li_a')
	let ary = [];

	[...oLis].forEach((item, index) => {
		if (index !== 3 && index !== 5) {
			ary.push(oLis[index])
		}
	})
	ary.forEach((item2) => {
		item2.onmouseenter = function() {
			item2.style.borderBottom = '2px solid #ff9d00'

		}
		item2.onmouseleave = function() {
			item2.style.border = ''
		}
	})
})();

