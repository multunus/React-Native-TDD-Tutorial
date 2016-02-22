import createSagaMiddleware from 'redux-saga';
import mainWatcher from './main/saga';

const sagaMiddleware = createSagaMiddleware(mainWatcher);
export default sagaMiddleware;
