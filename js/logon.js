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
}

function check(){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	//定义用户名正则
	var regExp=/^[0-9a-zA-Z_]{1,10}$/g;
	//定义密码正则
	var regExp1=/^[0-9]{6}$/g;
	if(regExp.test(username)){
		if(regExp1.test(password)){
			alert('注册成功');
			return true;
		}else{
			alert('请输入由数字组成的6位的密码');
			return false;
		}

	}else{
		alert('请输入由大小写字母或数字或下划线组成的不超过10位的用户名');
		return false;
	}


}