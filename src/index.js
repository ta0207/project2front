import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index'
import { I18nextProvider} from 'react-i18next'
import i18n from './utils/i18n'

let store = createStore(allReducers)

ReactDOM.render(
<I18nextProvider i18n={i18n}>
  <Provider store = {store}>
    <App />
  </Provider></I18nextProvider>,
  document.getElementById('root')
);
