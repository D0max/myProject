import { 
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();
const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  router: connectRouter(history),

});

const middleware = [
  logger,
  createSagaMiddleware,
  routerMiddleware(history),
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancers);

export default store;