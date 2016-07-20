import React, {Component, View, TouchableNativeFeedback, Text, TextInput} from 'react-native';

export default class CommentForm extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};
  }
  static propTypes = {
    onCommentSubmit: React.PropTypes.func
  };

  render() {
    return(
        <View>
          <TextInput
           placeholder="name"
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({name: text})}
           value={this.state.name}
          />
          <TextInput
           placeholder="comment"
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(content) => this.setState({comment: content})}
           value={this.state.comment}
          />
          <TouchableNativeFeedback
            onPress={() => this.onPressButton()}>
            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Submit</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    );
  }
  onPressButton() {
    var author = this.state.name.trim();
    var comment = this.state.comment.trim();
    this.state = {name: '', comment: ''};
    this.props.onCommentSubmit({author: author, text: comment});
  }
}
