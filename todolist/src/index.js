import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Containers/Layout/Layout';
import {Provider} from 'react-redux';
import storeCreator from './Redux/Store/store';


const store = storeCreator();

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('root')
);
