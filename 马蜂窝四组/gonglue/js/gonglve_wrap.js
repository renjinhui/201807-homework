~function () {
    var mainBox = document.getElementById('mainBox'),
        toTop = document.getElementsByClassName('toolBar-toTop')[0],
        wrapper = document.getElementsByClassName('wrapper')[0],
        toolBar=document.getElementsByClassName('toolBar')[0],
        p = 0,
        data = null,
        m = 0;
    //———获取数据———
    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'json/data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
    }

    getData();
    //———显示数据———
    function giveHtml() {
        var str = '';
        if (m >= 1) {
            if (p % 2 == 0) {
                data.forEach((item, index)=> {
                    if (index >= 5)return;
                    switch (item.n) {
                        case 1:
                            str += `<main n="1">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_youji"></i>
                                来自
                                <strong>游记</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                    <span class="author">
                                        <img src=${item.authorImg} alt="">
                                        ${item.authorNam}
                                    </span>
                                        <span class="number">${item.num_1}浏览，${item.num_2}评论</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                            break;
                        case 2:
                            str += `<main n="2">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_gonglve"></i>
                                来自
                                <strong>自由行攻略</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.tiyan}</span>
                                  蜂蜂体验过
                                <i class="icon_tiyan"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <div class="item_txt">
                                <div class="info">${item.info}</div>
                            </div>
                            <div class="item_img">
                                <ul class="clearfix">
                                    <li>
                                        <img src=${item.pic_1} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_2} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_3} alt="">
                                    </li>
                                    <li>${item.num_1}浏览</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </main>`;
                            break;
                        case 3:
                            str += `<main n="3">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_wenda"></i>
                                来自
                                <strong>问答</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                        <span class="number">${item.num_1}浏览，${item.num_2}回答</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                            break;
                    }
                });
            }
            if (p % 2 == 1) {
                data.reverse().forEach((item, index)=> {
                    if (index >= 5)return;
                    switch (item.n) {
                        case 1:
                            str += `<main n="1">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_youji"></i>
                                来自
                                <strong>游记</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                    <span class="author">
                                        <img src=${item.authorImg} alt="">
                                        ${item.authorNam}
                                    </span>
                                        <span class="number">${item.num_1}浏览，${item.num_2}评论</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                            break;
                        case 2:
                            str += `<main n="2">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_gonglve"></i>
                                来自
                                <strong>自由行攻略</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.tiyan}</span>
                                  蜂蜂体验过
                                <i class="icon_tiyan"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <div class="item_txt">
                                <div class="info">${item.info}</div>
                            </div>
                            <div class="item_img">
                                <ul class="clearfix">
                                    <li>
                                        <img src=${item.pic_1} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_2} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_3} alt="">
                                    </li>
                                    <li>${item.num_1}浏览</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </main>`;
                            break;
                        case 3:
                            str += `<main n="3">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_wenda"></i>
                                来自
                                <strong>问答</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                        <span class="number">${item.num_1}浏览，${item.num_2}回答</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                            break;
                    }
                });
            }
            mainBox.innerHTML += str + `<a href="javascript:;" class="downloadBar"><span>加载更多</span><i></i></a>`
        } else {
            data.forEach((item, index)=> {
                switch (item.n) {
                    case 1:
                        str += `<main n="1">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_youji"></i>
                                来自
                                <strong>游记</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                    <span class="author">
                                        <img src=${item.authorImg} alt="">
                                        ${item.authorNam}
                                    </span>
                                        <span class="number">${item.num_1}浏览，${item.num_2}评论</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                        break;
                    case 2:
                        str += `<main n="2">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_gonglve"></i>
                                来自
                                <strong>自由行攻略</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.tiyan}</span>
                                  蜂蜂体验过
                                <i class="icon_tiyan"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <div class="item_txt">
                                <div class="info">${item.info}</div>
                            </div>
                            <div class="item_img">
                                <ul class="clearfix">
                                    <li>
                                        <img src=${item.pic_1} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_2} alt="">
                                    </li>
                                    <li>
                                        <img src=${item.pic_3} alt="">
                                    </li>
                                    <li>${item.num_1}浏览</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </main>`;
                        break;
                    case 3:
                        str += `<main n="3">
                    <div class="item clearfix">
                        <a class="clearfix" href="https://www.mafengwo.cn/i/10347290.html">
                            <div class="item_bar clearfix">
                            <span class="item_bar_left">
                                <i class="icon_wenda"></i>
                                来自
                                <strong>问答</strong>
                            </span>
                                <span class="item_bar_right">
                                <span>${item.ding}</span>
                                 蜂蜂顶
                                <i class="icon_ding"></i>
                            </span>
                            </div>
                            <div class="item_title">${item.title}</div>
                            <dl class="item_content">
                                <dt>
                                    <img src=${item.pic} alt="">
                                </dt>
                                <dd>
                                    <div class="info">${item.info}</div>
                                    <div class="dd_bottom">
                                        <span class="number">${item.num_1}浏览，${item.num_2}回答</span>
                                    </div>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </main>`;
                        break;
                }
            });
            mainBox.innerHTML += str + `<a href="javascript:;" class="downloadBar"><span>加载更多</span><i></i></a>`;
        }
    }

    giveHtml();
    //———显示更多———
    function getMore() {
        mainBox.T = document.documentElement.scrollTop;
        mainBox.H = document.documentElement.clientHeight;
        mainBox.barTop = $('#mainBox .downloadBar').offset().top + $('#mainBox .downloadBar').outerHeight();
        if (mainBox.T + mainBox.H >= mainBox.barTop) {
            getData();
            giveHtml();
        }
    }

    //———屏幕滚动———
    window.onscroll = function () {
        mainBox.t = document.documentElement.scrollTop;
        mainBox.h = document.documentElement.clientHeight;
        var $instance = $(wrapper).offset().top + wrapper.offsetHeight;
        //———获取更多数据———
        if (m >= 1 && mainBox.T + mainBox.H >= mainBox.barTop) {
            var downloadBar = document.getElementsByClassName('downloadBar')[0];
            /*$('#mainBox .downloadBar').on('click', function () {
             console.log(100);
             // getMore();
             // removeA();
             });*/
            downloadBar.onclick = function () {
                console.log(100);
                getMore();
                removeA();
                p++;
            }
        } else {
            getMore();
            removeA();
        }
        //———控制‘返回顶部’的显示和隐藏———
        if (mainBox.t >= 500) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
        //———控制‘toolBar’的位置———
        if (mainBox.t + mainBox.h <= $instance) {
            toolBar.style.position='fixed';
        }else{
            toolBar.style.position='absolute';
        }
    };
    //———移除多余的a标签———
    function removeA() {
        var n = $('#mainBox').children('a').length;
        if (n == 2) {
            $('#mainBox').children('a')[0].remove();
            m++;
        }
    }

    //———点击返回顶部———
    function backToTop() {
        if (toTop.timer != null)return;
        var C = document.documentElement.scrollTop,
            D = 2000,
            T = 0,
            S = C / D;
        toTop.timer = setInterval(()=> {
            T += 17;
            var M = S * T;
            if (T >= D) {
                clearInterval(toTop.timer);
                toTop.timer = null;
                M = C;
            }
            document.documentElement.scrollTop = C - M;
            document.body.scrollTop = C - M;
        }, 17)
    }

    toTop.onclick = backToTop;

    //———刷新返回顶部———
    window.onload = function () {
        console.log(2);
        console.log(document.documentElement.scrollTop);
        if (mainBox.t != 0) {
            console.log(1);
            document.documentElement.scrollTop = 0;
        }
        console.log(document.documentElement.scrollTop);
    }

}();