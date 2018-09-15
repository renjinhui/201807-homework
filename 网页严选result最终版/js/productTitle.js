!(function () {
	let pTitle = document.createElement('div');
	let urlArr = ['./data/wenju.json', './data/yundong.json', './data/yueqi.json', './data/lipin.json', './data/yunyin.json', './data/youxi.json', './data/baoxue.json', './data/wode.json', './data/menghuan.json', './data/dahua.json', './data/yinyang.json', './data/youxibiaoqing.json', './data/wenchuang.json', './data/yingshi.json', './data/dongman.json'];
	pTitle.className = 'ptitle';
	document.querySelector('#product>.product').appendChild(pTitle);
	query.get({url: './data/type_address_sort.json', callBack});
	let sortArr = ['default', 'price', 'time'];
	
	function callBack(data) {
		let str = ``;
		let arr = ['分类','配送地区','排序'];
		data = [data.type, data.address, data.sort];
		data.forEach((item, index) => {
			str += `<div class="category"><div class='categoryChild'><span>${arr[index]}</span><div>`;
			item.forEach((val, i) => {
				if (index === 0) {
					if(i===0){
						str += `<a class="sortActive" data-url="${urlArr[i]}">${val}</a>`;
						return;
					}
					str += `<a data-url="${urlArr[i]}">${val}</a>`;
				} else if (index === 2) {
					if(i===0){
						str += `<a class="sortActive" data-sort="${sortArr[i]}">${val}</a>`;
						return;
					}
					str += `<a data-sort="${sortArr[i]}">${val}</a>`;
				} else {
					if(i===0){
						str += `<a class="sortActive" >${val}</a>`;
						return;
					}
					str += `<a >${val}</a>`;
				}
			});
			str += `</div></div></div>`;
		});
		pTitle.innerHTML += str;
		let typeA = document.querySelectorAll('.product a[data-url],.product a[data-sort]');
		typeA = [...typeA];
		typeA.forEach(function (item) {
			item.onclick = function (e) {
				e.preventDefault();
				if (this.getAttribute('data-url') !== null) {
					if (this.className === 'sortActive') {
						NProgress.start();
						NProgress.done();
						return;
					}
					let childs = [...this.parentNode.querySelectorAll('a[data-url]')];
					childs.forEach(item => {
						item.className = '';
					});
					this.className = 'sortActive';
					NProgress.start();
					let url = this.getAttribute('data-url');
					query.get({url, callBack: callBackType});
				}else if(this.getAttribute('data-sort')){
					console.log(1);
					let type = this.getAttribute('data-sort');
					let plist = [...document.querySelectorAll('.plist')];
					this.sorted = this.sorted===undefined?true:this.sorted;
					plist.forEach(item=>{
						let uu = item.getElementsByClassName("listp")[0];
						let child = [...uu.children];
						if(this.sorted===true){
							child.sort((a,b)=>{
								return b.getAttribute(type)-a.getAttribute(type)
							});
						}else{
							child.sort((a,b)=>{
								return a.getAttribute(type)-b.getAttribute(type)
							});
						}
						child.forEach(item1=>{
							uu.appendChild(item1);
						})
					});
					this.sorted = !this.sorted;
					query.lazyLoadAll(document.getElementsByClassName('lazyLoad'));
					console.dir(this.sorted);
				}
			}
		})
	}
	
	function callBackType(data, ele) {
		// localStorage
		let plistAll = document.querySelector('.plistAll');
		plistAll.innerHTML = '';
		renderPage(plistAll, data);
		query.lazyLoadAll(document.getElementsByClassName('lazyLoad'));
		NProgress.done();
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
		item.forEach(val => {
			let {
				name, onSaleTime, primaryPicUrl, simpleDesc, displaySkuId,
				itemTagList, counterPrice
			} = val;
			str += `<li class="listDetail" time="${onSaleTime}" price="${counterPrice}">
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
})();