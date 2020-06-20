import React, { Component } from 'react';
import { Grid, Image, GridRow, GridColumn, Button } from 'semantic-ui-react';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div className='container-projects'>
        <div className='container-gridProjects'>
          <Grid stackable columns={2} relaxed='very' className='container-gridProjects' id='grid-project'>
            <GridRow columns={2}>
              <GridColumn textAlign='center'>
                <h2 className='title'>Projects</h2>
              </GridColumn>
              <GridColumn width={3}></GridColumn>
            </GridRow>
            {/* List */}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/list.png'
                  alt='list'
                  size='large'
                  className='container-image' id='playground'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Notes and Lists </h3>
                <p>
                  Notes and lists is an application build with React, NodeJS and MongoDB.
                  I have created this application to learn how to work with MongoDB and Node Express.
                </p>
                <Grid stackable>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <h4>Functionalities:</h4>
                      <ul>
                        <li>Signup</li>
                        <li>Login</li>
                        <li>Add new list</li>
                        <li>Copy lists</li>
                        <li>Edit lists</li>
                        <li>Delete lists </li>
                      </ul>
                    </Grid.Column>
                    <Grid.Column>
                      <h4>Technologies used:</h4>
                      <ul>
                        <li>React</li>
                        <li>Axios</li>
                        <li>i18next</li>
                        <li>CSS</li>
                        <li>Semantic-Ui </li>
                        <li>NodeJs</li>
                        <li>Router</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row >
                  <GridRow columns={1}>
                    <GridColumn verticalAlign='top'>
                      <Button>Go to code</Button>
                      <Button>Demo</Button>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Grid.Column>
            </GridRow>
            {/* Messenger */}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/messenger.png'
                  alt='messenger'
                  size='large'
                  className='container-image' id='playground'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Messenger App </h3>
                <p>
                  Messenger app is created to allow communication between two persons.
                  The purpose of this app was to get familiar with backend servers.
                </p>
                <Grid columns={2} stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <h4>Functionalities:</h4>
                      <ul>
                        <li>Signup</li>
                        <li>Login</li>
                        <li>Send messages </li>
                        <li>Delete messages </li>
                      </ul>
                    </Grid.Column>
                    <Grid.Column>
                      <h4>Technologies used:</h4>
                      <ul>
                        <li>React</li>
                        <li>Axios</li>
                        <li>i18next</li>
                        <li>Router</li>
                        <li>CSS</li>
                        <li>Semantic-Ui </li>
                        <li>NodeJs</li>
                        <li>Mongoose </li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </GridRow>
            {/* Calculator */}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/calculator.png'
                  alt='calculator'
                  size='large'
                  className='container-image'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Calculator </h3>
                <p>
                  I have created is a one page app to do basic mathematical operations.
                </p>
                <Grid columns={1} stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <h4>Technologies used:</h4>
                      <ul>
                        <li>React </li>
                        <li>Semantic-Ui</li>
                        <li>CSS</li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </GridRow>
            {/* Countdown */}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/countdown.png'
                  alt='countdown'
                  size='large'
                  className='container-image'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Countdown </h3>
                <p>
                  I have created a one page app that simulates a countdown.
                  The purpose of this was to get familiar with React.
                </p>
                <Grid columns={1} stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <h4>Technologies used:</h4>
                      <ul>
                        <li>React </li>
                        <li>Semantic-Ui</li>
                        <li>CSS</li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </GridRow>

            {/* Playground */}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/playground.png'
                  alt='playground'
                  size='large'
                  className='container-image'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Playground</h3>
                <p>
                  Playground is a React application where I exercised and learned basic algorithms with JavaScript.
                  The most complex exercises were TicTacToe, Gomoku and Spare Matrix.
                </p>
                <Grid columns={1} stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <h4>Technologies used:</h4>
                      <ul>
                        <li>React </li>
                        <li>JavaScript</li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </GridRow>
            {/* Magic of cooking*/}
            <GridRow>
              <Grid.Column width={7} verticalAlign='top'>
                <Image
                  src='/assets/projects/cooking.png'
                  alt='cooking'
                  size='large'
                  className='container-image'
                />
              </Grid.Column>
              <Grid.Column width={9} textAlign='left' verticalAlign='top'>
                <h3>Playground</h3>
                <p>
                  Playground is a React application where I exercised and learned basic algorithms with JavaScript.
                  The most complex exercises were TicTacToe, Gomoku and Spare Matrix.
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