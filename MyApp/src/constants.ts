import {Dimensions} from 'react-native';

let Constants: {
  MAX_WIDTH: number;
  MAX_HEIGTH: number;
  GRID_SIZE: number;
  CELL_SIZE: number;
} = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGTH: Dimensions.get('screen').height,
  GRID_SIZE: 15,
  CELL_SIZE: 20,
};

export default Constants;
