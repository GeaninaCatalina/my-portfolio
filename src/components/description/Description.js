import React, { Component } from 'react';
import { Image, Grid, Label } from 'semantic-ui-react';
import './Description.css';

const icons = ['js', 'react', 'css', 'html', 'sql', 'nodejs', 'github', 'semantic'];
const lables = ['Team Player', 'Agile Methodologies', 'Time Management', 'Assertiveness', 'Critical thinking', 'Conflict management', 'Friendliness']

class Description extends Component {

  render() {
    return (
      <div className='cover-container' id='background'>
        <Grid stackable columns={3} relaxed='very' className='cover-grid' centered>
          <Grid.Column width={5} textAlign='center' className='card-container' id='grid-cell'>
            <Grid stackable columns={2} relaxed verticalAlign='top'>
              <Grid.Row>
                <Grid.Column centered textAlign='center'>
                  <h4>Hard Skils</h4>
                  {icons.map(iconName => { return <Image src={'/assets/icons/' + iconName + '.png'} avatar size='mini' className='skils-icons' /> })}
                </Grid.Column>
                <Grid.Column stackable textAlign='left'>
                  <h4>Soft Skils</h4>
                  {lables.map(lable => { return <Label className='skils-lables'>{lable}</Label> })}
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
                I started my career as a BI developer, to finally grow as a Business Analyst/PO.
                After five years in this field, last year I decided that I want to know how the software products are actually build.
                I started to learn web development and ended up loving it.
              </p>
              <p className='description-container' id='3'>
                I invested in a few online courses and build web applications using technologies  as Javascript, NodeJs, React, CSS and HTML.
                I was lucky enough to have a mentor during my journey who introduced me to Git, Github and who review my code and he has given me meaningful insights about a developer life.
              </p>
              <p className='description-container' id='3'>
                Since I realised that this is what I want to do from now on, I coded  and learn nearly every day, no matter what because coding is now my biggest hobby and passion.
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Description;
