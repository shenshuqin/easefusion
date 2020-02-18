
import React, { Component } from 'react'
import { Router,Route,Link,Switch,Redirect } from 'dva/router';
import { Layout,Statistic, Card, Row, Col, Icon} from 'antd';
//不是按需加载的话文件太大
import Hightcharts from 'highcharts'
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
      };
     
    }
    
    componentWillMount(){
      }
    componentDidMount(){
      AOS.init({
          duration : 1000,
          easing: 'ease-out-back',  
          delay: 600
      })
      Hightcharts.chart('main',{
        chart: {
            type: 'column'
        },
        title: {
            text: '病人治愈情况'
        },
        subtitle: {
            text: '数据来源: xxx医院'
        },
        xAxis: {
            categories: [
                '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '数值'
            }
        },
        tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series: [{
            name: '疑似',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: '轻微',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
            name: '重症',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
            name: '死亡',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
      })
      Hightcharts.chart('chart',{
        chart: {
            type: 'line'
        },
        title: {
            text: '输液情况'
        },
        subtitle: {
            text: '数据来源: XXX医院'
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            title: {
                text: '%'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    // 开启数据标签
                    enabled: true          
                },
                // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                enableMouseTracking: false
            }
        },
        series: [{
            name: '输液正常',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '输液异常',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
      })
    }
    render() {
        return (
            <div  id="components-layout-demo-top">
            <Layout className="layout" style={{backgroundColor:"#fff"}}>
            <Headeronly></Headeronly>
            <Content>
                <span style={{color:'#d2d2d2'}}>截止 2020-02-17 14:20数据统计</span>
             <div style={{ background: '#F0F0F0', padding: '10px'}}>
                <Row gutter={16}>
                <Col span={12}>
                    <Card   style={{width:'50%',height:"100px",float:'right',textAlign:'center',paddingTop:'10px'}}>
                    <Statistic title="住院总人数" value={112893} className="static" />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{width:'50%',height:"100px",textAlign:'center',paddingTop:'10px'}}>
                    <Statistic title="剩余床位" value={112893} className="static" />
                    </Card>
                </Col>
        </Row>
        </div>
            <div style={{ background: '#F0F0F0', padding: '10px' }}>
            <Row gutter={16}>
            <Col span={12}>
                <Card   style={{width:'50%',height:"100px",float:'right',textAlign:'center',paddingTop:'10px'}}>
                <Statistic
                    title="输液效率"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card style={{width:'50%',height:"100px",textAlign:'center',paddingTop:'10px'}}>
                <Statistic
                    title="输液差错率"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                />
                </Card>
            </Col>
            </Row>
        </div>
        <div id="chart"></div>
        <div id="main"></div>
        </Content>
        </Layout>
          </div>
        )
    }
  }

  export default Patdetail;
  