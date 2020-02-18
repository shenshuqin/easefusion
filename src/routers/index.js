import React from 'react';
// 配置路由规则
import { Router,Route,NavLink,Switch,Redirect } from 'dva/router';
import Login from '../components/Login/login.js';
import Home from '../components/Home/home.js'
import Supervise from '../components/Supervise/supervise.js'
import PatDetaile from '../components/PatDetail/patdetail.js'
import TotalData from '../components/TotalData/Totaldata.js'
import ChangePass from '../components/Changepass/changepass.js'
import End from '../components/Result/Result.js'
let fn = function ({ history,app }) {
    return (
        <Router history={history}>
               <Switch>
                    {/* {/* <Route path="/home" component={Home}/> */}
                    <Route path="/" exact component={Login}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/supervise" exact component={Supervise}/>
                    <Route path="/patdetail" exact component={PatDetaile}/>
                    <Route path="/totaldata" exact component={TotalData}/>
                    <Route path="/changepass" exact component={ChangePass}/>
                    <Route path="/result" exact component={End}/>
               </Switch>
        </Router>
    )
}

export default fn;