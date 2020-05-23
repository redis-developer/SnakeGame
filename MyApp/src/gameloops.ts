import Constants from './constants';

const GameLoop = (
  entities: any,
  {touches, dispatch, events}: {any; any; any},
): any => {
  let head = entities.head;

  if (events.length) {
    for (let i: number = 0; i < events.length; i++) {
      if (events[i].type === 'move-up' && head.yspeed !== -1) {
        head.yspeed = -1;
        head.xspeed = 0;
      }
      if (events[i].type === 'move-down' && head.yspeed !== -1) {
        head.yspeed = 1;
        head.xspeed = 0;
      }
      if (events[i].type === 'move-left' && head.yspeed !== -1) {
        head.xspeed = -1;
        head.yspeed = 0;
      }
      if (events[i].type === 'move-rigth' && head.yspeed !== -1) {
        head.xspeed = 1;
        head.yspeed = 0;
      }
    }
  }
  head.nextMove -= 1;

  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;

    if (
      head.position[0] + head.xspeed < 0 ||
      head.position[0] + head.xspeed >= Constants.GRID_SIZE ||
      head.position[1] + head.yspeed < 0 ||
      head.position[1] + head.yspeed >= Constants.GRID_SIZE
    ) {
      dispatch({
        type: 'game-over',
      });
    } else {
      head.position[0] += head.xspeed;
      head.position[1] += head.yspeed;
    }
  }

  return entities;
};

export default GameLoop;
