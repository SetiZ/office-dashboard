import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const TrafficItemPropType = ImmutablePropTypes.mapContains({
  line: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  slug: PropTypes.string,
});

export const TrafficPropType = ImmutablePropTypes.listOf(
  TrafficItemPropType
);
