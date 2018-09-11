import { connect } from 'react-redux'
import ComponentExplorer from '../components/ComponentExplorer.js'

const mapStateToProps = state => {
  return { board: state.table };
}

export default connect(
  mapStateToProps,
)(ComponentExplorer)
