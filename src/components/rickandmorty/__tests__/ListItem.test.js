import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('ListItem component', () => {
  it('can render a ListItem', () => {
    const wrapper = shallow(<ListItem name="a name" image="image.jpeg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
