import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Containers/Layout/Layout';
import {Provider} from 'react-redux';
import storeCreator from './Redux/Store/store';
import {createBrowserHistory} from 'history';
import { BrowserRouter} from 'react-router-dom';


const store = storeCreator();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={createBrowserHistory()}>
      <Layout/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
