import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import './Contact.css';


class Description extends Component {

  render() {
    return (

      <div className='cover-container'>
        <Grid stackable>
          <GridRow columns={3}>
            <GridColumn width={3}></GridColumn>
            <GridColumn width={10}>
              <Grid stackable columns={3} relaxed='very' className='contact-container' id='grid-contact' centered>
                <GridRow columns={1}>
                  <GridColumn centered>
                    <h2 className='title'>Get in touch</h2>
                  </GridColumn>
                </GridRow>
                <GridRow columns={2} textAlign='center'>
                  <GridColumn textAlign='center'>
                    <Image src={'/assets/icons/location.png'} size='mini' verticalAlign='middle' />{' '}
                    <span> Leuven, Belgium</span>
                  </GridColumn>
                  <GridColumn textAlign='left'>
                    <Image src={'/assets/icons/email.png'} size='mini' verticalAlign='middle' />
                    <span>{' '} masgras.geanina@hotmail.com</span>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
            <GridColumn width={3}></GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}

export default Description;
