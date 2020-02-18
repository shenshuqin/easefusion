import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import '../../assets/css/index.css'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class Changepass extends React.Component {
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
  handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
    <React.Fragment>
    <div className="container">
     <div id="components-form-demo-normal-login">
       <div className="login_header" data-aos="fade-left">
         <span>EASE</span><span className="petal"></span><br/>
         <span>修改密码</span></div>
         <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your oldPassword!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="原密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your newPassword!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="新密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Link to="/result">
            <Button type="primary" htmlType="submit" className="login-form-button">
              修改密码
            </Button>
            </Link>
          </Form.Item>
        </Form>
        </div>
         </div>
        </React.Fragment>
      );
    }
  }

  export default Form.create()(Changepass);
  