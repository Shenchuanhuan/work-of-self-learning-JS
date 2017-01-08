
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
var arrOrder = [];//存储定时器编号

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
		if(new Date(aInput[0].value) < new Date()){
			alert('亲，输入的时间不能是过去哟~');
			return;
		}
		//每次点击把input值存入arrTime内相应的位置
		arrTime[this.index] = aInput[this.index].value;
		console.log(arrTime[this.index])
	};
}

function countDown(t,arrayindex,arrayMask,arrGoods,soldout,div,order){
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
		clearInterval(order);
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
	countDown(arrTime[i],arrSpan[i],aMask[i],sellGoods[i],soldout[i],aDiv[i],arrOrder[i]);
}	

//启动定时器计时
var timer1 =setInterval(function(){
	countDown(arrTime[0],arrSpan[0],aMask[0],sellGoods[0],soldout[0],aDiv[0],timer1);	
},1000);
var timer2 =setInterval(function(){
	countDown(arrTime[1],arrSpan[1],aMask[1],sellGoods[1],soldout[1],aDiv[1],timer2);	
},1000);
var timer3 =setInterval(function(){
	countDown(arrTime[2],arrSpan[2],aMask[2],sellGoods[2],soldout[2],aDiv[2],timer3);	
},1000);
var timer4 =setInterval(function(){
	countDown(arrTime[3],arrSpan[3],aMask[3],sellGoods[3],soldout[3],aDiv[3],timer4);	
},1000);
arrOrder.push(timer1,timer2,timer3,timer4);

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
