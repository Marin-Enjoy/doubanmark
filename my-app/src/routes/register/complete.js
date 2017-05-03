import React,{Component} from "react";
import "./index.css";

class Complete extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div id= "completeWrap">
			<div id="phone">接受验证码手机号是</div>
			<div className= "getNum">
				<input id="num" type= "text" placeholder="验证码"/>
				<a id="click">获取验证码</a>
			</div>
			<a href='/login'><button id="comp">完成</button></a>
		</div>
	}
}
export default Complete;