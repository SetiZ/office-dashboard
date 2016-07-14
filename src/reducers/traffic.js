/* eslint-disable no-use-before-define */

import { List } from 'immutable';
import { SET_TRAFFIC } from '../constants';

const INITIAL_STATE = List.of();

const trafficReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_TRAFFIC:
      return setTraffic(state, action.payload);
    default:
      return state;
  }
};

const setTraffic = (state, traffic = List.of()) => {
  return state.clear().concat(traffic);
};

export default trafficReducer;
