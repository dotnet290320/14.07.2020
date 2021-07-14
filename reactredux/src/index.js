import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// the provider will wrap our App component
// will provide our applciation with the store
import rootReducer from './reducers/rootReducer';

const postStore = createStore(rootReducer)
// how do we associate how store with react? second package
ReactDOM.render(<Provider store={postStore}><App /></Provider>,
  document.getElementById('root'));
