import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import Game from './src/GameEngine.tsx';
import Login from './src/login.tsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <Game />
        ) : (
          <Login
            update={() => this.setState({loggedIn: !this.state.loggedIn})}
          />
        )}
      </>
    );
  }
}

export default App;
