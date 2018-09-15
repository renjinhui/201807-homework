//顶部header
(function () {
	//导航栏的小轮播
	let uu = document.querySelector('.header>.content>.content-left>div>ul');
	let childs = [...uu.children];
	uu.index = 0;
	uu.timer = setInterval(move, 1000);
	uu.onmouseenter = function () {
		clearInterval(uu.timer)
	};
	uu.onmouseleave = function () {
		uu.timer = setInterval(move, 1000);
	};
	function autoMove() {
		clearInterval(uu.timer);
		uu.timer = setInterval(move, 1000);
	}
	function move() {
		uu.index++;
		if(uu.index===5){
			uu.index = 0;
			uu.style.top = 0;
			uu.index++;
		}
		query.move(uu, {top: -36 * uu.index});
	}
	//控制进入停止出去继续
	let server = document.querySelector('.header .server');
	server.onmouseenter = function () {
		console.log(this.getElementsByTagName('i')[0]);
		this.getElementsByTagName('i')[0].mySetCss({transform:'rotate(180deg)'});
		this.getElementsByClassName('info')[0].show();
	};
	server.onmouseleave = function () {
		this.getElementsByTagName('i')[0].mySetCss({transform:'rotate(0deg)'});
		this.getElementsByClassName('info')[0].hide();
	};
	let erweima = document.querySelector('.header .erweima');
	erweima.onmouseenter = function () {
		this.getElementsByClassName('erweimaa')[0].show();
	};
	erweima.onmouseleave = function () {
		this.getElementsByClassName('erweimaa')[0].hide();
	};
})();