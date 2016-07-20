import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from '../components/CommentBox.js';
import App from '../app.js';
describe('<App />', () => {
  it('should render a commentBox component', () => {
    const wrapper = shallow(<App />);
   
    expect(wrapper.find(CommentBox)).to.have.length(1);
  });

  it('should pass data as props on rendering CommentBox component', () => {
    const wrapper = shallow(<App/>);
   
    expect(wrapper.find(CommentBox).props().asyncStorageKey).to.eql('comments');
  });
});
