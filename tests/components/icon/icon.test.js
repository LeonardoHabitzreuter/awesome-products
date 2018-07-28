import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../../../src/components/icon'

describe('Icon component', () => {
  const wrapper = shallow(<Icon type='ant-design' className='iconTest' />)

  test('should renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should has the same type and class passed through the props', () => {
    expect(wrapper.find('Icon').props()).toMatchObject({
      type: 'ant-design',
      className: 'iconTest'
    })
  })
})
