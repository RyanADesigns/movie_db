import React, { Component } from 'react';
import logo from './logo.svg';
import styles from'./App.css';
import axios from 'axios';
import {AddButton} from './components/AddButton.js'
import ChildApp from './components/ChildApp'


class App extends Component {

  
render(){
    return(
      <ChildApp/>
    )
  }
}

export default App;
