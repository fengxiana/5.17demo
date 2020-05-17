import React from 'react'
import './styles.less'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { Login } from '@/actions/login'


export default @connect(state => {
  return {
    data: state.login.data
  }
}, {
  Login
})



@Form.create({

})



class Index extends React.Component {
  //登录
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { Login } = this.props
        Login(values).then(() => {
          const { data } = this.props
          if (Number(data.status) === 200) {
            alert(data.message)
            sessionStorage.setItem('isLogin', true)
            this.props.history.push('/home')
          } else {
            alert(data.message)
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='pages_login'>
        <div className='login_center'>
          <p className='title'>
            SIGN IN
          </p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  placeholder="USERNAME"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  type="password"
                  placeholder="PASSWORD"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

