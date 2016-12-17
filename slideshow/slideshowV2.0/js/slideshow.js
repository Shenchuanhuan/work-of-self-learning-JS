/*
1、html布局：其中img内容由Js获取填充。
2、做图片切换效果
3、生成焦点li,并获取元素，设定好默认的li
4、关联焦点和图片，点击焦点切换相对应的图片;
5、关联焦点和prev next切换。
*/
//获取元素
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var list = document.getElementById("list");
var img = document.getElementById("pics");
var arrImg = ['0.jpg','1.png','2.jpg','3.jpg','4.png'];
var aLi = list.getElementsByTagName('li');
var index=0;

//初始填充图片
img.src = '../img/'+ arrImg[0];

//切换图片点击事件
next.onclick = function (){
	//清除焦点距离 （也可以用for清空）
	aLi[index].className = '';
	index++;
	index%=arrImg.length;
	fn();
};
prev.onclick = function (){
	aLi[index].className = '';
	index--;
	if(index<0){
		index = arrImg.length -1;
	}
	fn();
};
//生成焦点Li并设定初始li
for(var i=0;i<arrImg.length;i++){
  	list.innerHTML += '<li><div class="flt"></div><i></i></li>';
}
aLi[0].className = 'checked';

//鼠标移入移出焦点
for(var i=0;i<arrImg.length;i++){
	aLi[i].getElementsByTagName('i')[0].style.display = 'none';
	aLi[i].onmouseover = function (){
		this.style.background = 'white';
		this.getElementsByTagName('div')[0].style.display = 'block';
		this.getElementsByTagName('i')[0].style.display = 'block';
	};
	aLi[i].onmouseout = function (){
		this.style.background = '';
		this.getElementsByTagName('div')[0].style.display = 'none';
		this.getElementsByTagName('i')[0].style.display = 'none';
	};
}
//确定点击焦点并切换图片
for(var i=0;i<arrImg.length;i++){
	aLi[i].checked = i;
	aLi[i].onclick = function (){
		for(var i=0;i<arrImg.length;i++ ){
			aLi[i].className = '';
		}
		index = this.checked;//关联底部焦点和上面左右切换：同步切换数字		
		fn();
	};
}
//封装函数
function fn(){
	img.src = '../img/'+ arrImg[index];
	aLi[index].className = 'checked';
}

