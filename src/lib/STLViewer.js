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
    let camera, scene, renderer, mesh, distance, controls
    const {models, width, height, backgroundColor, orbitControls} = this.props
    const component = this

    const paint = new Paint(
      component, models, width, height, backgroundColor, orbitControls,
    )
    paint.init()

    /**
     * Animate the scene
     * @returns {void}
     */
    let animate = () => {
      // note: three.js includes requestAnimationFrame shim
      if (this.props.orbitControls) {
        controls.update()
      }

      renderer.render(scene, camera)
    }

  }

  shouldComponentUpdate (nextProps, nextState) {
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false
    }
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    let camera, scene, renderer, mesh, distance, controls

    const {models, width, height, backgroundColor, orbitControls} = nextProps
    const component = this

    const paint = new Paint(
      component, models, width, height, backgroundColor, orbitControls,
    )
    paint.init()

    /**
     * Animate the scene
     * @returns {void}
     */
    let animate = () => {
      // note: three.js includes requestAnimationFrame shim
      if (nextProps.orbitControls) {
        controls.update()
      }

      renderer.render(scene, camera)
    }

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