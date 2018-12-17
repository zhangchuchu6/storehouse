
//给DOM对象绑定事件处理函数的兼容性代码
//参数：
//DOM对象
//事件类型
//事件处理函数
//是否冒泡

function addEvent1806(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){//DOM2
		//既支持冒泡，也支持捕获
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){//IE
		//只支持冒泡
		domObj.attachEvent("on"+eventType,func);		
	}else{//DOM0
		//只支持冒泡
		domObj["on"+eventType] = func;
	}
}

function removeEvent(domObj,eventType,func,isBubble){
	if(domObj.removeEventListener){
		domObj.removeEventListener(eventType,func,isBubble);
	}else if(domObj.detachEvent){
		domObj.detachEvent("on"+eventType,func);		
	}else{
		domObj["on"+eventType] = null;//domObj["on"+eventType] = "";
	}
}


//阻止浏览器默认行为

function preventDefault1806(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue = false;
	}
}

//阻止事件冒泡
function stopBubble(evt){
	if(evt.stopPropagation){
		evt.stopPropagation();
	}else{
		evt.cancelBubble = true;//IE
	}
	
}