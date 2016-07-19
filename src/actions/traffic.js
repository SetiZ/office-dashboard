import { List, fromJS } from 'immutable';

import { SET_TRAFFIC } from '../constants';
// import { trafficToList } from '../core/transform';

export const setTraffic = (traffic = List.of()) => (
  { type: SET_TRAFFIC, payload: traffic }
);

export const startIntervalFetchTraffic = () => (
  dispatch => {
    // TODO: get the data from something like http://api-ratp.pierre-grimaud.fr/v2/traffic
    setInterval(() => {
      const traffic = fromJS([
        {
          line: `${Math.random() > 0.5 ? 'M1' : 'T2'}`,
          message: `Trafic normal sur l'ensemble de la ligne.`,
          title: 'Trafic normal',
        },
      ]);
      dispatch(setTraffic(traffic));
    }, 2000);
  }
);
