import React, { Component } from 'react'
import './styles.less'
import echarts from 'echarts'

export default class Index extends Component {
  state = {
    option : {
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
  componentDidMount () {
    const myChart = echarts.init(document.getElementById('main'));
    const { option } = this.state
    myChart.setOption(option);
  }
  render() {
    return (
      <div className='pages_chart'>
        <div className='box'>
          <div id="main" style={{width: '100%',height: '100%'}}></div>
        </div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    )
  }
}
