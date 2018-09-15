(function () {
	let autoPlay = document.querySelector(".auto .autoplay");
	let as = null;
	let index = 0;
	query.get({url:'./data/auto.json',callBack});
	let timer = null;
	function callBack(data) {
		let str = '<div>';
		data.forEach(item=>{
			str += `<div class="lis"></div><a style="display: none;" title="img"><img class="lazyLoad" realSrc="${item}"></a>`
		});
		autoPlay.innerHTML += str+'</div>';
		let chils = autoPlay.getElementsByTagName('li');
		for(let i=0;i<chils.length;i++){
			chils[i].onclick = function () {
				f1();
				this.className = 'current';
				index = i;
				$(as[index]).fadeIn(200).siblings().fadeOut(200);
			}
		}
		let nextButton = $('.auto div.next')[0];
		let prevButton = $('.auto div.prev')[0];
		function f1() {
			for(let i=0;i<chils.length;i++){
				chils[i].className = '';
			}
		}
		nextButton.onclick = function () {
			index++;
			if(index>3){
				index = 0;
			}
			$(as[index]).fadeIn(200).siblings().fadeOut(200);
			f1();
			chils[index].className = 'current';
		};
		prevButton.onclick = function () {
			index--;
			if(index<0){
				index = 3;
			}
			$(as[index]).fadeIn(200).siblings().fadeOut(200);
			f1();
			chils[index].className = 'current';
		};
		autoPlay.onmouseenter = function () {
			clearInterval(timer);
			// nextButton.style.display = 'block';
			nextButton.style.display = prevButton.style.display = 'block';
		};
		autoPlay.onmouseleave = function () {
			aPlay();
			nextButton.style.display = 'none';
			prevButton.style.display = 'none';
		};
		as = autoPlay.querySelectorAll(`a[title=img]`);
		as[0].style.display = 'block';
		let imgs = autoPlay.getElementsByTagName('img');
		query.lazyLoadAll(imgs);
		aPlay();
	}
	function aPlay() {
		clearInterval(timer);
		timer = setInterval(function () {
			play()
		},5000)
	}
	function play() {
		index++;
		if(index>=as.length){
			index = 0;
		}
		let chils = [...autoPlay.getElementsByTagName('li')];
		chils.forEach(item=>{
			item.className = '';
		});
		chils[index].className = 'current';
		$(as[index]).fadeIn(200).siblings().fadeOut(200);
	}
})();