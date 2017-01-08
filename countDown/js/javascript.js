/*
 *  先把用户输入的时间获取并存到arrTime里
 *  将来的截止时间从arrTime里获取相应的值
 *  点击确定按钮的时候发生的有：
 *   1、替换arrTime里的值，
 *   2、更改将来的值
 */


var list = document.getElementById("list");
var aDiv = document.getElementsByClassName('lists');
var aMask = document.getElementsByClassName('mask');
var soldout = document.getElementsByClassName('sold-out');
var sellGoods = document.getElementsByClassName('sell-out-goods');
var aInput = document.getElementsByTagName('input');
var btn = document.getElementsByTagName('a');
var aDl = document.getElementsByTagName('dl');
var arr = [];//存入拉动路径
var num = 0;
var arrSpan = [];
var arrTime = ['2017 1 9 20:00:00','2017 1 9 21:00:00','2017 1 9 22:00:00','2017 1 9 23:00:00'];



//拉动路径
for(var i=16;i>0;i-=2){
	arr.push(i,-i);
}
arr.push(0);

//通过循环获取 到每个商品列表里的span，组成一个集合
for(var i=0;i<aDl.length;i++){
	 arrSpan.push(aDl[i].getElementsByTagName('span'));
}

//初始化每个input的值 
for(var i=0;i<aInput.length;i++){
	btn[i].index = i;
	//初始化页面input输入框的值
	aInput[i].value = arrTime[i];
	
	btn[i].onclick = function(){
		//每次点击把input值存入arrTime内相应的位置
		arrTime[this.index] = aInput[this.index].value;
	};
}

//var deadlineOne = +new Date(arrTime[0]);
//var deadlineTwo = +new Date(arrTime[1]);
//var deadlineThree = +new Date(arrTime[2]);
//var deadlineFour = +new Date(arrTime[3]);


//设置截止时间，并将其时间戳存到deadline中;
//你妹啊！！！月份要减一的啊！！又忘记了！！！！但是切记，只有自己在JS里的NEW DATE里写的时候减一，在页面上写的时候是
//写正常的月份，因为JS获取页面上填 的时间后会机智的把时间转为自己认识的样子
//var deadline = +new Date(aInput[0].value);
		
function countDown(){
	var deadline= +new Date(arrTime[0]);
	//获取当前时间的时间戳
	var date = +new Date();
	//获取时间差,除以1000是将毫秒转换成秒
	var time = (deadline - date)/1000; 
	//获取小时差
	var h = parseInt(time/60/60);//这里有个坑：小时一定要/60/60写，不能/360
	//获取分钟差
	var m = parseInt(time/60%60); //取小时的时候，取整的部分是小时数，小数部分就是分钟数
	//获取秒差
	var s = parseInt(time%60);//这里要取整，因为可能会有小数，其它也是这样的。
	//console.log(z(h)+'时'+z(m)+'分'+z(s)+'秒')
	
	//把获取到的东西填到页面相应的位置
		arrSpan[0][1].innerHTML = parseInt(z(h)/10);
		arrSpan[0][2].innerHTML = z(h)%10;
		arrSpan[0][4].innerHTML = parseInt(z(m)/10);
		arrSpan[0][5].innerHTML = z(m)%10;
		arrSpan[0][7].innerHTML = parseInt(z(s)/10);
		arrSpan[0][8].innerHTML = z(s)%10;
	//结束时
	if(parseInt(time) === 0){
		clearInterval(timer);
		//遮罩层出现
		aMask[0].style.display = 'block';
		//相应的下架商品条出现
		sellGoods[0].style.display = 'block';
		//下架标签的运动：产生视觉上的盖章效果
		mTween(soldout[0],'width',160,60,'linear');
		mTween(soldout[0],'left',50,60,'linear');
		//结束抖动
		shake(aDiv[0],'left');
	}
}
countDown();
//第一个框
var timer = setInterval(function(){
	countDown();	
},1000);

//如果数字小于10就补一个0:补零函数
function z(n){
	return n<10?'0'+n:''+n;
}

//抖动函数
function shake(obj,attr){
	//获取元素的初始位置
	var m = css(obj,attr);
	var move = setInterval(function(){
		num++;
		num%=arr.length;
		var n =m + arr[num];
		mTween(obj,attr,n,30,'linear');
		if(num == arr.length-1){
			clearInterval(move);	
		}
	},30);
}
function css(obj,attr){
	return parseFloat(obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]);
}
