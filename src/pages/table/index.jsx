import React, { Component } from 'react'
import './styles.less'
import { Table, Divider } from 'antd';
import { connect } from 'react-redux'
import { getData, deleteData, backData } from '@/actions/table'




export default @connect(state => {
  return {
    data: state.table.data,
    messageObj: state.table.messageObj,
  }
}, {
  getData,
  deleteData,
  backData
})


class Index extends Component {
  state = {
    data: [],
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Action',
        key: 'action',
        render: text => (
          <span>
            <button onClick={() => {this.useUpdate(text)}}>Edit</button>
            <Divider type="vertical" />
            <button onClick={() => {this.useDelete(text.id)}}>Delete</button>
          </span>
        )
      }
    ]
  }
  //跳转编辑数据回显
  useUpdate = (obj) => {
    console.log(obj)
    const { backData } = this.props
    backData(obj)
    this.props.history.push('/home/add')
  }
  //删除数据
  useDelete = (delId) => {
    const { deleteData } = this.props
    const obj = { id: delId }
    deleteData(obj).then(() => {
      const { messageObj } = this.props
      if (Number(messageObj.status) === 200) {
        alert(messageObj.info)
        this.initData()
      } else {
        alert(messageObj.info)
      }
    })
  }
  render() {
    const { columns, data } = this.state
    return (
      <div className='pages_table'>
        <Table rowKey="id" columns={columns} dataSource={data} />
      </div>
    )
  }
  componentDidMount () {
    this.initData()
  }
  //初始化数据
  initData = () => {
    const { getData } = this.props
    getData().then(() => {
      const { data } = this.props
      console.log(data)
      this.setState({
        data
      })
    })
  }
}
