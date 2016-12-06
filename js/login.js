window.onload=function(){
	var array=document.getElementsByName('formInput');
	// 文本框焦点事件
	for(var i=0;i<array.length;i++){
		(function(index){
			array[i].onfocus=function(){
				array[index].value='';
			}
			
		})(i);
		
	}
	// 验证码的问题
	var str = '';
	var text = document.getElementById("text");
	var change = document.getElementById("change");
	var arr = new Array();
	//产生随机的大写字母编码
	function random(){
		for(var i = 0;i < 5;i++){
		arr[i] = parseInt((90 - 65 + 1) * Math.random() + 65);
		for(var j = 0;j < i;j++){
			//去重
			if(arr[i] == arr[j]){
				i--;
				break;
			}
		}
		
	}
		//将编码返回字符串
		for(var i = 0;i < 5;i ++){
			str += String.fromCharCode(arr[i]);
		}
		text.innerHTML = str;
	}
	random();
	//点击再换一张
	change.onclick=function(){
		str='';
		random();
	}

}
function check(){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var code=document.getElementById('code').value;
	var text1 = document.getElementById("text").innerHTML;
	var text2 = text1.toLowerCase();
	var psd;
	
	// 是否为空的校验
	if(username==''){
		alert('请输入用户名再进行操作');
			return false;
	}
	else if (password==''){
		alert('请输入密码再进行操作');
		return false;
	}else if(code==''){
		alert('请输入验证码再操作');
		return false;
	}else{
		var flag=false;
		// 看用户名是否存在
		for(var i=0;i<users.length;i++){
			if(username==users[i].name){
				psd=i;
				flag=true;

			}
		}
		if(flag==false){
			username='';
			alert('该用户名不存在');
			return false;
		}else{
			if(password==users[psd].password){
				if(code == text1||code == text2){
					alert('登陆成功');
					return true;
				}else{
					code='';
					alert('验证码输入错误');
					return false;
				}
			}else{
				password='';
				alert('密码输入错误');
				return false;
			}
			
		}
	}
}


	