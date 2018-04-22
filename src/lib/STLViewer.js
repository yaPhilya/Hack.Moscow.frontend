import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScaleLoader } from 'halogenium'
import Paint from './Paint'

class STLViewer extends Component {
  static propTypes = {
    className: PropTypes.string,
    models: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        color: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.number,
      })),
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    orbitControls: PropTypes.bool,
  }

  static defaultProps = {
    backgroundColor: '#EAEAEA',
    height: 400,
    width: 400,
    orbitControls: true,
  }

  componentDidMount () {
    const {models, width, height, backgroundColor, orbitControls} = this.props
    const component = this

    const paint = new Paint(
      component, models, width, height, backgroundColor, orbitControls,
    )
    paint.init()
  }

  componentWillUpdate (nextProps, nextState) {
    const {models, width, height, backgroundColor, orbitControls} = nextProps
    const component = this

    const paint = new Paint(
      component, models, width, height, backgroundColor, orbitControls,
    )
    paint.init()
  }

  render () {
    const {width, height} = this.props

    return (
      <div
        className={this.props.className}
        style={{
          width: width,
          height: height,
          overflow: 'hidden',
        }}
      >
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ScaleLoader size="16px"/>
        </div>
      </div>
    )
  };
}

export default STLViewer