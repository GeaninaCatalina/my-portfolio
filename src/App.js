import React, { Component } from 'react';
import './App.css';
import Description from './components/description/Description';
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div>
        <div className='menu-container'>
          <Button>Home</Button>
          <Button>Projects</Button>
        </div>
          <Description></Description>
        <footer className='footer-container'>
          <h1>Find me on social media</h1>
        </footer>
      </div>
    )
  }
}

export default App;
