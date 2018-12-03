import React,{Component} from "react";
import css from "./index.module.scss"
import {NavLink} from "react-router-dom";


class Footer extends Component{

	render(){
		return <footer>
			<ul>
				<li><NavLink to="/home"  activeClassName={css.myactive}>
					<i className="iconfont icon-all" style={{fontSize:'18px'}}></i>
					<span>首页
					</span>
				</NavLink></li>
				<li><NavLink to="/category"  activeClassName={css.myactive}>
					<i className="iconfont icon-smile" style={{fontSize:'18px'}}></i>
					<span>分类
					</span>
				</NavLink></li>
				<li><NavLink to="/cart"  activeClassName={css.myactive}>
					<i className="iconfont icon-color" style={{fontSize:'18px'}}></i>
					<span>购物车</span>
				</NavLink></li>
				<li><NavLink to="/message" activeClassName={css.myactive}>
					<i className="iconfont icon-smile" style={{fontSize:'18px'}}></i>
					<span>消息</span>
				</NavLink></li>
				<li><NavLink to="/user" activeClassName={css.myactive}>
					<i className="iconfont icon-all" style={{fontSize:'18px'}}></i>
					<span>我</span>
				</NavLink></li>
			</ul>
		</footer>
	}
 
	// componentWillMount(){
	// 	console.log("footerbar-componentDidMount")
	// 	store.subscribe(()=>{
	// 		console.log("通知我了",store.getState());
		
	// 		this.setState({
	// 			isShow:store.getState().footbarReducer //大对象 
	// 		},()=>{console.log(this.state.isShow)})
	// 	})
	// 	// window.onscorll=function(){}
	// }
}

export default Footer
