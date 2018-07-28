import React, { Component } from 'react'
import Menu from 'components/menu'
import Icon from 'components/icon'
import { Layout as AntLayout, Breadcrumb } from 'antd'
import styles from './styles.styl'
const Content = AntLayout.Content
const Footer = AntLayout.Footer
const Sider = AntLayout.Sider

const breadcrumbsByURL = [{
  url: '/',
  breadcrumb: 'My products'
}, {
  url: '/products',
  breadcrumb: 'My products'
}, {
  url: '/newProduct',
  breadcrumb: 'New product'
}]

export default class Layout extends Component {
  state = {
    collapsed: false
  }

  onCollapse (collapsed) {
    this.setState({ collapsed })
  }

  render () {
    return (
      <AntLayout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={value => this.onCollapse(value)}
        >
          <div className='logo'>
            <a href='/'><Icon type='ant-design' className={styles.logo} /></a>
          </div>
          <Menu />
        </Sider>
        <AntLayout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>{
              <Breadcrumb.Item>{
                breadcrumbsByURL
                  .find(element => element.url === window.location.pathname)
                  .breadcrumb
              }</Breadcrumb.Item>
            }</Breadcrumb>
            <div style={{ padding: 24, background: '#fff', overflow: 'auto' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Awesome products! ©2018 Creted by Leonardo Habitzreuter
          </Footer>
        </AntLayout>
      </AntLayout>
    )
  }
}
