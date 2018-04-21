import React from 'react'
import PropTypes from 'prop-types'
import STLViewer from '../lib/STLViewer'

import modelsStorage from '../models/models'

// Костыль, чтобы работало без пробрасывания размеров
const magicSizes = {
  width: 1200,
  height: 800,
}

const Scene = ({models}) => <STLViewer
  url={modelsStorage[models[0].name]}
  width={magicSizes.width}
  height={magicSizes.height}
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