import React, { Component } from 'react-native';
import CommentBox from './components/CommentBox.js';

export default class App extends Component {
  render() {
    
    return (
        <CommentBox asyncStorageKey={'comments'}/>
    );
  }
}
