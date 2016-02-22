import 'es6-symbol/implement';
import { applyMiddleware, createStore } from 'redux';
import reducers from './../modules/reducers';
import sagaMiddleware from './../modules/sagas';

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export default function configureStore() {
  return createStore(reducers, applyMiddleware(...middlewares));
}
