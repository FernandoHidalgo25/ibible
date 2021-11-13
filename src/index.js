import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/reducer'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
  ));
//console.log("Hello")
//fetch("http://localhost:3000/books").then(res=> res.json()).then(console.log)
ReactDOM.render(
  <React.StrictMode>
    <Router><Provider store={store}><App /></Provider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
