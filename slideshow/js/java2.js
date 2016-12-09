//通过判断

//获取元素
var orderBtn = document.querySelector('#order');
var circleBtn = document.querySelector('#circle');
var btnIntro = document.querySelector('#btnIntro');
var oPics = document.querySelector('#pics');
var numTop = document.querySelector('#num');
var oText = document.querySelector('#text');
var prevBtn = document.querySelector('#prev');
var nextBtn = document.querySelector('#next');

//数据库
var bIntro =['图片只能到最后一张或第一张','图片可以循环切换'];  
var pictures = ['img/0.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',];
var textIntro = ['这是第一张图片','这是第二张图片','这是第三张图片','这是第四张图片','这是第五张图片',];
var warn = ['这是最后一张图片啦~~','这是第一张图片啦，不能往前啦~'];

//初始状态
var num = 0;
btnIntro.innerHTML = bIntro[0]; //顺序按钮
start = function (){
	oPics.src = pictures[num];
	numTop.innerHTML = num + 1 + '/' + pictures.length;
	oText.innerHTML = textIntro[num];
};
start();
//图片切换JS
var onOff = true;
orderBtn.onclick = function (){ //顺序按钮
	btnIntro.innerHTML = bIntro[0];
	onOff = true;
};
circleBtn.onclick = function (){//循环按钮
	btnIntro.innerHTML = bIntro[1];
	onOff = false;
};

//切换函数
nextBtn.onclick = function (){
	num++;
	if(onOff == true){ //判断是否顺序切换，如果是顺序切换，则执行以下内容
		if(num >= pictures.length){
			num = pictures.length - 1;
			alert(warn[0]);
		}
		start();
	}
	else { //如果是循环切换，则执行以下内容
		if(num >= pictures.length){
			num = 0;
		}
		start();
	}
};
prevBtn.onclick = function (){
	num--;
	if(onOff == true){//顺序
		if(num < 0){
			num = 0;
			alert(warn[1]);
		}
		start();
	}
	else {//循环
		if(num < 0){
			num = pictures.length - 1;	
		}
		start();
	}
};

