import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'
import * as renderer from 'react-test-renderer'

describe('Icon',() => {
  it('icon render successfully', () => {
    const json = renderer.create(<Icon name="cake"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('icon can be onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="cake" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})


