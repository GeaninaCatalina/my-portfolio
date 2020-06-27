import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import './Contact.css';


class Description extends Component {

  render() {
    return (

      <div>
        <Grid stackable id='contact-grid-container' >
          <GridRow columns={3}>
            <GridColumn width={4}></GridColumn>
            <GridColumn width={8} className='contact-container' id='grid-contact'>
              <Grid stackable columns={3} relaxed='very'  centered>
                <GridRow columns={1}>
                  <GridColumn centered textAlign='center'>
                    <h2 className='title'>Get in touch</h2>
                    <h3>If you would like to have a discussion with me, don't hesitate to contact me.</h3>
                  </GridColumn>
                </GridRow>
                <GridRow columns={2} textAlign='center'>
                  <GridColumn textAlign='center'>
                    <Image src={'/assets/icons/location.png'} size='mini' verticalAlign='middle' />{' '}
                    <span>Leuven, Belgium</span>
                    <h3> </h3>
                  </GridColumn>
                  <GridColumn textAlign='left'>
                    <Image src={'/assets/icons/email.png'} size='mini' verticalAlign='middle' />
                    <span>masgras.geanina@hotmail.com</span>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
            <GridColumn width={4}></GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}

export default Description;
