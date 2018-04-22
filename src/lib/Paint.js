import THREE from './Three'
import ReactDOM from 'react-dom'

let OrbitControls = require('three-orbit-controls')(THREE)

class Paint {
  constructor (context, models, width, height, backgroundColor) {
    this.component = context
    this.width = width
    this.height = height
    this.backgroundColor = backgroundColor

    this.models = models

    this.camera
    this.scene
    this.renderer
    this.distance
    this.controls

    this.xDims = 0
    this.yDims = 0
    this.zDims = 0
  }

  init () {
    this.scene = new THREE.Scene()
    this.distance = 10000

    let directionalLight = Paint.createLight({x: 0, y: 0, z: 1})
    this.scene.add(directionalLight)

    this.addSTLToScene()
  }

  static createLight (pos) {
    let light = new THREE.DirectionalLight(0xffffff)
    light.position.x = pos.x
    light.position.y = pos.y
    light.position.z = pos.z

    light.position.normalize()

    return light
  }

  addSTLToScene () {
    let loader = new THREE.STLLoader()
    loader.crossOrigin = ''

    this.models.forEach((model) => {
      return loader.load(model.url, (geometry) => {

        // Calculate mesh noramls for MeshLambertMaterial.
        geometry.computeFaceNormals()
        geometry.computeVertexNormals()

        // Center the object
        geometry.center()

        let mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshLambertMaterial({
              overdraw: true,
              color: model.color,
            },
          ))
        mesh.position.x = model.x
        mesh.position.y = model.y
        mesh.position.z = model.z

        // Set the object's dimensions
        geometry.computeBoundingBox()
        this.xDims = Math.max(this.xDims, geometry.boundingBox.max.x -
          geometry.boundingBox.min.x)
        this.yDims = Math.max(this.yDims, geometry.boundingBox.max.y -
          geometry.boundingBox.min.y)
        this.zDims = Math.max(this.yDims, geometry.boundingBox.max.z -
          geometry.boundingBox.min.z)

        this.scene.add(mesh)

        this.camera = Paint.createCamera(
          {width: this.width, height: this.height},
        )
        this.scene.add(this.camera)

        this.updateCamera()
        this.updateInteractionControls()
        this.addToReactComponent()

        // Start the animation
        this.animate()
      })
    })
  }

  static createCamera (size) {
    // Add the camera
    const camera = new THREE.PerspectiveCamera(
      30, size.width / size.height, 1, 10000)
    camera.position.set(0, 0, 300)

    return camera
  }

  updateCamera () {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.backgroundColor, 1)
  }

  updateInteractionControls () {
    this.controls = new OrbitControls(this.camera,
      ReactDOM.findDOMNode(this.component))
    this.controls.enableKeys = false
    this.controls.addEventListener('change', this.orbitRender.bind(this))
  }

  addToReactComponent () {
    // Add to the React Component
    ReactDOM.findDOMNode(this.component).replaceChild(this.renderer.domElement,
      ReactDOM.findDOMNode(this.component).firstChild)
  }

  /**
   * Animate the scene
   * @returns {void}
   */
  animate () {
    // note: three.js includes requestAnimationFrame shim
    this.controls.update()
    this.render()
  }

  /**
   * Render the scene after turning off the rotation
   * @returns {void}
   */
  orbitRender () {
    this.render()
  }

  /**
   * Render the scene
   * @returns {void}
   */
  render () {
    this.renderer.render(this.scene, this.camera)
  }
}

export default Paint