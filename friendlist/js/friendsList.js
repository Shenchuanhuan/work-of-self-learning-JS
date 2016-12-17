/*
1、生成好友内容
2、点击单项列表标题变化 
3、li点击事件
4、清除BUG
*/
//获取元素
var list = document.getElementById("list");
var aP = list.getElementsByTagName('p');
var aImg = list.getElementsByTagName('img');
var arrImg = ['../img/right.gif','../img/down.gif'];
var aUl = list.getElementsByTagName('ul');
var len = aUl.length;//ul的个数
var arrCon = [['张一','张二','张三','张四'],['李一','李二','李三','李四','李五'],['王一','王二','王三']];
var index=0;
//生成好友项
for(var i=0;i<len;i++){
	for(var j=0;j<arrCon[i].length;j++){
		aUl[i].innerHTML += '<li>'+arrCon[i][j]+'</li>';
	}
}
//点击单项列表标题变化 
for(var i=0;i<aP.length;i++){
	aP[i].onOff = true;
	aP[i].index = i;
	aP[i].onclick = function (){
		index = this.index;
		clearli();
		if(this.onOff == false){//列表闭合状态
			clear();
			aUl[index].style.display = 'none';
		}else{//列表为展开状态
			clear();
			this.style.background = '#f7f794';
			this.getElementsByTagName('img')[0].src = arrImg[1];
			this.onOff = false;
			aUl[index].style.display = 'block';
			//在这里绑定Li的点击事件
			for(var j=0;j<arrCon[index].length;j++){
				aUl[index].getElementsByTagName('li')[j].onclick = function (){
					clearli();
					this.className = 'colors';
				};
			}			
		}
	};
}
//清空标题添加样式
function clear(){
	for(var i=0;i<aP.length;i++){
		aP[i].style.background = '';
		aP[i].getElementsByTagName('img')[0].src = arrImg[0];
		aP[i].onOff = true;
		aUl[i].style.display = 'none';
	}	
}
//清空Li元素样式
function clearli(){
	for(var n=0;n<arrCon[index].length;n++){
		aUl[index].getElementsByTagName('li')[n].className = '';
	}
}
