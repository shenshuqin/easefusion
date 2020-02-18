
import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import { Descriptions, Card } from 'antd';
import { Layout, Menu, Carousel ,Button} from 'antd';
import { Row, Col } from 'antd';
// import echartTheme from '../../../themeLight'
//不是按需加载的话文件太大
import echarts from 'echarts' 
// import echarts from 'echarts/lib/echarts'
//下面是按需加载
// import echarts from 'echarts/lib/echarts'
// //导入折线图
// import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import 'antd/dist/antd.css'
import Headeronly from '../common/header.js'
// 动效aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const { Header, Content, Footer } = Layout;
class Patdetail extends React.Component {
  constructor() {
      super();
      this.state={
        size: 'default',
        data: {
          "boolds":{xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],series: [38.2, 37.8, 37, 36.9, 37.5, 37, 37.9]},
          "pulse": {xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],series: [38.2, 37.8, 37, 36.9, 37.5, 37, 37.9]},
          "temperature": {xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],series: [38.2, 37.8, 37, 36.9, 37.5, 37, 37.9]},
          "name": "张三",//姓名
          "allergy": "海鲜",//过敏史
          "fist_time": 1581238112,//入院时间，时间戳
          "last_time": null,//出院时间
          "number": 15,//病床号
          "room": "1号房",
          "phone": "122222222222",//联系方式
          "department": "感染科",//科室
          "family_members": "张思"//家属姓名
      }
      };
     
    }
    
    onChange = e => {
        console.log('size checked', e.target.value);
        this.setState({
          size: e.target.value,
        });
      };
      componentWillMount(){
        //主题的设置要在willmounted中设置
        // echarts.registerTheme('Imooc',echartTheme);
      }
      getOptionTemp =()=> {
        let option = {
          color: ['#22CC77'],
          title:{
            text: '一周内体温变化条形图',
            subtext: '数据来自XX医院',
            x: 'center',
            align: 'right'
          },
          tooltip:{
            trigger:'axis',
          },
          xAxis:{
            data:this.state.data.temperature.xAxis
          },
          yAxis:
          [
            {  min:35,
                max:40,
                axisLabel:{
                    formatter: function (value) {
                        var texts = [];
                        if(value==35){
                            texts.push('35');
                        }
                        else if (value <=36) {
                            texts.push('36');
                        }
                        else if (value<= 37) {
                            texts.push('37');
                        }
                        else if(value<= 38){
                            texts.push('38');
                        }
                        else if(value<= 39){
                            texts.push('39');
                        }
                        else{
                            texts.push('40');
                        }
                        return texts + " °C";
    
                    }
                }
            }
        ],
          series:[
            {
              name:'体温',
              type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
              data:this.state.data.temperature.series
            }
          ]
        }
       return option
      }
      getOptionPulse =()=> {
        let option = {
          color: ['#3398DB'],
          title:{
            text: '一周内脉搏变化条形图',
            subtext: '数据来自XX医院',
            x: 'center',
            align: 'right'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          tooltip:{
            trigger:'axis',
          },
          xAxis:{
            data:this.state.data.pulse.xAxis
          },
          yAxis:
          {
            min: 20,
            max:140 ,
            axisLabel: {
                formatter: function (value) {
                    var texts = [];
                    if (value == 20) {
                        texts.push('20');
                    }
                    else if (value <= 40) {
                        texts.push('40');
                    }
                    else if (value <= 60) {
                        texts.push('60');
                    }
                    else if (value <= 80) {
                        texts.push('80');
                    }
                    else if (value <= 100) {
                        texts.push('100');
                    }
                    else if (value<=120){
                        texts.push('120');
                    }
                    else {
                        texts.push('140');
                    }
                    return texts + "bpm ";
    
                }
            }
        },
          series:[
            {
              name:'脉搏',
              type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
              data:this.state.data.pulse.series
            }
          ]
        }
       return option
      }
      getOptionBlood =()=> {
        let option = {
          color: ['#3398DB'],
          title:{
            text: '一周内血糖变化条形图',
            subtext: '数据来自XX医院',
            x: 'center',
            align: 'right'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
          tooltip:{
            trigger:'axis',
          },
          xAxis:{
            data:this.state.data.boolds.xAxis
          },
          yAxis:
          [
            {  min:3.9,
                max:8.9,
                axisLabel:{
                    formatter: function (value) {
                        var texts = [];
                        if(value==3.9){
                            texts.push('3.9');
                        }
                        else if (value <=4.9) {
                            texts.push('4.9');
                        }
                        else if (value<= 5.9) {
                            texts.push('5.9');
                        }
                        else if(value<= 6.9){
                            texts.push('6.9');
                        }
                        else if(value<= 7.9){
                            texts.push('7.9');
                        }
                        else{
                            texts.push('8.9');
                        }
                        return texts + " mmol/L";
    
                    }
                }
            }
        ],
          series:[
            {
              name:'血糖',
              type:'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
              data:this.state.data.boolds.series
            }
          ]
        }
       return option
      }
    componentDidMount(){
      AOS.init({
          duration : 1000,
          easing: 'ease-out-back',  
          delay: 600
      })
     
    let time = this.timestampToTime(this.state.data.fist_time)
    // console.log(time)
    let data = Object.assign({}, this.state.data, { fist_time:time})
　　this.setState({
　　　　data: data
　　})
    //   console.log(this.props.location.query)
    }
    //将时间戳转换为时间
    timestampToTime(timestamp) {
	    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    var Y = date.getFullYear() + '-';
	    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	    var D = date.getDate()<10?'0'+date.getDate() : ' ';
	    var h = date.getHours() + ':';
	    var m = date.getMinutes() + ':';
	    var s = date.getSeconds();
	    return Y + M + D ;
  	}
    render() {
        return (
            <div  id="components-layout-demo-top">
            <Layout className="layout" style={{backgroundColor:"#fff"}}>
            <Headeronly></Headeronly>
           <Content>
              <Descriptions bordered title="个人信息" size={this.state.size} style={{marginTop:"10px"}}>
                <Descriptions.Item label="姓名">{this.state.data.name}</Descriptions.Item>
                <Descriptions.Item label="入院时间">{this.state.data.fist_time}</Descriptions.Item>
                <Descriptions.Item label="出院时间">{this.state.data.last_time}</Descriptions.Item>
                <Descriptions.Item label="病床号">{this.state.data.number}</Descriptions.Item>
                <Descriptions.Item label="病房号">{this.state.data.room}</Descriptions.Item>
                <Descriptions.Item label="联系方式">{this.state.data.phone}</Descriptions.Item>
                <Descriptions.Item label="科室">{this.state.data.department}</Descriptions.Item>
                <Descriptions.Item label="家属姓名">{this.state.data.family_members}</Descriptions.Item>
                <Descriptions.Item label="过敏史">
                {this.state.data.allergy}
                </Descriptions.Item>
              </Descriptions>
              <br />
              <Card title="体质参数" >
                  <div  style={{width:'33%',float:'left'}}><ReactEcharts option={this.getOptionTemp()} theme="Imooc" className="chart"/></div>
                  <div  style={{width:'33%',float:'left'}}><ReactEcharts option={this.getOptionBlood()} theme="Imooc" className="chart" /></div>
                  <div  style={{width:'33%',float:'left'}}><ReactEcharts option={this.getOptionPulse()} theme="Imooc" className="chart"/></div>
              </Card>
            </Content>
            </Layout>
          </div>
        )
    }
  }

  export default Patdetail;
  