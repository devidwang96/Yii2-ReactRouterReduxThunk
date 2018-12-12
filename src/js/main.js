import App from "./components/App";
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

ReactDOM.render(<App/>, document.getElementById('react-entry'));