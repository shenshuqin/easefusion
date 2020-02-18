import React from 'react'
import {Link} from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import '../../assets/css/index.css'
import md5 from "md5";
import axios from 'axios'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
  //在此生命周期可以进行数据请求
componentDidMount(){
  const _this=this;  
    AOS.init({
        duration : 1000,
        easing: 'ease-out-back',  
        delay: 600
    });
    this.getDate();
}
//登录请求
  getDate = (data) => {
    console.log(data)
    axios.post('/postdata', data)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          let data={
            username:values.username,
            password:this.md5Pwd(values.password)
          }
          this.getDate(data)
        }
      });
    };
    // handleSubmit(){
    //   this.props.history.push("/home")
    // }
    //MD5双重加密
    md5Pwd(pwd){
      const salt ="fndjvrfewewq9eu!";
      return md5(md5(pwd+salt));
    }
    render() {
      let { username, password } = this.state;
      const { getFieldDecorator } = this.props.form;
      return (
    <React.Fragment>
    <div className="container">
     <div id="components-form-demo-normal-login">
       <div className="login_header" data-aos="fade-left">
         <span>EASE</span><span className="petal"></span><br/>
         <span>欢迎登录安心点滴管理系统</span></div>
         <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名" 
              
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            {/* <Link to="/home"> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            {/* </Link> */}
          </Form.Item>
        </Form>
        </div>
         </div>
        </React.Fragment>
      );
    }
  }

  export default Form.create()(Login);
  