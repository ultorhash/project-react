import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MainContainer } from './pages/main_container/MainContainer';
import { Provider } from 'react-redux';
import Store from './tools/Store';
import './style.css';

ReactDOM.render(
    <Provider store={Store}>
      <MainContainer />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
