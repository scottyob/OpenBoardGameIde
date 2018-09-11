import { connect } from 'react-redux'
import SaveButton from '../components/SaveButton.js'

const mapStateToProps = state => {
  return {
     table: state.table,
  };
}

export default connect(
  mapStateToProps,
)(SaveButton)
