import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default initState =>
    createStore(
        rootReducers,
        initState,
        composeEnhancers(applyMiddleware(thunk))
    );
