let query = (function () {
	function move(a,json,endfn){
		clearInterval(a.timer10);
		a.timer10 = setInterval(function(){
			var bstop = true;
			for(var attr in json){
				if(attr == 'opacity'){
					var c = parseInt(parseFloat(getstyle(a,attr))*100);
				}else{
					var c = parseInt(getstyle(a,attr));
				}
				var speed = (json[attr]-c)/8;
				speed = speed>0? Math.ceil(speed) : Math.floor(speed);
				if(c != json[attr]){
					bstop = false;
				}
				if(attr == 'opacity'){
					a.style[attr] = (c+speed)/100;
				}else{
					a.style[attr] = c+speed+'px';
				}
			}
			if(bstop){
				clearInterval(a.timer10);
				endfn && endfn();
			}
		},14)
	}
	function getstyle(a,b){
		return getComputedStyle(a)[b];
	}
	Element.prototype.show = function () {
		this.style.display = 'block';
	};
	Element.prototype.hide = function () {
		this.style.display = 'none';
	};
	Element.prototype.mySetCss = function (obj) {
		for(let attr in obj){
			if(obj.hasOwnProperty(attr)){
				this.style[attr] = obj[attr];
			}
		}
	};
	//ajax回调函数版本
	function get({url,callBack}) {
		let xhr = new XMLHttpRequest();
		xhr.open('get',url);
		xhr.onreadystatechange = function () {
			if(xhr.readyState===4){
				if(/^[23]\d{2}$/.test(this.status)){
					callBack && callBack(JSON.parse(this.responseText))
				}
			}
		};
		xhr.send();
	}
	function fadeIn(ele,endFn) {
		clearInterval(ele.fadeOutTimer);
		clearInterval(ele.fadeInTimer);
		let n = 0;
		ele.mySetCss({opacity:n,display:'flex'});
		ele.fadeInTimer = setInterval(function () {
			n+=0.03;
			if(n >=1){
				n = 1;
				clearInterval(ele.fadeInTimer);
				ele.style.opacity = n;
				endFn && endFn();
				return;
			}
			ele.style.opacity = n;
		},14)
	}
	function fadeOut(ele,endFn) {
		clearInterval(ele.fadeOutTimer);
		clearInterval(ele.fadeInTimer);
		let n = 1;
		ele.mySetCss({opacity:n});
		ele.fadeOutTimer = setInterval(function () {
			n-=0.03;
			if(n <=0){
				n = 0;
				clearInterval(ele.fadeOutTimer);
				ele.style.opacity = n;
				endFn && endFn();
				return;
			}
			ele.style.opacity = n;
		},14)
	}
	function offset(ele) {
		if (!ele)return;
		let offset = {x:ele.clientLeft,y:ele.clientTop};
		let father = ele.offsetParent;
		while (father){
			offset.x += father.offsetLeft+father.clientLeft;
			offset.y += father.offsetTop+father.clientTop;
			father = father.offsetParent;
		}
		ele.offset = offset;
	}
	function lazyLoad(img,deep) {
		let top = document.documentElement.clientHeight+document.documentElement.scrollTop;
			offset(img);
			if(img.loaded===true){return;}
			if(top>=img.offset.y+200){
				let imgA = new Image();
				let realSrc = img.getAttribute('realSrc');
				imgA.src = realSrc;
				imgA.onload = function () {
					img.src = realSrc;
					img.style.backgroundColor = 'white';
					img.loaded = true;
					delete imgA;
				}
			}
	}
	function lazyLoadAll(imgArr,deep) {
		imgArr = [...imgArr];
		imgArr.forEach(item=>{
			lazyLoad(item,deep);
		})
	}
	return{
		move,getstyle,get,fadeIn,fadeOut,offset,lazyLoadAll
	}
})();
window.query = query;