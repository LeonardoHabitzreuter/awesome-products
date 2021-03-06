import React from 'react'
import Icon from 'components/icon'
import { Menu } from 'antd'

const reloadPage = ({ key }) => {
  window.location.href = key
}

export default props => (
  <Menu theme='dark' defaultSelectedKeys={[window.location.pathname]} mode='inline' onClick={reloadPage}>
    <Menu.Item key='/storeProduct'>
      <Icon type='profile' />
      <span>Store a Product</span>
    </Menu.Item>
    <Menu.Item key='/products'>
      <Icon type='table' />
      <span>My Products</span>
    </Menu.Item>
  </Menu>
)
