let data,
    resumeContainer = document.getElementsByClassName('resumeContainer')[0],
    oAs = resumeContainer.getElementsByTagName('a'),
    userContain = document.getElementsByClassName('userContain')[0],
    orderWrap = userContain.getElementsByClassName('orderWrap')[0],
    tips = orderWrap.getElementsByClassName('both'),
    priceCon = orderWrap.getElementsByClassName('priceCon')[0],
    priceDesc = priceCon.getElementsByClassName('priceDesc')[0],
    down = priceDesc.getElementsByClassName('down')[0],
    up = priceDesc.getElementsByClassName('up')[0],
    minPrice = orderWrap.getElementsByClassName('minPrice')[0],
    maxPrice = orderWrap.getElementsByClassName('maxPrice')[0],
    sure = orderWrap.getElementsByClassName('sure')[0],
    productBox = userContain.getElementsByClassName('product')[0],
    oUl = productBox.getElementsByTagName('ul')[0],
    oImgs = productBox.getElementsByTagName('img'),
    pageNav = document.getElementsByClassName('pageNav')[0],
    pagePrev = pageNav.getElementsByClassName('pagePrev')[0],
    pageNext = pageNav.getElementsByClassName('pageNext')[0],
    pages = pageNav.getElementsByTagName('a');

/*点击事件*/
function markClick() {
    for (let i = 0; i < oAs.length; i++) {
        oAs[i].onclick = function () {
            [...oAs].forEach((item, index) => {
                utils.removeClass(item, 'checked');
            });
            utils.addClass(oAs[i], 'checked');
        }
    }
}

markClick();

function tipClick() {
    for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function () {
            [...tips].forEach((item, index) => {
                utils.removeClass(item, 'on');
                utils.removeClass(item, 'borderleft');
            });
            if (i == 1) {
                utils.addClass(tips[i], 'on');
            }
            utils.addClass(tips[i], 'on');
            utils.addClass(tips[i], 'borderleft');
        }
    }
}

tipClick();

function pageClick() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].onclick = function () {
            if (i == 1) {
                pagePrev.style.opacity = 0;
                pageNext.style.display = 'inline-block';
            }
            if (i >= 2) {
                pagePrev.style.opacity = 1;
                pageNext.style.display = 'inline-block';
            }
            if (i == 8) {
                pagePrev.style.opacity = 1;
                pageNext.style.display = 'none';
            }
            [...pages].forEach((item, index) => {
                utils.removeClass(item, 'currentpage');
            });
            utils.addClass(pages[i], 'currentpage');
        }
    }
}

pageClick();

function getData(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            try {
                data = JSON.parse(xhr.responseText);
            } catch (e) {
                data = eval(`(${xhr.responseText})`);
            }
            giveHtml(data);
        }
    };
    xhr.send();
}

//getData('./data/data1.json');

function giveHtml(data) {
    var str = '';
    data.forEach((item) => {
        str += `<li class="product-list fl cparams_acms_iids show-log-item">
        <div>
            <div class="img-size data-ptp-item">
                <a class="img-link" target="_blank" href="${item.link}">
                    <img src="" trueSrc="${item.picImg}" alt="">
                </a>
            </div>
            <div class="product-info clearfix">
                <div class="price fl">
                    <em class="price-u">¥</em>
                    <span class="price-n">${item.price}.00</span>
                </div>
                <div class="fav fr">
                    <em class="fav-i"></em>
                    <span class="fav-n">${item.collect}</span>
                </div>
            </div>
            <a class="text-link" target="_blank" href="${item.link}">
                <span>${item.title}</span>
            </a>
        </div>
</li>`;
    });
    oUl.innerHTML = str;

}

// giveHtml(data);
/*排序*/
priceCon.onmouseover = function () {
    priceDesc.style.display = 'block';
    down.onclick = function () {
        data.sort(function (a, b) {
            return b['price'] - a['price'];
        });
        giveHtml(data);
        loadAll(oImgs);
    };
    up.onclick = function () {
        data.sort(function (a, b) {
            return a['price'] - b['price'];
        });
        giveHtml(data);
        loadAll(oImgs);
    };
};
priceCon.onmouseleave = function () {
    priceDesc.style.display = 'none';
};

