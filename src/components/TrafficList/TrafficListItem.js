import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { TrafficItemPropType } from './PropTypes';
import RoundedFrame from '../RoundedFrame/RoundedFrame';
import s from './TrafficListItem.css';

const propTypes = {
  trafficItem: TrafficItemPropType.isRequired,
  className: PropTypes.string,
};

const statusMap = {
  normal: 'ok',
  normal_trav: 'ok',
  alerte: 'warning',
  critique: 'error',
};
const typeMap = {
  metro: 'M',
  rer: '',
  tramway: 'T',
};

const TrafficListItem = ({ trafficItem, className }) => {
  const rootClass = classNames(className, s.root);
  const status = statusMap[trafficItem.get('slug')] || null;
  const text = typeMap[trafficItem.get('type')] + trafficItem.get('line');

  return (
    <div className={rootClass}>
      <RoundedFrame
        className={s.manager}
        status={status}
        text={text}
      />
      <div className={s.content}>
        {trafficItem.get('message')}
      </div>
    </div>
  );
};

TrafficListItem.propTypes = propTypes;

export default withStyles(s)(TrafficListItem);
