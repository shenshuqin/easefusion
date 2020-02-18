import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout, Menu, Carousel ,Button} from 'antd';
import { Row, Col } from 'antd';
import home from'./homeCss.js'
import Headeronly from '../common/header.js'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const { Header, Content, Footer } = Layout;
class Home extends React.Component {
  constructor() {
      super();
      this.state={currentIndex:0};
    }
    componentDidMount(){
      AOS.init({
          duration : 1000,
          easing: 'ease-out-back',  
          delay: 600
      })
  }
    setCurrentIndex=(event)=>{
      console.log(event.key)
      this.setState({
      currentIndex: parseInt(event.key, 10)
      
      })
    }
    render() {
      let content=["首页","监测中心","动态数据"];
      return (
        <div id="components-layout-demo-top">
        <Layout className="layout" style={{backgroundColor:"#fff"}}>
        <Headeronly></Headeronly>
          <Content>
            <Carousel autoplay >
              <div>
                <h3><img src={require('../../assets/img/slide1.jpg')} /></h3>
              </div>
              <div>
              <h3><img src={require('../../assets/img/slide2.jpg')} /></h3>
              </div>
              <div>
              <h3><img src={require('../../assets/img/slide1.jpg')} /></h3>
              </div>
            </Carousel>
            <div style={home.advantage}>
              <div style={home.adHeader}><p style={{fontSize:'22px',fontWeight:'600',marginBottom:'0px'}}>项目优势</p><p>PROJECT ADVANTAGE</p></div>
              <div style={{width:'88%',margin:'0 auto'}} >
                  <div style={home.adCont} >
                    <div style={{width:'60%',height:'100%',margin:'0 auto',backgroundColor:'#2F4056'}}>
                    <i className="fa  fa-medkit" style={{color:'#fff',fontSize:"20px",marginTop:'8px'}}></i>
                     <p> 减轻医护压力</p>
                      </div>
                  </div>
                  <div style={home.adCont} >
                    <div style={{width:'60%',height:'100%',margin:'0 auto',backgroundColor:'#2F4056'}}>
                    <i className="fa  fa-stethoscope" style={{color:'#fff',fontSize:"20px",marginTop:'8px'}}></i>
                     <p> 医患交流便捷</p>
                      </div>
                  </div>
                  <div style={home.adCont} >
                    <div style={{width:'60%',height:'100%',margin:'0 auto',backgroundColor:'#2F4056'}}>
                    <i className="fa  fa-bar-chart" style={{color:'#fff',fontSize:"20px",marginTop:'8px'}}></i>
                     <p> 掌握输液动态</p>
                      </div>
                  </div>
                  <div style={home.adCont}>
                    <div style={{width:'60%',height:'100%',margin:'0 auto',backgroundColor:'#2F4056'}}>
                    <i className="fa  fa-ambulance" style={{color:'#fff',fontSize:"20px",marginTop:'8px'}}></i>
                     <p>杜绝配药错误</p>
                      </div>
                  </div>
              </div>
              <Row>
              <Col span={12} style={{height:'280px', marginTop:'50px'}}>
                <p className="san">取缔三查七对</p>
                <p className="qi">Ban three checks and seven pairs</p>
                <p className="cont">通过配药系统,药患匹配系统,输液监控系统,减少在配药的过程中可能有药品过期，配错，少配和重复配药的问题，在输液过程中可能存在药患匹配错误，以及输液速度过快或者即将输完的情况,基本可以取代三查七对制度,减轻医护人员的工作压力。</p>
                {/* <Button type="primary">Primary</Button> */}
              </Col>
              <Col  span={12} style={{height:'280px', marginTop:'50px'}}><img style={{width:'68%',height:'280px',marginLeft:'14%'}} src={require('../../assets/img/slide3.jpg')} /></Col>
            </Row>
            </div>
            <div id="homeImg"><div className="text"><span>安</span><span>心</span><span>点</span><span>滴</span></div></div>
            <div style={home.adHeader}><p style={{fontSize:'22px',fontWeight:'600',marginBottom:'0px',marginTop:'50px'}}>项目结语</p><p>PROJECT EPILOGUE</p></div>
            <div className="contimg" style={{textAlign:'center'}}>安心点滴点滴系统可以让医护人员随时了解各个病房的输液情况,减轻医护人员的工作压力,让医护人员省心,患者可以随时查看自身的基本情况,做到让患者安心</div>
            </Content>
            <Footer style={{textAlign:'center',letterSpacing:'2px'}}>技术支持:安心点滴项目组</Footer>
          </Layout>
        </div>
      )
    }
  }

  export default Home;
  