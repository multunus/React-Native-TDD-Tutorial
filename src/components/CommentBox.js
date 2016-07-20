import React, {Component,Text, View, AsyncStorage } from 'react-native';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
 constructor(props) {
   super(props);
   this.state = {data: []};
   this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
   this.getComments = this.getComments.bind(this);
 }

 static propTypes = {
   asyncStorageKey: React.PropTypes.string
 };
 
 getComments() {
   AsyncStorage.getItem(this.props.asyncStorageKey)
     .then((comments) => {
       comments = JSON.parse(comments);
       this.setState({ data: comments });
     })
    .catch(() => {
    });
 }
 
 handleCommentSubmit(comment_data) {
   var comments = this.state.data;
   comments.push(comment_data);
   AsyncStorage.setItem(this.props.asyncStorageKey, JSON.stringify(comments));
   this.getComments();
 }
 
 render() {
   return(
     <View>
       <Text>Comment It</Text>
       <CommentList data={this.state.data}/>
       <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
     </View>
  );
 }
}
