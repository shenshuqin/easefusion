import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css'
import '../../assets/css/index.css'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class End extends React.Component  {
  constructor() {
      super();
  }
componentDidMount(){
    AOS.init({
        duration : 1000,
        easing: 'ease-out-back',  
        delay: 600
    })
}
    render() {
      return (
        <Result
        status="success"
        title="修改密码成功"
        subTitle="请赶紧用新密码登录趴"
      />
      );
    }
  }

  export default End;
  