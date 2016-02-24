import React, { ProgressBarAndroid, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import commonStyles from './mainComponentStyles';

const styles = StyleSheet.create(commonStyles);

const MainComponent = ({ onFetch, isFetching, buttonText }) => {
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
            {buttonText}
          </Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

export default MainComponent;
