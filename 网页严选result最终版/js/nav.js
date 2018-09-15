!function () {
	let nav = document.getElementById('nav').firstElementChild;
	let ins = nav.querySelector('input[type=text]');
	let mainNav = document.querySelector('#nav nav.mainNav');
	let navuu = null;
	let lis = null;
	let delay = null;
	console.log(navuu);
	query.get({url: './data/nav.json', callBack: rec});

	function rec(data) {
		bindEvent(data.inputData);
		bindEventNav(data.navData, addShow);
	}

	function bindEvent(data) {
		ins.addEventListener('focus', function () {
			focus(ins, data);
		}, false);
		ins.parentNode.addEventListener('mouseleave', function () {
			if (this.getElementsByClassName('list')[0]) {
				leave(this.getElementsByClassName('list')[0])
			}
		}, false)
	}

	function focus(ele, data) {
		let ary = ele.parentNode.getElementsByClassName('list');
		if (ary.length) {
			ary[0].show();
			return;
		}
		let ul = document.createElement('ul');
		ul.className = 'list';
		let str = '<li class="disabled">大家都在搜</li>';
		data.forEach(item => {
			str += `<li>${item}</li>`;
		});
		ul.innerHTML = str;
		console.log(ele.parentNode);
		ele.parentNode.appendChild(ul);
	}

	function leave(ele) {
		ele.hide();
	}

	//-------------------------------------------nav的非诚勿扰
	function bindEventNav(data, endFn) {
		let str = '';
		mainNav.innerHTML += '<div class="btnInfo"></div>';
		let ul = document.createElement('ul');
		data.forEach(item => {
			if (item == '文体') {
				str += `<li class="sport"><a href="">${item}</a></li>`
			} else if(item == '饮食'){
				str += `<li><a href="food.html" target="_blank" >${item}</a></li>`
			}else if (item == '首页'){
				str += `<li><a href="index.html" target="_blank" >${item}</a></li>`
			}else{
				str += `<li><a href="##" target="_blank" >${item}</a></li>`
			}
		});
		ul.innerHTML = str;
		mainNav.appendChild(ul);
		navuu = mainNav.querySelector('ul');
		let left = navuu.getElementsByClassName('sport')[0].offsetLeft;
		endFn && endFn();
	}

	function addShow() {
		let lis = [...navuu.children];
		let btnInfo = mainNav.getElementsByClassName('btnInfo')[0];
		lis.forEach(item => {
			let x = item.offsetLeft;
			let width = parseFloat(query.getstyle(item, 'width'));
			let left = navuu.getElementsByClassName('sport')[0].offsetLeft;
			item.onmouseenter = function () {
				let realLeft = this.offsetLeft;
				let child = item.getElementsByClassName('child')[0];
				if ( child!== undefined) {
					child.style.left = -realLeft+'px';
					$(child).show();
					return;
				}
				let callBack = (data) => {
					let titleArr = data.titleArr;
					data = data.jujia;
					let infoArr = [];
					for (let attr in data) {
						if (data.hasOwnProperty(attr)) {
							infoArr.push(data[attr]);
						}
					}
					let str = `<div class="child">`;
					infoArr.forEach((item, index) => {
						str += `<div><p>${titleArr[index]}</p><ul>`;
						item.forEach(val => {
							str += `<li>
									<img src="${val.url}" realSrc="" />
									<span>${val.val}</span>
								</li>`
						});
						str += `</ul></div>`
					});
					str += `</div>`;
					item.innerHTML += str;
					let child = this.getElementsByClassName('child')[0];
					child.style.left = -realLeft+'px';
					$(child).show();
					query.lazyLoadAll(child.getElementsByClassName('lazyLoad'));
				};
				query.get({url: "./data/navDetail.json", callBack});
			};
			item.onmouseleave = function(){
				let child = this.getElementsByClassName('child')[0];
				$(child).hide();
			}
		})
	}
	window.addEventListener('scroll',function () {
		let oul = document.querySelector('.mainNav ul');
		query.offset(oul);
		if(document.documentElement.scrollTop>=oul.offset.y){
			oul.style.width = '1090px';
			oul.style.position = 'fixed';
			oul.style.top = '0px';
			oul.style.left = document.documentElement.clientWidth/2+'px';
			oul.style.transform = "translate3d(-50%,0,0)";
			oul.style.zIndex = 30000;
			document.querySelector('.goToTop').style.transform = 'translateY(0px)';
		}
		if(document.documentElement.scrollTop<=220){
			oul.style.width = '1090px';
			oul.style.position = 'absolute';
			oul.style.top = '0px';
			oul.style.left = '50%';
			oul.style.transform = "translate3d(-50%,0,0)";
			oul.style.zIndex = 20;
			document.querySelector('.goToTop').style.transform = 'translateY(100px)';
		}
	})
}();
