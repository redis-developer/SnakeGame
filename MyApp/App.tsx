import React, {Component} from 'react';
import Game from './src/GameEngine.tsx';
import Login from './src/login.tsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      count: 0,
      username: '',
    };
  }
  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <Game
            count={this.state.count}
            username={this.state.username}
            updateCount={(count: number) => this.setState({count})}
          />
        ) : (
          <Login
            update={(count: number, username: string) =>
              this.setState({loggedIn: !this.state.loggedIn, count, username})
            }
          />
        )}
      </>
    );
  }
}

export default App;
