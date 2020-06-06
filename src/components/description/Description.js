import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import './Description.css';

class Description extends Component {

  render() {
    return (
      <div className='cover-container' id='background'>
        <Grid stackable columns={3} relaxed='very' className='cover-grid' centered>
          <Grid.Column width={5} textAlign='center' className='card-container' id='grid-cell'>
            <h3>Skils</h3>
            <Grid stackable columns={2} relaxed >
              <Grid.Row>
              <Grid.Column centered textAlign='center'>
                <h4>Hard</h4>
                <Image src='/assets/icons/js.png' avatar size='mini' />
                <Image src='/assets/icons/react.png' avatar size='mini' />
              </Grid.Column>
              <Grid.Column stackable textAlign='center' >
                <h4>Soft</h4>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column centered textAlign='center'>
                <Image src='/assets/icons/css.png' avatar size='mini' />
                <Image src='/assets/icons/html.png' avatar size='mini' />
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5} className='card-container' id='grid-cell'>
            <Grid stackable columns={1} relaxed centered>
              <Grid.Row>
                <Image src='/assets/images/description.jpg' alt='my-self' avatar size='medium' />
              </Grid.Row>
              <Grid.Row className='container-icon'>
                <Image
                  src='/assets/icons/github.png'
                  id='icon'
                  size='mini'
                  href='https://github.com/GeaninaCatalina'
                  target="_blank"
                />
                <Image src='/assets/icons/lin.png'
                  id='icon'
                  size='mini'
                  href='https://www.linkedin.com/in/geanina-c%C4%83t%C4%83lina-masgras/'
                  target="_blank"
                />
                <Image
                  src='/assets/icons/twit.png'
                  id='icon'
                  size='mini'
                  href='https://twitter.com/GeaninaMasgras'
                  target="_blank"
                />
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={6} textAlign='justified'>
            <div className='description-container' id='description'>
              <p className='description-container' id='1'>
                I am a self-taught web developer, with a background in functional analysis and BI.
                </p>
              <p className='description-container' id='2'>
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
