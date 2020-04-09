import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingWheel from './components/LoadingWheel/LoadingWheel'
import Main from './components/Main/Main'
import Results from './components/Results/Results'
import './App.css'
import './MediaQueries.css'

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <LoadingWheel />
          <Main />
          <Results />
        </div>
      </BrowserRouter>
    )
}

export default App
