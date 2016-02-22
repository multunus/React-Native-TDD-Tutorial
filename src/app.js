import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import Root from './screens/root';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
