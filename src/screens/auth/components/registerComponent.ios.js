import React, { ActivityIndicatorIOS, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import commonStyles from './registerComponentStyles';

const styles = StyleSheet.create(commonStyles);

const RegisterComponent = ({ onRegister, isRegistering, buttonText }) => {

  const onPressRegister = () => onRegister({ username: 'username', password: 'password' });

  if(isRegistering) {
    return (
      <View style={styles.progressBar}>
        <ActivityIndicatorIOS size="large"/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={onPressRegister}>
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

export default RegisterComponent;
