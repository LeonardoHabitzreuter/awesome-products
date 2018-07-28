import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../../src/components/button'

describe('button component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<Button type='button' className='btn btn-danger'>Test</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  test('should has submit type and primary class as default props', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.props()).toMatchObject({
      type: 'submit',
      className: 'btn btn-primary'
    })
  })

  test('should has the same type and style passed through the props', () => {
    const wrapper = shallow(<Button type='button' className='btn btn-danger' />)
    expect(wrapper.props()).toMatchObject({
      type: 'button',
      className: 'btn btn-danger'
    })
  })

  test('should render the children when passed', () => {
    const wrapper = shallow(<Button type='button' className='btn btn-danger'>Test</Button>)
    expect(wrapper.text()).toBe('Test')
  })
})
