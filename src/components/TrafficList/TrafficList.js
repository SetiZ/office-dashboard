import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { List } from 'immutable';

import { TrafficPropType } from './PropTypes';
import TrafficListItemContainer from '../../containers/TrafficListItemContainer';
import s from './TrafficList.css';

const trafficNodes = (traffic) => (
  traffic.map((trafficItem) => (
    <TrafficListItemContainer
      key={trafficItem.get('line')}
      trafficItem={trafficItem}
      className={s.item}
    />
  ))
);

const TrafficList = ({ traffic = List.of() }) => (
  <div className={s.root}>
    <h3 className={s.title}>{'Traffic'}</h3>
    {trafficNodes(traffic)}
  </div>
);

TrafficList.propTypes = {
  traffic: TrafficPropType,
};

export default withStyles(s)(TrafficList);
