import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import s from './RoundedFrame.css';

const propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
};

const RoundedFrame = ({ status, className, text, children }) => {
  const rootClass = classNames(className, s.root, s[status]);

  return (
    <div className={rootClass}>
      {text ? (
        <div className={s.text}>{text}</div>
      ) : children}
    </div>
  );
};

RoundedFrame.propTypes = propTypes;

export default withStyles(s)(RoundedFrame);
