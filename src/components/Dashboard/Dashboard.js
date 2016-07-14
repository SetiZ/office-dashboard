import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { store } from '../App/App';
import { startListeningToInstances } from '../../actions/instances';
import { startIntervalFetchTraffic } from '../../actions/traffic';
// import InstancesListContainer from '../../containers/InstancesListContainer';
import TrafficListContainer from '../../containers/TrafficListContainer';
import s from './Dashboard.css';

class Dashboard extends Component {

  componentWillMount() {
    store.dispatch(startListeningToInstances());
    store.dispatch(startIntervalFetchTraffic());
  }

  componentWillUnmount() {
    // TODO: Stop listening to instances.
    // TODO: Clear the traffic interval.
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.section}>
          <TrafficListContainer />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
