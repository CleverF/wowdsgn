import { BrowserRouter as Router, Route ,Redirect,Switch} from "react-router-dom";
import App from "../App";
import Home from "../components/Home"
import Category from "../components/Category"
import Cart from "../components/Cart"
import Message from "../components/Message"
import User from "../components/User"
import Login from "../components/Login"
import Register from "../components/Register"
import Detail from "../components/Detail"
import React from "react"
import store from "../store"
const router = <Router>
	<App>
		<Switch>
		<Route path="/home" component ={Home}/>
		<Route path="/category" component ={Category}/>
		<Route path="/cart" component ={Cart}/>
		<Route path="/message" component ={Message}/>
		<Route path="/user" component ={User}/>


		<Route path="/login" component ={Login}/>
		<Route path="/register" component ={Register}/>


		<Route path="/detail/:mid" component ={Detail}/>

		<Redirect from="/" to="/home"/>
		</Switch>
	</App>
</Router>

//vue mode ==>   hash , history
//react mode==>  HashRouter BrowserRouter


//bom ==>  window.onhashchange  window.onpopstate
export default router;