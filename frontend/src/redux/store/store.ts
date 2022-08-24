import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { SampleReducer } from '../utils/sample';

const createStore = () => {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    return reduxCreateStore(
        combineReducers({
            sample: SampleReducer,
    }),

    applyMiddleware(
        logger,
        thunk
    )
  )
}

const store = createStore();

export default store;