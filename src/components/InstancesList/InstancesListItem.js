import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { InstancePropType, PersonPropType } from './PropTypes';
import PersonChip from './PersonChip';
import RoundedFrame from '../RoundedFrame/RoundedFrame';
import s from './InstancesListItem.css';

const propTypes = {
  instance: InstancePropType.isRequired,
  manager: PersonPropType,
  className: PropTypes.string,
};

const statusMap = {
  free: 'ok',
  in_use: 'warning',
  locked: 'error',
};

const InstancesListItem = ({ instance, manager, className }) => {
  const rootClass = classNames(className, s.root);
  const status = statusMap[instance.get('status')] || null;

  return (
    <div className={rootClass}>
      <RoundedFrame
        className={s.manager}
        status={status}
      >
        {manager ? (<PersonChip person={manager} />) : null}
      </RoundedFrame>
      <div className={s.content}>
        {instance.get('status') !== 'free' ? instance.get('comment') : '-'}
      </div>
      <div className={s.number}>
        <div>{`#${instance.get('id')}`}</div>
      </div>
    </div>
  );
};

InstancesListItem.propTypes = propTypes;

export default withStyles(s)(InstancesListItem);
