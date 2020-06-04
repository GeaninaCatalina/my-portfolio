import React, { Component } from 'react';
import { Image, Grid, ButtonGroup, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Description.css';


class Description extends Component {

  render() {
    return (
      <div className='cover-container'>
        <Grid columns={3} relaxed='very' centered verticalAlign='middle' divided>
          <Grid.Column width={5} textAlign='center' className='card-container' id='grid-cell'>
            <h3>Skils</h3>
          </Grid.Column>
          <Grid.Column width={5} className='card-container' id='grid-cell'>
            <Image src='/assets/images/description.jpg' alt='my-self' avatar size='medium' />
            <ButtonGroup>
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='linkedin' icon='linkedin' />
              <Button circular color='github' icon='github' />
            </ButtonGroup>
          </Grid.Column>
          <Grid.Column width={6} textAlign='justified'>
            <div className='description-container' id='description'>
              <p className='description-container' id='1'>
                I am a self-taught web developer, with a background in business analysis.
                </p>
              <p className='description-container' id='2'>
                In this industry my mission is to help others by creating products that solve their real needs.
                I will do this by being kind, servant and patient to listen and discover their problems.
                By being clear, concise, though and stubborn I will make sure that I reach the goal of my projects.
                </p>
              <p className='description-container' id='3'>
                I value kindness, honesty, and integrity because in my opinion are the most important values that need to exist in every relationship, no matter what.
                Therefore, I will be honest and transparent even if things go wrong, so I can be a trusted partner in all aspects of my life.
                </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Description;
