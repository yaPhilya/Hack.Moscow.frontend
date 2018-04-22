import THREE from './Three'
import ReactDOM from 'react-dom'

let OrbitControls = require('three-orbit-controls')(THREE)

class Paint {
  constructor (context, models, width, height, backgroundColor) {
    this.component = context
    this.models = models
    this.backgroundColor = backgroundColor

    this.scene = new THREE.Scene()

    // Container for all objects
    this.group = new THREE.Group()
    this.scene.add(this.group)

    this.camera = Paint.createCamera({width, height})
    this.scene.add(this.camera)

    let light = Paint.createLight({x: 0, y: 0, z: 1})
    this.scene.add(light)

    this.renderer = Paint.createRenderer({width, height}, this.backgroundColor)

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

        this.group.add(mesh)

        // I dunno why controls must be here
        this.controls = Paint.createControls(this.component, this.camera,
          () => this.render(),
        )

        this.addToReactComponent()

        const helper = new THREE.BoundingBoxHelper(this.group)
        this.camera.position.set(0, 0, 300)
        this.controls.update()
        this.render()
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

  static createRenderer (size, backgroundColor) {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(size.width, size.height)
    renderer.setClearColor(backgroundColor, 1)

    return renderer
  }

  static createControls (component, camera, renderFunc) {
    const controls = new OrbitControls(camera, ReactDOM.findDOMNode(component))
    controls.enableKeys = false
    controls.addEventListener('change', renderFunc)

    return controls
  }

  addToReactComponent () {
    // Add to the React Component
    ReactDOM.findDOMNode(this.component).replaceChild(this.renderer.domElement,
      ReactDOM.findDOMNode(this.component).firstChild)
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