import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
  Button,
  Modal,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import axios from 'axios';
import Head from './head.tsx';
import Food from './food.tsx';
import Constants from './constants.ts';
import GameLoop from './gameloops.ts';
import Tail from './tail.tsx';
const image = {uri: 'https://reactjs.org/logo-og.png'};
const closure = () => {
  let counter: number;
  counter = 0;
  return (bool: Boolean): number | void => {
    if (bool) {
      return counter;
    }
    counter++;
  };
};

const closureFunction: Function = closure();
export {closureFunction};

interface Props {
  children: any;
}
interface State {
  running: Boolean;
}

export default class Game extends Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
    this.state = {
      running: true,
      modal: false,
    };
  }

  onLogout = () => {
    this.props.loggedIn();
  };

  onEvent = async (e) => {
    if (e.type === 'game-over') {
      this.setState({running: false, modal: true});
      console.log(closureFunction(true));
      const count: number = closureFunction(true);
      if (count > this.props.count) {
        const data = {username: this.props.username, count: count};
        console.log(data);
        try {
          const response = await axios.put(
            'http://35.200.186.104/v1/update',
            data,
          );
          if (response.status === 200) {
            this.props.updateCount(count);
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  reset = () => {
    this.engine.swap({
      head: {
        position: [0, 0],
        xspeed: 0.1,
        yspeed: 0,
        nextMove: 10,
        updateFrequency: 1,
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
    });
    this.setState({
      running: true,
    });
  };

  randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  render() {
    return (
      <>
        {this.Modal()}

        <View style={styles.container}>
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
                xspeed: 0.1,
                yspeed: 0,
                nextMove: 10,
                updateFrequency: 1,
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
          <TouchableOpacity
            title="New Game"
            style={styles.newGame}
            onPress={this.reset}>
            <Text style={{color: 'black'}}> New Game</Text>
          </TouchableOpacity>

          <Text style={styles.maxscore}>Max Score : {this.props.count}</Text>
          {this.Controls()}
          <View style={styles.buttonExit}>
            <Button color="#d42323" title="Exit Game" onPress={this.onLogout} />
          </View>
        </View>
      </>
    );
  }

  Modal = () => (
    <Modal animationType="slide" transparent={true} visible={this.state.modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Game Over</Text>

          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
              this.reset();
              this.setState({modal: false, running: true});
            }}>
            <Text style={styles.textStyle}>Try Again</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );

  Controls = () => (
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
  );
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
    paddingTop: 40,
  },
  controlRow: {
    left: 20,
    top: 20,
    height: 80,
    width: 260,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  control: {
    width: 80,
    height: 80,
    backgroundColor: '#45b3e0',
    borderRadius: 20,
  },
  newGame: {
    backgroundColor: '#FF9999',
    top: 30,
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    margin: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  maxscore: {
    margin: 20,
    color: 'white',
  },
  buttonExit: {
    position: 'absolute',
    top: Dimensions.get('window').height / 10,
  },
});
