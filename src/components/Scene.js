import React, { Component } from 'react'
import {
  Scene as ThreeScene,
  WebGLRenderer,
  Loader,
  Mesh,
  PerspectiveCamera,
  MeshBasicMaterial,
} from 'three'
import PropTypes from 'prop-types'

import modelsStorage from '../models/models'

// Костыль, чтобы работало без пробрасывания размеров
const magicSizes = {
  width: '1200px',
  height: '800px',
}

class Scene extends Component {
  constructor (props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount () {
    const models = this.props.models

    const width = this.mount.width
    const height = this.mount.height

    const scene = new ThreeScene()
    const camera = new PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    )
    const renderer = new WebGLRenderer({antialias: true})
    const loader = new Loader()

    models.forEach(modelData => {
      loader.load(modelsStorage[modelData.name], (geometry) => {
        const material = new MeshBasicMaterial({color: '#433F81'})
        const mesh = new Mesh(geometry, material)

        scene.add(mesh)
      })
    })

    camera.position.z = 4
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount () {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start () {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop () {
    cancelAnimationFrame(this.frameId)
  }

  animate () {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene () {
    this.renderer.render(this.scene, this.camera)
  }

  render () {
    return (
      <div
        style={{width: magicSizes.width, height: magicSizes.height}}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

Scene.propTypes = {
  models: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
      z: PropTypes.number,
    }),
  ),
}

export default Scene