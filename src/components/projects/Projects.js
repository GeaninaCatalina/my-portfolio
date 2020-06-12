import React, { Component } from 'react';
import { Grid, Image, GridRow } from 'semantic-ui-react';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div className='container-projects'>
        <div className='container-gridProjects'>
          <Grid stackable columns={2} relaxed='very' className='container-gridProjects'>
            <GridRow>
              <Grid.Column width={7} >
                <Image 
                  src='/assets/projects/playground.png' 
                  alt='playground' 
                  size='large'
                  className='container-image' id='playground'
                  />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left'>
                <p>
                  Play Ground is a React application where I exercised  and learned basics algorithms with JavaScript.
                  Based on the input, each button will return the result of an algorithm.
                  </p>
                <p>
                  The most complex exercises are TicTacToe, Gomoku and Spare Matrix.
                </p>
              </Grid.Column>
            </GridRow>
            <GridRow>
              <Grid.Column width={7} >
                <Image
                  src='/assets/projects/messenger.png'
                  alt='messenger'
                  size='large'
                  className='container-image' id='messenger'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left'>
                <p>
                  React application where I exercised  and learned basics algorithms with JavaScript.
                  Based on the input, each button will return the result of an algorithm.
                  </p><p>
                  The most complex exercises are TicTacToe, Goimoku and Spare Matrix.
                </p><p>
                  Used tehnoligies: 
                  <ul>
                    <li>React</li>
                    <li>Semmantic-Ui</li>
                    <li>Nodejs Express</li>
                    <li>in18</li>
                    <li>Axios</li>
                    <li>Soket.io</li>
                  </ul>
                </p>
              </Grid.Column>
            </GridRow>
            <GridRow>
              <Grid.Column width={7} >
                <Image
                  src='/assets/projects/calculator.png' 
                  alt='calculator' 
                  size='large' 
                  className='container-image' id='calculator'
                  />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left'>
                <p>
                  React application where I exercised  and learned basics algorithms with JavaScript.
                  Based on the input, each button will return the result of an algorithm.
                  </p>
                <p>
                  The most complex exercises are TicTacToe, Goimoku and Spare Matrix.
                </p>
              </Grid.Column>
            </GridRow>
            <GridRow>
              <Grid.Column width={7} >
                <Image 
                  src='/assets/projects/countdown.png'
                  alt='countdown' 
                  size='large'
                  className='container-image' id='countdown' 
                  />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left'>
                <p>
                  React application where I exercised  and learned basics algorithms with JavaScript.
                  Based on the input, each button will return the result of an algorithm.
                  </p>
                <p>
                  The most complex exercises are TicTacToe, Goimoku and Spare Matrix.
                </p>
              </Grid.Column>
            </GridRow>
          </Grid>
        </div>
      </div >
    )
  }
}

export default Projects; 