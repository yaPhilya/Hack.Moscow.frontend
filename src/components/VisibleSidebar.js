import Sidebar from './Sidebar'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = state => {
  return {}
}

const VisibleSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default VisibleSidebar