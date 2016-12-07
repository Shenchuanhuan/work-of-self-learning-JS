window.onload = function (){
	var ClickSet = document.getElementById('clickSet');
	var Mask = document.getElementById('mask');
	var Red = document.getElementById('red');
	var Yellow = document.getElementById('yellow');
	var Blue = document.getElementById('blue');
	var Wid1 = document.getElementById('wid1');
	var Wid2 = document.getElementById('wid2');
	var Wid3 = document.getElementById('wid3');
	var Heig1 = document.getElementById('heig1');
	var Heig2 = document.getElementById('heig2');
	var Heig3 = document.getElementById('heig3');
	var Sample = document.getElementById('sample');
	var Reset = document.getElementById('reset');
	var Confirm = document.getElementById('confirm');
	
	//效果区
	ClickSet.onclick = function (){
		Mask.style.display = 'block';	
	};
	//颜色区效果
	Red.onmouseover = function (){
		Red.style.background = 'red';
	};
	Yellow.onmouseover = function (){
		Yellow.style.background = 'darkgoldenrod';
	};
	Blue.onmouseover = function (){
		Blue.style.background = 'cornflowerblue';
	};
	Red.onmouseout =function (){
		Red.style.background = 'lawngreen';
	};
	Yellow.onmouseout =function (){
		Yellow.style.background = 'yellow';
	};
	Blue.onmouseout =function (){
		Blue.style.background = 'lightblue';
	};
	Red.onclick = function (){
		Sample.style.background = 'red';
	};
	Yellow.onclick = function (){
		Sample.style.background = 'yellow';
	};
	Blue.onclick = function (){
		Sample.style.background = 'blue';
	};
	//宽高区效果
	Wid1.onclick = function (){
		Sample.style.width = '200px';
	};
	Wid2.onclick = function (){
		Sample.style.width = '300px';
	};
	Wid3.onclick = function (){
		Sample.style.width = '400px';
	};
	Heig1.onclick = function (){
		Sample.style.height = '200px';
	};
	Heig2.onclick = function (){
		Sample.style.height = '300px';
	};
	Heig3.onclick = function (){
		Sample.style.height = '400px';
	};
	//恢复、确定效果区
	Reset.onclick = function (){
		Sample.style = '';
	};
	Confirm.onclick = function (){
		Mask.style.display = 'none';
	};
};
