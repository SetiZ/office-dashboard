import { List, fromJS } from 'immutable';

import { SET_TRAFFIC } from '../constants';
import { API_URL, REFRESH_INTERVAL } from '../constants/TrafficConfig';

export const setTraffic = (traffic = List.of()) => (
  { type: SET_TRAFFIC, payload: traffic }
);

const fetchAndSetTrafficItems = (dispatch) => {
  fetch(API_URL)
    // Get the raw json
    .then(response => response.json())
    // Extract only the data we need.
    .then(json => [
      { ...json.response.metros[0], type: 'metro' }, // M1
      { ...json.response.metros[6], type: 'metro' }, // M6
      { ...json.response.rers[0], type: 'rer' }, // RER A
      { ...json.response.tramways[1], type: 'tramway' }, // T2
    ])
    // Prepare the action
    .then(payload => setTraffic(fromJS(payload)))
    // Dispatch the action
    .then(action => dispatch(action));
};

export const startIntervalFetchTraffic = () => (
  dispatch => {
    fetchAndSetTrafficItems(dispatch);
    setInterval(
      fetchAndSetTrafficItems.bind(null, dispatch),
      REFRESH_INTERVAL
    );
  }
);
