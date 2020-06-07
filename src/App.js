import React, { Component } from 'react';
import './App.css';
import Description from './components/description/Description';
import HelloPage from './components/helloPage/HelloPage.js';
import Menu from './components/menu/Menu.js';
import { Image } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Projects from './components/projects/Projects';

class App extends Component {


  render() {
    return (
      <Router>
        <div className='container-router'>
          <div className='menu-container'>
            <div className='headerText'>
              <Image
                className='box'
                src='assets/images/description.jpg'
                avatar
                size='mini' />
            </div>
            <Menu />
          </div>
          <Switch>
            <Route exact path='/home' component={HelloPage} />
            <Route exact path='/about' component={Description} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/'>
                <Redirect to='/home'></Redirect>
            </Route>
          </Switch>
          </div>
        </Router>
    )
  }
}

export default App;