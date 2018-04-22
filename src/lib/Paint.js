import THREE from './Three'
import ReactDOM from 'react-dom'

let OrbitControls = require('three-orbit-controls')(THREE)

class Paint {
  constructor (context, models, width, height, backgroundColor, orbitControls) {
    this.component = context
    this.width = width
    this.height = height
    this.backgroundColor = backgroundColor
    this.orbitControls = orbitControls

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
    //Detector.addGetWebGLMessage();
    this.scene = new THREE.Scene()
    this.distance = 10000
    let directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.x = 0
    directionalLight.position.y = 0
    directionalLight.position.z = 1
    directionalLight.position.normalize()
    this.scene.add(directionalLight)

    this.addSTLToScene()
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

        this.updateCamera()
        this.updateInteractionControls()
        this.addToReactComponent()

        // Start the animation
        this.animate()
      })
    })
  }

  updateCamera () {
    // Add the camera
    this.camera = new THREE.PerspectiveCamera(
      30, this.width / this.height, 1, this.distance)
    this.camera.position.set(0, 0,
      Math.max(this.xDims * 3, this.yDims * 3, this.zDims * 3))

    this.scene.add(this.camera)

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.backgroundColor, 1)
  }

  updateInteractionControls () {
    // Add controls for mouse interaction
    if (this.orbitControls) {
      this.controls = new OrbitControls(this.camera,
        ReactDOM.findDOMNode(this.component))
      this.controls.enableKeys = false
      this.controls.addEventListener('change', this.orbitRender.bind(this))
    }
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
    if (this.orbitControls) {
      this.controls.update()
    }
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