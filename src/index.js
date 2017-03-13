import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import Index from './components/index'
import configureStore from './stores/index';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
  document.getElementById('root')
);
