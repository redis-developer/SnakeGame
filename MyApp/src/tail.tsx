import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from './constants';

class Tail extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    let tailList = this.props.elements.map((el, idx) => {
      return (
        <View
          key={idx}
          style={{
            width: this.props.size,
            height: this.props.size,
            position: 'absolute',
            left: el[0] * this.props.size,
            top: el[1] * this.props.size,
            backgroundColor: 'blue',
            borderRadius: 10,
          }}
        />
      );
    });

    return (
      <View
        style={{
          width: Constants.GRID_SIZE * this.props.size,
          height: Constants.GRID_SIZE * this.props.size,
          borderRadius: 8,
        }}>
        {tailList}
      </View>
    );
  }
}

export default Tail;
