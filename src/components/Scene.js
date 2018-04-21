import React from 'react'
import STLViewer from 'stl-viewer'

import bottleModel from '../models/bottle.stl'

const models = {
  'bottle': bottleModel,
}

export const Scene = () => <STLViewer
  url={models.bottle}
  width={400}
  height={400}
  modelColor='#B92C2C'
  backgroundColor='#EAEAEA'
  rotate={true}
  orbitControls={true}
/>
