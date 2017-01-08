
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

function countDown(t,arrayindex,arrayMask,arrGoods,soldout,div){
	//这里要注意的是：如果传进来的是二维数组，形参就要用arrayXXX形式
	var deadline= +new Date(t);
	//获取当前时间的时间戳
	var date = +new Date();
	//获取时间差,除以1000是将毫秒转换成秒
	var time = (deadline - date)/1000; 
	//获取小时差
	var h = parseInt(time/60/60);
	//获取分钟差
	var m = parseInt(time/60%60); 
	//获取秒差
	var s = parseInt(time%60);
	
	//把获取到的东西填到页面相应的位置
		arrayindex[1].innerHTML = parseInt(z(h)/10);
		arrayindex[2].innerHTML = z(h)%10;
		arrayindex[4].innerHTML = parseInt(z(m)/10);
		arrayindex[5].innerHTML = z(m)%10;
		arrayindex[7].innerHTML = parseInt(z(s)/10);
		arrayindex[8].innerHTML = z(s)%10;
	//结束时
	if(parseInt(time) === 0){
		clearInterval(timer);
		//遮罩层出现
		arrayMask.style.display = 'block';
		//相应的下架商品条出现
		arrGoods.style.display = 'block';
		//下架标签的运动：产生视觉上的盖章效果
		mTween(soldout,'width',160,60,'linear');
		mTween(soldout,'left',50,60,'linear');
		//结束抖动
		shake(div,'left');
	}
}

//初始化页面倒计时
for(var i=0;i<arrTime.length;i++){
	countDown(arrTime[i],arrSpan[i],aMask[i],sellGoods[i],soldout[i],aDiv[i]);
}

//启动定时器计时
var timer = setInterval(function(){
	//countDown(arrTime[0],arrSpan[0],aMask[0],sellGoods[0],soldout[0],aDiv[0]);	
	for(var i=0;i<arrTime.length;i++){
		countDown(arrTime[i],arrSpan[i],aMask[i],sellGoods[i],soldout[i],aDiv[i]);
	}
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
