//获取元素
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var num=0;
var num2=0;

//数组存放
arrImg = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];
arrImg2 = ['1.jpg','2.jpg','4.jpg'];
arrTxt = ['第一张','第二张','第三张','第四张','第五张'];
arrTxt2 = ['第一张','第二张','第三张'];
//初始化
con1.innerHTML = '<img src="../img/'+ arrImg[num] +'"/>';
con2.innerHTML = '<img src="../img/'+ arrImg2[num2] +'"/>';
txt1.innerHTML = arrTxt[num];
txt2.innerHTML = arrTxt2[num2];
page1.innerHTML = num+1+'/'+arrTxt.length;
page2.innerHTML = num2+1+'/'+arrTxt2.length;

//点击图片本身切换事件
con1.onclick = function (){
	fn1();
};
con2.onclick = function (){
	fn2();
};
//封装
function pic1(){
	txt1.innerHTML = arrTxt[num];
	con1.innerHTML = '<img src="../img/'+ arrImg[num] +'"/>';
	page1.innerHTML = num+1+'/'+arrTxt.length;
}
function pic2(){
	txt2.innerHTML = arrTxt2[num2];
	con2.innerHTML = '<img src="../img/'+ arrImg2[num2] +'"/>';
	page2.innerHTML = num2+1+'/'+arrTxt2.length;
}
//递增函数
function fn1(){
	num++;
	num%=arrTxt.length;
	pic1();
}
function fn2(){
	num2++;
	num2%=arrTxt2.length;
	pic2();
}
//递减函数
function fn3(){
	num--;
	num%=arrTxt.length;
	if(num<0){
		num = arrTxt.length -1;
	}
	pic1();
}
function fn4(){
	num2--;
	num2%=arrTxt.length;
	if(num2<0){
		num2 = arrTxt2.length -1;
	}
	pic2();
}
//点击上一组、下一组切换图片事件
next.onclick = function (){
	fn1();
	fn2();
};
prev.onclick = function (){
	fn3();
	fn4();
};
