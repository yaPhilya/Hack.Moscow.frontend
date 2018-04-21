import React from 'react'
import PropTypes from 'prop-types'
import STLViewer from 'stl-viewer'

import bottleModel from '../models/bottle.stl'

const modelsStorage = {
  'bottle': bottleModel,
}

const Scene = ({models}) => <STLViewer
  url={modelsStorage[models[0].name]}
  width={400}
  height={400}
  modelColor='#B92C2C'
  backgroundColor='#EAEAEA'
  rotate={true}
  orbitControls={true}
/>

Scene.propTypes = {
  models: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
}

export default Scene