/*价格范围*/
function surePrice(data) {
    sure.onclick = function () {
        var ary = [];
        for (var i = 0; i < data.length; i++) {
            if (minPrice.value <= data[i]['price'] && data[i]['price'] <= maxPrice.value) {
                ary.push(data[i]);
            }
        }
        giveHtml(ary);
        loadAll(oImgs);
    };
}

surePrice(data);

/*图片懒加载*/
function loadImg(ele) {
    if (ele.loaded) return;
    var sT = utils.win('scrollTop');
    var cH = utils.win('clientHeight');
    var tarT = utils.offset(ele).top;
    if (sT + cH > tarT + ele.clientHeight / 2) {
        var temp = document.createElement('img');
        var trueSrc = ele.getAttribute('trueSrc');
        temp.src = trueSrc;
        temp.onload = function () {
            ele.src = trueSrc;
            ele.loaded = true;
            fadeIn(ele);
        };
        temp = null;
    }
}

function loadAll(eles) {
    for (let i = 0; i < eles.length; i++) {
        loadImg(eles[i]);
    }
}

loadAll(oImgs);


function fadeIn(ele) {
    ele.style.opacity = 0;
    var opa = 0.1;
    var timer = setInterval(function () {
        opa += 0.1;
        ele.style.opacity = opa;
        if (opa >= 1) {
            clearInterval(timer);
            ele.style.opacity = 1;
        }
    }, 50)
}

let banner = document.getElementsByClassName('banner')[0],
    uls = banner.getElementsByTagName('ul')[0],
    lis = uls.getElementsByTagName('li'),
    main = document.getElementsByClassName('main')[0],
    kinds = main.getElementsByClassName('kinds')[0],
    obox = document.getElementsByClassName('box')[0],
    otBox = document.getElementsByClassName('otBox')[0],
    mlis = kinds.children;

//选项卡
clearClass();
mlis[0].style.display = 'block';
lis[0].className = 'aline';
otBox.style.display = 'none';
obox.style.display = 'block';

function clearClass() {
    for (let i = 0; i < lis.length; i++) {
        mlis[i].style.display = 'none';
        lis[i].className = '';
        otBox.style.display = 'none';
        obox.style.display = 'none';
    }
}

for (let i = 1; i < lis.length; i++) {
    lis[i].onclick = function () {
        clearClass();
        otBox.style.display = 'block';
        obox.style.display = 'none';
        lis[i].className = 'aline';
        mlis[i].style.display = 'block';
        let url = `./data/data${[i]}.json`;
        getData(url);
    };
}

lis[0].onclick = function () {
    clearClass();
    obox.style.display = 'block';

    lis[0].className = 'aline';
    mlis[0].style.display = 'block';
};

//回到顶部
let sideContainer = document.getElementsByClassName('sideContainer')[0],
    btnBox = sideContainer.getElementsByClassName('btnBox')[0],
    sideDown = btnBox.getElementsByClassName('sideDown')[0],
    sideqCode = sideDown.getElementsByClassName('sideqCode')[0],
    backTop = sideContainer.getElementsByClassName('backTop')[0];

function appear() {
    let dTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (dTop !== 0) {
        backTop.style.display = 'block';
    } else {
        backTop.style.display = 'none';
    }
    backTop.onclick = function () {
        let timer = window.setInterval(function () {
            dTop -= 20;
            if (dTop <= 0) {
                clearInterval(timer);
                dTop = 0;
            }
            document.documentElement.scrollTop = dTop;
            document.body.scrollTop = dTop;
        }, 10)
    }
}

sideDown.onmouseenter = function () {
    sideqCode.style.display = 'block';
};
sideDown.onmouseleave = function () {
    sideqCode.style.display = 'none';
};

let box = document.getElementsByClassName('box')[0],
    oImg = box.getElementsByTagName('img'),
    ofT = banner.offsetTop;

loadAll(oImgs);
loadAll(oImg);
window.onscroll = function () {
    appear();
    let scrT = document.documentElement.scrollTop || document.body.offsetTop;
    if (scrT >= ofT) {
        banner.className = 'banner fixed';
    }
    if (scrT < ofT) {
        banner.className = 'banner';
    }
    loadAll(oImgs);
    loadAll(oImg);
};



//广告卡
let adBox = document.getElementsByClassName('adBox')[0],
    span = adBox.getElementsByTagName('span')[0];
span.onclick = function () {
    adBox.style.display = 'none';
};


















