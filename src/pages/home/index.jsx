import React, { Component } from 'react'
import './styles.less'
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import add from '@/pages/add'
import table from '@/pages/table'
import chart from '@/pages/chart'
import { connect } from 'react-redux'
import { optTitle } from '@/actions/home'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


export default @connect(state => {
  return {
    username: state.login.data.data.user_name
  }
}, {
  optTitle
})

class Index extends Component {
  state = {
    username: ''
  }
  //判断为修改
  updateTitle = () => {
    const { optTitle } = this.props
    optTitle('修改')
  }
  //判断为添加
  addTitle = () => {
    const { optTitle } = this.props
    optTitle('添加')
  }
  //存储用户名
  putName = () => {
    const { username } = this.props
    this.setState({
      username
    })
  }
  componentDidMount () {
    this.putName()
  }
  render() {
    const { username } = this.state
    // console.log(username)
    return (
      <div className='pages_home'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <div style={{ width: '100%' }}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
              >
                <Menu.Item key="1">
                  <NavLink onClick={this.updateTitle} to='/home/table'>
                    <Icon type="pie-chart" />
                    <span>table</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink onClick={this.addTitle} to='/home/add'>
                    <Icon type="desktop" />
                    <span>add</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to='/home/chart'>
                    <Icon type="inbox" />
                    <span>chart</span>
                  </NavLink>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>Navigation One</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Sider>
          <Layout>
            <Header style={{ background: 'white' }}>
              <h2>
                UserName: {username}
              </h2>
            </Header>
            <Content>
              <Switch>
                <Route path='/home/table' component={table} />
                <Route path='/home/add' component={add} />
                <Route path='/home/chart' component={chart} />
                <Redirect from='/home' to='/home/table' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

