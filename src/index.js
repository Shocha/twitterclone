import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './reducers'
import middleware from './middleware'

const store=createStore(allReducer,middleware)
    
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))