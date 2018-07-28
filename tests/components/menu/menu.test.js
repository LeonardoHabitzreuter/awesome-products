import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../../../src/components/menu'

describe('Menu component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper).toMatchSnapshot()
  })
})
