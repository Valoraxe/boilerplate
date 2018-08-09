import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../../components/DashboardPage'

test("render dashboard", () => {
  const wrapper = shallow(<DashboardPage/>)
  expect(wrapper).toMatchSnapshot()
})
