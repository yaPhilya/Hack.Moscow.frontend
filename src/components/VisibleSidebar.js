import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import { fetchExtractCreator } from '../actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExtract: (text) => dispatch(fetchExtractCreator(text)),
  }
}

const VisibleSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default VisibleSidebar