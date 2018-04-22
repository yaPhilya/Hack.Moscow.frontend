import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScaleLoader } from 'halogenium'
import Paint from './Paint'

class STLViewer extends Component {
  static propTypes = {
    models: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        color: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.number,
      })),
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    backgroundColor: PropTypes.string,
  }

  static defaultProps = {
    models: [],
    backgroundColor: '#EAEAEA',
    size: {
      height: 400,
      width: 400,
    },
  }

  render () {
    const {models, size, backgroundColor} = this.props
    const component = this

    new Paint(component, models, size.width, size.height, backgroundColor)

    return (
      <div
        style={{
          width: size.width,
          height: size.height,
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