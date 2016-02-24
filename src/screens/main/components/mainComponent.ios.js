import React, { ActivityIndicatorIOS, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  progressBar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});

const MainComponent = ({ onFetch, isFetching }) => {
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
              Fetch Data
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

export default MainComponent;
