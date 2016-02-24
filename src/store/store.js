import 'es6-symbol/implement'; // Polyfill for ES6 symbol
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './../modules/reducers';
import sagaMiddleware from './../modules/sagas';
import { Iterable } from 'immutable';
import reduxPersistImmutable from 'redux-persist-immutable';

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const stateTransformer = (state) => {
    const logState = {};
    for (let key in state) {
      if (state.hasOwnProperty(key) && Iterable.isIterable(state[key])) {
        logState[key] = state[key].toJS();
      }
    }
    return logState;
  };
  const actionTransformer = (action) => {
    if (Iterable.isIterable(action.payload)) return { type: action.type, payload: action.payload.toJS() };
    else return action;
  };
  const createLogger = require('redux-logger');
  const logger = createLogger({ collapsed: true, stateTransformer, actionTransformer });
  middlewares.push(logger);
}

const store = autoRehydrate()(createStore)(reducers, applyMiddleware(...middlewares));
persistStore(store, { storage: AsyncStorage, transforms: [reduxPersistImmutable] });

export default store;
