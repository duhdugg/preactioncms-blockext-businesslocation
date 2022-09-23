import React from 'react'
import ReactDOM from 'react-dom/client'
import MockCMS from './MockCMS.jsx'
import * as serviceWorker from './serviceWorker.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MockCMS />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
