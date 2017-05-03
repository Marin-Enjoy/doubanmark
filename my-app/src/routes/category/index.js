import React,{Component} from "react";
import "./index.css";

class Category extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div id="catWrap">
		<a href="#">饮食</a>
		<a href="#">服装</a>
		<a href="#">配饰</a>
		<a href="#">饮食</a>
		<a href="#">饮食</a>
		<a href="#">饮食</a>
		<a href="#">饮食</a>
		<a href="#">饮食</a>
		<a href="#">饮食</a>
		</div>
	}
}

export default Category;