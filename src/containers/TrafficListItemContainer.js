import { connect } from 'react-redux';

import TrafficListItem from '../components/TrafficList/TrafficListItem';

function mapStateToProps(state, { trafficItem }) {
  return {};
}

export default connect(mapStateToProps)(TrafficListItem);
