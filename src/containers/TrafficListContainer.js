import { connect } from 'react-redux';

import TrafficList from '../components/TrafficList/TrafficList';

function mapStateToProps(state) {
  return {
    traffic: state.get('traffic'),
  };
}

export default connect(mapStateToProps)(TrafficList);
