import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
