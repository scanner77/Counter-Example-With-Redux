import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';{/* This syntax is for redux toolkit */}
// import store from './Reduxx/store';{/* This syntax is for redux toolkit */}
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './Reducer/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}  {/* This syntax is for redux toolkit */}
    <Provider store = {store}>
      <App />
    {/* </Provider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

