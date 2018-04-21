import { connect } from 'react-redux'
import Scene from './Scene'

const mapStateToProps = state => {
  return {
    models: state.models,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const VisibleScene = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scene)

export default VisibleScene