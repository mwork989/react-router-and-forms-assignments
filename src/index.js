import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import { Provider } from 'react-redux';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
       <App />
    </Provider>,
  document.getElementById('root')
);


