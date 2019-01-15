import React from 'react';
import ReactDOM from 'react-dom';
import './src/asset/style.css'
import App from './src/view/App'
import rootReducer from './src/store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

  ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('app'));

