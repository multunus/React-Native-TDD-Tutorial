import React, { ProgressBarAndroid, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

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
        <ProgressBarAndroid  styleAttr="Inverse"/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
          onPress={onFetch}
        >
        <View style={styles.button}>
          <Text style={styles.text}>
            Fetch Data
          </Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

export default MainComponent;
