import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../Detail';

jest.mock('../../services/getCharacters');

describe('Detail Component', () => {
  it('should render Detail', () => {
    const wrapper = shallow(<Detail match={{ params: { id: '1' } }} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
