import React, { Component } from 'react';
import './App.css';
import Description from './components/description/Description';
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {

    render() {
        return ( <
            div className = 'body-container' >
            <
            div className = 'menu-container' >
            <
            div > Geanina Catalina Masgras | Web Developer < /div> <
            div className = 'button' >
            <
            Button className = 'menu-button'
            color = 'teal' > Home < /Button> <
            Button className = 'menu-button'
            color = 'teal' > Projects < /Button> < /
            div > <
            /div> <
            Description > < /Description> <
            footer className = 'footer-container' >
            <
            h2 > Find me on social media < /h2> < /
            footer > <
            /div>
        )
    }
}

export default App;