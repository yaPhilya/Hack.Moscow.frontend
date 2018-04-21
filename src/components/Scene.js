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
      url: modelsStorage[model.name],
      color: '#B92C2C',
    }))}
    width={magicSizes.width}
    height={magicSizes.height}
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