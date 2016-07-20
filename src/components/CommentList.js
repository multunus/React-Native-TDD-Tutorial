import React, {Component, View, ListView} from 'react-native';
import Comment from './Comment.js';

export default class CommentList extends React.Component {
  static propTypes =  {
    data: React.PropTypes.array
  };
  
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({rowHasChanged: 
(r1, r2) => r1 !== r2}).cloneWithRows(this.props.data)
    };
  }
  
  componentWillReceiveProps(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.data)
    });
  }
  
  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderComment.bind(this)}
        />
    );
  }
  renderComment(row) {
    return (
        <Comment author={row.author} >{row.text}</Comment>
    );
  }
}
