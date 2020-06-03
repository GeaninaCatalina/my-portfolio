import React, { Component } from 'react';
import {ButtonGroup, Button} from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom';

class Menu extends Component {
  onHomeClick(){
    this.props.history.push('/home');
  }

  onAboutClick = () => {
    this.props.history.push('/about');
  }

  onProjectsClick = () => {
    this.props.history.push('/projects');
  }

  onContactClick = () => {
    this.props.history.push('/contact');
  }

  render() {
    return (
      <div className='link-container'>
        <ButtonGroup>
          <Button className='menu-link' size='big' basic onClick={() => this.onHomeClick()} >Home </Button>
          <Button className='menu-link' size='big' basic onClick={() => this.onAboutClick()}>About </Button>
          <Button className='menu-link' size='big' basic onClick={() => this.onProjectsClick()}>Projects </Button>
          <Button className='menu-link' size='big' basic onClick={() => this.onContactClick()}>Contact </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default withRouter(Menu);
