
import React,{Component} from "react";
import { Toast,Button } from 'antd-mobile';

import "./index.css"

function failToast() {
	var username= document.querySelector("#username").value;
	var pwd= document.querySelector("#pwd").value;
	var yourName= document.querySelector("#yourName").value;
	console.log(username)
	var reu = /^1\d{10}$/;
	var flag= false;
	var flow= false;
	var flew= false;
	if(!yourName){
		Toast.fail('昵称不能为空！', 1);
	}else{flew= true}
	if(pwd.length<6){
		Toast.fail('请填写至少6位字符的密码！', 1);
	}else{flow=true}
	if(!username){
		 Toast.fail('手机号不能为空！', 1);
	}else if(!reu.test(username)){
		 Toast.fail('手机号输入有误！', 1);		 
	}else{flag=true}  
	
	
	
 	if(flag&&flow&&flew){
 		location.href="#/complete";
 	}
}


//头部
class Title extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <h1 className= "register-title center">欢迎加入豆瓣</h1>
	}
}

//输入区和提交
class Main extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div className= "main">
			<input type="text" id="username" placeholder= "手机号/邮箱"/>
			<input type="password" id="pwd" placeholder= "密码（至少6位）"/>
			<input type="text" id="yourName" placeholder= "昵称"/>
			<Button  onClick={failToast} className= "regist">注册</Button>
			<span className= "agree">点击注册进行注册并同意<a>用户手册</a></span>
			<a className= "loadApp" href="##">点击下载豆瓣App</a>
		</div>
	}
}

class Regist extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return <div>
			<Title/>
			<Main/>
			
		</div>
	}
}

export default Regist;