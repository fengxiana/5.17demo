import React, { Component } from 'react'
import './styles.less'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { Add, Update } from '@/actions/add'


export default @connect(state => {
  return {
    data: state.add.data,
    currentObj: state.table.currentObj,
    title: state.home.title
  }
}, {
  Add,
  Update
})

@Form.create({
  mapPropsToFields(props) {
    const { name, age, gender } = props.currentObj
    return {
      name: Form.createFormField({
        value: name
      }),
      age: Form.createFormField({
        value: age
      }),
      gender: Form.createFormField({
        value: gender
      })
    }
  }
})

class Index extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { title } = this.props
        if (title === '添加') {
          this.useAdd(values)
        } else {
          this.useUpdate(values)
        }
      }
    })
  }

  //添加用户
  useAdd = (values) => {
    const { Add } = this.props
    Add(values).then(() => {
      const { data } = this.props
      if (Number(data.status) === 200) {
        alert(data.info)
        this.props.history.push('/home/table')
      } else {
        alert(data.info)
      }
    })  
  }

  //修改用户
  useUpdate = (values) => {
    const { Update, currentObj } = this.props
    values = { ...values, id: currentObj.id }
    Update(values).then(() => {
      const { data } = this.props
      if (Number(data.status) === 200) {
        alert(data.status.message)
      } else {
        alert(data.status.message)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='pages_add'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input
                placeholder="Name"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <Input
                placeholder="Age"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please input your price!' }],
            })(
              <Input
                placeholder="Gender"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

