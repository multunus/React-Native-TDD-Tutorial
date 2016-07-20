import React, {Component, View, Text } from 'react-native';

export default class Comment extends React.Component {
  render() {
    return(
      <View>
         <Text>
           {this.props.author}
          </Text>
          <Text>
           {this.props.children}
          </Text>
      </View>
    );
  }
}
