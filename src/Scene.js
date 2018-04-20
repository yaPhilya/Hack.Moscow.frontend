import React, { Component } from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'

export class Scene extends Component {
  componentDidMount () {
    threeEntryPoint(this.threeRootElement)
  }

  render () {
    return (<div ref={element => this.threeRootElement = element}>
    </div>)
  }
}