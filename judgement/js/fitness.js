
//声明
var select =document.getElementById("select");
var aOption = document.getElementsByTagName('option');
var btn = document.getElementById("btn");
var content = document.getElementById("content");
var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];
var max =0;

//判断选项内容，并将内容赋值给按钮的index属性
select.onchange = function (){
	btn.index = this.value;	
};
//按钮点击事件
btn.onclick = function (){
	content.innerHTML = '';//再次生成之前先清空
	if(this.index == 'arr里所有的数字'){
		fn1();
	}else if(this.index == '可以转成数字'){
		fn2();
	}else if(this.index == '可以转成数字中，最大值数字'){
		fn3();
	}else{
		fn4();
	}
};


	
//	1、找到arr里所有的数字：-98765, 34, -2, 0, 5
//先判断数据类型，再输出对象number的值,其中NaN值也会被归类于对象number类，再加一个判断this值是否是NaN
function fn1(){
	for(var i=0;i<arr.length;i++){
		 if(typeof arr[i] == 'number'){
		 	if(!isNaN(arr[i])){
		 		content.innerHTML += arr[i]+'，';
		 	}
		 }
	}
}

//2、找到可以转成数字的：'100px', -98765, 34, -2, 0, '300', '23.45元',  5 
//首先用parseFloat判断出可以转换成数字的，再将其输出
function fn2(){
	for(var i=0;i<arr.length;i++){
		if(!isNaN(parseFloat(arr[i]))){
			content.innerHTML += arr[i]+'，';
		}
	}
}
//3、把转成数字以后，最大值判断出来：300
//先找出能转成数字的值，然后转换成数字，比较其大小
//比较大小想法：先取第一个值跟其它所有比较，遇到比它大的就把大的值赋给它，接着跟剩下的比较，直到站到最后的那个
function fn3(){
	for(var i=0;i<arr.length;i++){
		if(parseFloat(arr[i])>max){
			max = parseFloat(arr[i]);
		}
	}
	content.innerHTML = max;
}

//4、把 NaN 所在的位置找出来：1 14 17  19
//首先根据数据类型把NaN筛选出来，再找出位置
function fn4(){
	for(var i=0;i<arr.length;i++){
		 if(typeof arr[i] == 'number'){
		 	if(isNaN(arr[i])){
		 		content.innerHTML += i + '，';
		 	}
		 }
	}
}

