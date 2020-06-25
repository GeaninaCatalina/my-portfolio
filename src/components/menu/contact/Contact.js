import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import './Contact.css';


class Description extends Component {

  render() {
    return (

      <div className='cover-container'>
        <Grid stackable columns={3} relaxed='very' className='contact-container' id='grid-contact' centered>
          <GridRow columns={1}>
            <GridColumn centered>
            <h2 className='title'>Get in touch</h2>
            </GridColumn>
          </GridRow>
          <GridRow columns={3} textAlign='center'>
            <GridColumn width={8} centered> 
            <h3> Location</h3>
            <Image src={'/assets/icons/location.png'} size='mini' className='skils-icons' /> 
            </GridColumn>
            <GridColumn width={8} textAlign='center'>
            <h3>Email</h3>
            <Image src={'/assets/icons/email.png'} size='mini' className='skils-icons' /> 
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}

export default Description;
