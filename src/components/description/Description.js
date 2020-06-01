import React, { Component } from 'react';
import './Description.css';
import { Card, Image } from 'semantic-ui-react';

class Description extends Component {

  render() {
    return (
      <div className='cover-container'> 
        <img scr='/src/assets/images/description.jpg' alt='me'></img>

        <p className='description-container' id='section1'>
          I am a self-taught web developer, with a background in business analysis.
          In this industry my mission is to help others by creating products that solve their real needs.
              </p>
        <p className='description-container'>
          I will do this by being kind, servant and patient to listen and discover their problems.
          By being clear, concise, though and stubborn I will make sure that I reach the goal of my projects.
              </p>
        <p className='description-container'>
          I value kindness, honesty, and integrity because in my opinion are the most important values that need to exist in every relationship, no matter what.
          Therefore, I will be honest and transparent even if things go wrong, so I can be a trusted partner in all aspects of my life.
        </p>
      </div>
    )
  }
}

export default Description;
