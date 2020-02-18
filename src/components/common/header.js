import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Dropdown, Icon ,Button, Modal} from 'antd';
import { Row, Col,Badge } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
class Headeronly extends React.Component {
  constructor() {
      super();
      this.state={
      };
    }
    componentDidMount(){

    }

    render() {
      function success() {
        Modal.success({
          content: '退出成功',
        });
      }
      const menu = (
        <Menu>
          <Menu.Item>
          <a onClick={success}>退出登录</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
             修改密码
            </a>
          </Menu.Item>
        </Menu>
      );
      return (
        <div>
            <Header style={{backgroundColor:'#393D49',height:'58px'}}>
             <p className="logo" style={{letterSpacing:"8px"}}>安心点滴系统</p>
              <i className="fa fa-heartbeat infusion_icon" style={{color:'#DC1D23',fontSize:"20px"}}></i>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '56px',float:'right' }}
              >
                <Menu.Item id="menu"  style={{backgroundColor:"#393D49",width:'160px',color:"#fff",textAlign:'center'}}><Link to="/home" className="alink">首页</Link></Menu.Item>
                <Menu.Item id="menu"  style={{backgroundColor:"#393D49",width:'160px',color:"#fff",textAlign:'center'}}><Link to="/supervise" className="alink">监测中心</Link></Menu.Item>
                <Menu.Item id="menu"  style={{backgroundColor:"#393D49",width:'160px',color:"#fff",textAlign:'center'}}><Link to="/totaldata" className="alink">动态数据</Link></Menu.Item>
                <Menu.Item  style={{backgroundColor:"#393D49",width:'160px',color:"#fff",textAlign:'center'}}>
                  <Dropdown overlay={menu}>
                   <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    test<Icon type="down" />
                  </span>
              </Dropdown>
              </Menu.Item>
              </Menu>
            </Header>
            </div>
      )
    }
  }

  export default Headeronly;
  