!function () {
	console.log(localStorage.page);
	NProgress.start();
	let product = document.querySelector('.product');
	let data = [];
	let urlArr = ['./data/wenju.json', './data/yundong.json', './data/yueqi.json', './data/lipin.json', './data/yunyin.json', './data/youxi.json', './data/baoxue.json', './data/wode.json', './data/menghuan.json', './data/dahua.json', './data/yinyang.json', './data/youxibiaoqing.json', './data/wenchuang.json', './data/yingshi.json', './data/dongman.json'];
	
	function getData(startArr, endArr) {
		query.get({url: './data/wenju.json', callBack: callBack});
		NProgress.done();
		let lazyLoadImgArr = document.getElementsByClassName('lazyLoad');
		window.onscroll = function () {
			query.lazyLoadAll(lazyLoadImgArr, true);
			window.localStorage['page'] = document.documentElement.scrollTop;
		};
	}
	
	getData(urlArr, data);
	
	function callBack(res) {
		
		data.push(res);
		console.log(data);
			data = data.sort(function (a, b) {
				return a.data.category.showIndex - b.data.category.showIndex;
			});
			let divAll = document.createElement('div');
			divAll.className = 'plistAll';
			product.appendChild(divAll);
			data.forEach((item, index) => {
				renderPage(divAll, item);
			});
			document.documentElement.scrollTop = sessionStorage.getItem("page") === undefined ? 0 : sessionStorage.getItem("page");
	}
	
	function renderPage(ele, item) {
		let titleLogo = item.data.category.name;
		let titleContent = item.data.category.frontName;
		let str = `<div><p class="title">${titleLogo}</p><p class="title2">${titleContent}</p></div>`;
		let div = document.createElement('div');
		div.className = 'plist';
		ele.appendChild(div);
		div.innerHTML += str;
		let uu = document.createElement('ul');
		uu.className += 'listp';
		div.appendChild(uu);
		item = item.data.itemList;
		str = '';
		item.sort((a, b) => {
			return a.id - b.id;
		});
		item.forEach(val => {
			let {
				name, onSaleTime, primaryPicUrl, simpleDesc, id,
				itemTagList, counterPrice
			} = val;
			str += `<li class="listDetail" default="${id}" time="${onSaleTime}" price="${counterPrice}">
					<div class="bg">
						<img class="lazyLoad" src="" realsrc="${primaryPicUrl}">
					</div>
					<p class="info"> ${name}</p>
					<p class="price">￥${counterPrice}</p>
					<p class="content">${simpleDesc}</p> ${ifAddP(itemTagList)}`;
			str += '</li>';
		});
		uu.innerHTML += str;
	}
	
	function ifAddP(itemTagList) {
		let str = ``;
		// console.log(itemTagList);
		if (itemTagList.length === 0) {
			return str;
		} else {
			itemTagList.forEach(item => {
				if (item.type === 1) {
					str += `<p class="node"> ${item.name} </p>`;
				} else if (item.type === 2) {
					str += `<p class="node productRed"> ${item.name} </p>`;
				}
			});
			return str;
		}
	}
}();
