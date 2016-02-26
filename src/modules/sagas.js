import createSagaMiddleware from 'redux-saga';
import authWatcher from './auth/saga';

const sagaMiddleware = createSagaMiddleware(authWatcher);
export default sagaMiddleware;
