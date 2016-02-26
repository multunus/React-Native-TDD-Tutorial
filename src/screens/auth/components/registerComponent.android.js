import React, { ProgressBarAndroid, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import commonStyles from './registerComponentStyles';

const styles = StyleSheet.create(commonStyles);

const RegisterComponent = ({ onRegister, isRegistering, buttonText }) => {

  const onPressRegister = () => onRegister({ username: 'username', password: 'password' });

  if(isRegistering) {
    return (
      <View style={styles.progressBar}>
        <ProgressBarAndroid  styleAttr="Inverse"/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
          onPress={onPressRegister}
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

export default RegisterComponent;
