import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import './App.css';
import Home from './containers/Home.jsx'
import Curriculum from './containers/Curriculum.jsx'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to="/CVWeb" />
      </Route>
      <Route exact path='/CVWeb' component={Home}/>
      <Route path='/CVWeb/curriculum' component={Curriculum}/>
    </React.Fragment>
  );
}

export default App;
