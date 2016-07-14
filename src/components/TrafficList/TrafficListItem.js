import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { TrafficItemPropType } from './PropTypes';
// import PersonChip from '../InstancesList/PersonChip';
// TODO: Transform this into a generic chip that we can use in all components.
import InstanceStatusChip from '../InstancesList/InstanceStatusChip';
import s from './TrafficListItem.css';

const TrafficListItem = ({ trafficItem, className }) => {
  const rootClass = classNames(className, s.root);

  return (
    <div className={rootClass}>
      <InstanceStatusChip className={s.manager}>
        <span>{trafficItem.get('line')}</span>
      </InstanceStatusChip>
      <div className={s.content}>
        {trafficItem.get('message')}
      </div>
      <div className={s.number}>
        {trafficItem.get('line')}
      </div>
    </div>
  );
};

TrafficListItem.propTypes = {
  trafficItem: TrafficItemPropType.isRequired,
  className: PropTypes.string,
};

export default withStyles(s)(TrafficListItem);
