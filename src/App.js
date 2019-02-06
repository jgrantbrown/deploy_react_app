import React, { Component } from 'react';
import MainContent from './containers/MainContent/MainContent'
import NavBar from './components/NavBar/NavBar'
import Projects from './containers/Projects/Projects'
import About from './containers/About/About'
import './App.css';

// REact Router
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />

          <Switch>
            <Route exact path='/' component={MainContent}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/about' component={About}/>
          </Switch>
      </div>
    );
  }
}

export default App;
