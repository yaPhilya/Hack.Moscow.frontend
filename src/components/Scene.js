import React from 'react'
import PropTypes from 'prop-types'
import STLViewer from '../lib/STLViewer'

import modelsStorage from '../models/models'

// Костыль, чтобы работало без пробрасывания размеров
const magicSizes = {
  width: 1200,
  height: 800,
}

const Scene = ({models}) =>
  <STLViewer
    models={models.map(model => ({
      ...model,
      url: modelsStorage[model.name],
    }))}
    size={{
      width: magicSizes.width,
      height: magicSizes.height,
    }}
    backgroundColor='#EAEAEA'
  />

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