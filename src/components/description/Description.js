import React, { Component } from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';
import './Description.css';


class Description extends Component {

  render() {
    return (
      <div className='cover-container'>
          <Grid columns={2} relaxed='very' centered verticalAlign='middle'>
            <Grid.Column textAlign='center' className='card-container' id='grid-cell'>
                <Card className='card-container' id='card'>
                  <Image src='/assets/images/description.jpg' />
                  <Card.Content>
                    <Card.Header>Geanina Catalina Vusca</Card.Header>
                    <Card.Description>Web Developer</Card.Description>
                  </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column textAlign='justified'>
              <div className='description-container' id='description'>
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
            </Grid.Column>
          </Grid>
      </div>
    )
  }
}

export default Description;
