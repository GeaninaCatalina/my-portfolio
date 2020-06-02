import React, { Component } from 'react';
import './App.css';
import Description from './components/description/Description';
import HelloPage from './components/helloPage/HelloPage.js'
import { Image, Button, ButtonGroup } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className='container-router'>
        <div className='menu-container'>
          <div className='headerText'>
            <Image src='assets/images/description.jpg' avatar size='mini'/>
          </div>
          <div className='link-container'>
            <ButtonGroup>
            <Button className='menu-link' size='big'>Home </Button>
            <Button className='menu-link' size='big'>About </Button>
            <Button className='menu-link' size='big'>Projects </Button>
            <Button className='menu-link' size='big'>Contact </Button>
            </ButtonGroup>
          </div>
        </div>
        <Router>
          <Switch>
            <Route exact path='/home' component={HelloPage}/>
            <Route exact path='/about' component={Description}/>
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;