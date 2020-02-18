import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout, Menu, Input,List,Typography,Icon,Pagination,Card } from 'antd';
import { Row, Col,Badge } from 'antd';
import Headeronly from '../common/header.js'
import supervise from './superviseCss.js'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const { Header, Content, Footer } = Layout;
const { Search } = Input;
class Supervise extends React.Component {
  constructor() {
      super();
      this.state={
        card:[
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 500 },
          { "room":" 1病房","num":'40',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 300 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 100 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 300 },
          { "room":" 1病房","num":'30',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 100 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 300 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 500 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 100 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 300 },
          { "room":" 1病房","num":'80',"name": "张三", "diandi_speed": 33, "diandi_shengyu": 500 },
        ],
        data:[
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'003',time:'2019-8:00'},
          {text:'输液速度过快',uid:'1',time:'2019-8:00'},
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'003',time:'2019-8:00'},
          {text:'输液速度过快',uid:'001',time:'2019-8:00'},
          {text:'输液速度过快',uid:'003',time:'2019-8:00'},
      ],
      };
    }
    componentDidMount(){
      AOS.init({
          duration : 1000,
          easing: 'ease-out-back',  
          delay: 600
      })
      this.resoveCard();
    }
    resoveCard(){
      let card = document.getElementsByClassName('boxIner');
      let icon = document.getElementsByClassName('boxIcon');
      this.state.card.forEach((item,index)=>{
        let currentHeight = (item.diandi_shengyu *150)/500 +'px';
        card[index].style.height = currentHeight //总高度158px/500ml
        if(item.diandi_shengyu == 300){
          card[index].style.backgroundColor = '#f3bb5b'
        }else if(item.diandi_shengyu == 100){
          card[index].style.backgroundColor = 'red'
          icon[index].style.display="block"
        }else{
          card[index].style.backgroundColor = 'cornflowerblue'
        }
      })
    }
    render() {
      return (
        <div id="components-layout-demo-top">
        <Layout className="layout" style={{backgroundColor:"#fff"}}>
          <Headeronly></Headeronly>
          <Content>
        <Row >
        <Col span={24}>
          <Search
            placeholder="请输入病人信息"
            enterButton
            size="large"
            style={{width:'30%',float:'right',margin:'20px 0'}}
            onSearch={value => console.log(value)}
            />
            </Col>
            </Row>
             <Row style={{marginTop:'-10px'}}>
                <Col span={6} style={{marginTop:'-50px'}}>
                <Badge count={this.state.data.length} overflowCount={5} style={{marginTop:'10px',marginRight:'5px'}}><h3 style={{ margin: '16px 10px' }} className="warning">输液警告</h3></Badge>
                <List
                    size="small"
                    // header={<div>Header</div>}
                    footer={<div><Pagination defaultCurrent={1} total={50} /></div>}
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => <List.Item><span className="patient">{item.uid}</span>{item.text}<span style={supervise.time}>{item.time}</span></List.Item>}
                />
                </Col>
                <Col span={18} style={{marginTop:'2px'}}>
                  {
                    this.state.card.map((item,key) =>{
                      return (
                    <Link to={{pathname:'/patdetail',query:{num:`${item.num}`}}} > 
                     <Card key={key} title={<span style={{fontSize:'14px'}}>{item.room}<span style={{marginLeft:'20px'}}>{item.name}</span></span>} extra={<span className="num">{item.num}</span>} style={{ width: "18%" ,float:'left',marginLeft:'20px',marginBottom:'20px'}}>
                        <div id="card" >
                          <div className="cardLeft">
                      <div className="cardBox"><div className="boxIner" ></div></div>
                          </div>
                          <div className="cardRight" style={{position:'relative'}}>
                           <Icon type="alert" className="boxIcon" style={{display:'inline-block',position:'absolute',top:'15px',right:'20px',color:'red',fontSize:'20px',display:'none'}}/>
                            <p><span style={{fontSize:'16px',fontWeight:'500'}}>剩余:</span><span>{item.diandi_shengyu}<span>ml</span></span></p>
                            <p><span style={{fontSize:'16px',fontWeight:'500'}}>滴速:</span><span>{item.diandi_speed}<span>滴/分</span></span></p>
                          </div>
                        </div>
                   </Card>
                   </Link>
                      )
                    })
                  }
                 
                </Col>
                <div><Pagination defaultCurrent={1} total={50} style={{marginLeft:'25%'}} /></div>
                </Row>
          </Content>
            <Footer style={{textAlign:'center',letterSpacing:'2px'}}>技术支持:安心点滴项目组</Footer>
          </Layout>
        </div>
      )
    }
  }

  export default Supervise;
  