import React, { ActivityIndicatorIOS, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import commonStyles from './mainComponentStyles';

const styles = StyleSheet.create(commonStyles);

const MainComponent = ({ onFetch, isFetching, buttonText }) => {
  if(isFetching) {
    return (
      <View style={styles.progressBar}>
        <ActivityIndicatorIOS size="large"/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={onFetch}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {buttonText}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

export default MainComponent;
