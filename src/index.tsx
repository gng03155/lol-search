import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global-styles';
import './index.css';
import App from './layouts/App';

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);