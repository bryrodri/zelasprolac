import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';

//fuente
import './fonts/aristotelica/Aristotelica-Regular.ttf'
import './fonts/coolvetica/coolvetica.ttf'

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import initialState from './initialState'

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

