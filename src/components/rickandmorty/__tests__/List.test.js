import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

describe('List Component', () => {
  it('should render a List', () => {
    const wrapper = shallow(<List characterArr={[{
      name: 'Person 1',
      image: 'Person1.jpeg',
      id: 1,
      status: 'dedd',
      origin: 'place',
      location: 'place',
      species: 'person1',
    },
    {
      name: 'Person 2',
      image: 'Person2.jpeg',
      id: 2,
      status: 'dedd',
      origin: 'place',
      location: 'place',
      species: 'person1'
    }
    ]} onIncrement={(() => 'hi')}
    onDecrement={(() => 'bye')} page={1} />);

    expect(wrapper).toMatchSnapshot();
  });
});
