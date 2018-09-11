import { connect } from 'react-redux'
import Viewer from '../components/Viewer.js'

const mapStateToProps = state => {
  return {
     table: state.table,
     selectedUuid: state.selectedUuid
  };
}

export default connect(
  mapStateToProps,
)(Viewer)
