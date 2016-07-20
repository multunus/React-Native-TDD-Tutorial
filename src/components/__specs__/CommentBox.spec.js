import React, { View, Text, AsyncStorage } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CommentBox from '../CommentBox.js';
import CommentList from '../CommentList.js';
import CommentForm from '../CommentForm.js';

describe('<CommentBox />', () => {
  beforeEach(function() {
    wrapper = shallow(<CommentBox/>);
  });

  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should have a title Comment It', () => {
    expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
  }); 

  it('should render CommentList component', () => {
    expect(wrapper.find(CommentList)).to.have.length(1);
  });
 
  it('should render CommentForm component', () => {
    expect(wrapper.find(CommentForm)).to.have.length(1);
  });
  
  it('should have an initial state', () => {
    expect(wrapper.state('data').length).to.equal(0);
  });
  
  it('should pass its state data as props to commentlist component', () => {
    expect(wrapper.find(CommentList).props().data).to.eql(wrapper.state('data'));
  });
  
  it('should pass its handleCommentSubmit method as props to CommentForm component', () => {
    commentBox = new CommentBox();
   
    var definedMethod = commentBox.handleCommentSubmit;
   
    var passedMethod = wrapper.find(CommentForm).props().onCommentSubmit;
    expect(definedMethod.toString()).to.equal(passedMethod.toString());
  });
  
  describe('handleCommentSubmit', () => {
    it('stores comment data using asyncstorage on comment submit', () => {
      var data = [
        { author: "Pete Hunt", text: "This is one comment"},
        { author: "Jordan Walke", text: "This is a super comment"},
        { author: "Jordan Walkerr", text: "This is an ordinary comment"}
      ];
    
      commentBox = new CommentBox({asyncStorageKey: 'comments'});
      commentBox.state.data = data;
      var commentData = {author: 'JK', text: 'Arsenal is the best'};
      data.push(commentData);
      var spy = sinon.spy(AsyncStorage, "setItem");
      
      commentBox.handleCommentSubmit(commentData);
    
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith('comments', JSON.stringify(data))).to.be.true;
    });
    it('invokes the getComments method', () => {
      var data = [
        { author: "Pete Hunt", text: "This is one comment"},
        { author: "Jordan Walke", text: "This is a super comment"},
        { author: "Jordan Walkerr", text: "This is an ordinary comment"}
      ];

      commentBox = new CommentBox({asyncStorageKey: 'comments'});
      sinon.stub(commentBox, "getComments");
      var commentData = {author: 'JK', text: 'Arsenal is the best'};
      
      commentBox.handleCommentSubmit(commentData);
      
      expect(commentBox.getComments.calledOnce).to.be.true;
   });
  });
});
