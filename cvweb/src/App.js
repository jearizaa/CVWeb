import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import Home from './containers/Home.jsx'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home}/>
    </React.Fragment>
  );
}

export default App;
