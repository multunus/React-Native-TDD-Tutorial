import React, { View, TouchableNativeFeedback, TextInput, Text } from 'react-native';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CommentForm from '../CommentForm.js';
import CommentBox from '../CommentBox.js';

describe('<CommentForm />', () => {
  beforeEach(function() {
     wrapper = shallow(<CommentForm />);
  });

  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });
  
  it('should have 2 TextInput components', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  });

  it('should have a submit button', () => {
    expect(wrapper.find(TouchableNativeFeedback)).to.have.length(1);
    expect(wrapper.find(TouchableNativeFeedback).containsMatchingElement(<Text>Submit</Text>)).to.equal(true);
  });

  it('should have author input component with value dependent on state', () => {
   wrapper.setState({name: 'JK'});
   
   expect(wrapper.find(TextInput).first().props().value).to.equal('JK');
  });
  
  it('should have the comment input component with value dependent on state', () => {
   wrapper.setState({comment: 'An awesome comment'});
   
   expect(wrapper.find(TextInput).at(1).props().value).to.equal('An awesome comment');
  });
  
  it('should change state when the text of author input component changes', () => {
   const authorInputComponent = wrapper.find('TextInput').first();
  
   authorInputComponent.simulate('ChangeText','wenger');
   expect(wrapper.state('name')).to.equal('wenger');
  });
  
  it('should change state when the text of comment input component changes', () => {
   const commentInputComponent = wrapper.find('TextInput').at(1);
   
   commentInputComponent.simulate('ChangeText','arsenal');
   
   expect(wrapper.state('comment')).to.equal('arsenal');
  });

  it('invokes handleCommitSubmit method of CommentBox with author and comment', () => {
    sinon.stub(CommentBox.prototype, "handleCommentSubmit");

    const wrapper = shallow(<CommentForm onCommentSubmit={CommentBox.prototype.handleCommentSubmit}/>);
    const submitButton = wrapper.find('TouchableNativeFeedback').first();
    wrapper.setState({name: 'JK '});
    wrapper.setState({comment: ' Arsenal is the best'});

    submitButton.simulate('press');
 
    expect(CommentBox.prototype.handleCommentSubmit.calledWith({author: 'JK', text: 'Arsenal is the best'})).to.be.true;
    CommentBox.prototype.handleCommentSubmit.restore();
  });

  it('sets the state of two input fields to the initial state on press', () => {
    sinon.stub(CommentBox.prototype, "handleCommentSubmit");
  
    const wrapper = shallow(<CommentForm onCommentSubmit={CommentBox.prototype.handleCommentSubmit}/>);
    const submitButton = wrapper.find('TouchableNativeFeedback').first();
    wrapper.setState({name: 'JK'});
    wrapper.setState({comment: 'Arsenal is the best'});
 
    submitButton.simulate('press');
 
    expect(wrapper.state('name')).to.equal("");
    expect(wrapper.state('comment')).to.equal("");
  
    CommentBox.prototype.handleCommentSubmit.restore();
  });
});
