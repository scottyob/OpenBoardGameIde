import { connect } from 'react-redux'
import PropertiesEditor from '../components/PropertiesEditor.js'

const mapStateToProps = state => {
  return { selected: state.selected }
}

export default connect(
  mapStateToProps,
)(PropertiesEditor)
