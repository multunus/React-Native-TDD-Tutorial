import 'es6-symbol/implement'; // Polyfill for ES6 symbol
import { applyMiddleware, createStore } from 'redux';
import reducers from './../modules/reducers';
import sagaMiddleware from './../modules/sagas';
import { Iterable } from 'immutable';

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

export default function configureStore() {
  return createStore(reducers, applyMiddleware(...middlewares));
}
