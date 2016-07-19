/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import chai from 'chai';
import { fromJS } from 'immutable';

import trafficReducer from './traffic';
import { SET_TRAFFIC } from '../constants';

describe('trafficReducer', () => {

  describe('DEFAULT', () => {

    it('returns the default state', () => {
      const result = trafficReducer(undefined, undefined);

      chai.expect(result).to.equal(fromJS([]));
    });

  });

  describe('SET_TRAFFIC', () => {

    it('doesn’t set the traffic items', () => {
      const payload = fromJS([]);
      const action = { type: SET_TRAFFIC };
      const result = trafficReducer(undefined, action);

      chai.expect(result).to.equal(payload);
    });

    it('sets the traffic items', () => {
      const payload = fromJS([{ id: 1 }, { id: 2 }]);
      const action = { type: SET_TRAFFIC, payload };
      const result = trafficReducer(undefined, action);

      chai.expect(result).to.equal(payload);
    });

  });

});
