import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

const configureStore = () => {
    const middleware = [thunk, logger];
    return createStore(reducer, applyMiddleware(...middleware));
}

export { configureStore };