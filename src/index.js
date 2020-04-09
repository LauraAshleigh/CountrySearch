import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import CountryProvider from './context/country-context'
import ErrorProvider from './context/error-context'
import LoadingProvider from './context/loading-context'
import './index.css'

ReactDOM.render(
    <CountryProvider>
        <ErrorProvider>
            <LoadingProvider>
                <App />
            </LoadingProvider>
        </ErrorProvider>
    </CountryProvider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
