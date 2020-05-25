import React from 'react';
import {View} from 'react-native';

export default class Tail extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          width: this.props.size,
          height: this.props.size,
          backgroundColor: 'green',
          position: 'absolute',
          left: x * this.props.size,
          top: y * this.props.size,
          borderRadius: 10,
        }}
      />
    );
  }
}
