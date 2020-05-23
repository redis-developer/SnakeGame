/**
 * @format
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Head from './src/head.tsx';
import Food from './src/food.tsx';
import Constants from './src/constants.ts';
import GameLoop from './src/gameloops.ts';
import Tail from './src/tail.tsx';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
    this.state = {
      running: true,
    };
  }

  onEvent = (e) => {
    if (e.type === 'game-over') {
      Alert.alert('Game-over');
      this.setState({running: false});
    }
  };

  reset = () => {
    this.engine.swap({
      head: {
        position: [0, 0],
        xspeed: 1,
        yspeed: 0,
        nextMove: 10,
        updateFrequency: 10,
        size: 20,
        renderer: <Head />,
      },
      food: {
        position: [
          this.randomBetween(0, Constants.GRID_SIZE - 1),
          this.randomBetween(0, Constants.GRID_SIZE - 1),
        ],
        size: 20,
        renderer: <Food />,
      },
      tail: {size: 20, elements: [], renderer: <Tail />},
    });
    this.setState({
      running: true,
    });
  };

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>fn23nf983wpnf89p3298mf</Text>
        <GameEngine
          ref={(ref) => {
            this.engine = ref;
          }}
          style={{
            width: this.boardSize,
            height: this.boardSize,
            backgroundColor: '#ffffff',
            flex: null,
          }}
          entities={{
            head: {
              position: [0, 0],
              xspeed: 1,
              yspeed: 0,
              nextMove: 10,
              updateFrequency: 10,
              size: 20,
              renderer: <Head />,
            },
            food: {
              position: [
                this.randomBetween(0, Constants.GRID_SIZE - 1),
                this.randomBetween(0, Constants.GRID_SIZE - 1),
              ],
              size: Constants.CELL_SIZE,
              renderer: <Food />,
            },
            tail: {size: 20, elements: [], renderer: <Tail />},
          }}
          systems={[GameLoop]}
          onEvent={this.onEvent}
          running={this.state.running}
        />

        <Button title="New Game" onPress={this.reset} />
        <View style={styles.controls}>
          <View style={styles.controlRow}>
            <TouchableOpacity
              onPress={() => {
                this.engine.dispatch({type: 'move-up'});
              }}>
              <View style={styles.control}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.controlRow}>
            <TouchableOpacity
              onPress={() => {
                this.engine.dispatch({type: 'move-left'});
              }}>
              <View style={styles.control}></View>
            </TouchableOpacity>
            <View style={[styles.control, {backgroundColor: null}]}></View>
            <TouchableOpacity
              onPress={() => {
                this.engine.dispatch({type: 'move-right'});
              }}>
              <View style={styles.control}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.controlRow}>
            <TouchableOpacity
              onPress={() => {
                this.engine.dispatch({type: 'move-down'});
              }}>
              <View style={styles.control}></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column',
  },
  controlRow: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
AppRegistry.registerComponent(appName, () => Game);
