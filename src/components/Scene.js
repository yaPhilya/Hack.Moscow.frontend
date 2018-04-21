import React from 'react'
import PropTypes from 'prop-types'
import STLViewer from 'stl-viewer'

import apple from '../models/Apple.stl'
import bear from '../models/Bear.stl'
import bottle from '../models/Bottle.stl'
import building from '../models/Building.stl'
import butterfly from '../models/Butterfly.stl'
import chimp from '../models/Chimp.stl'
import clownFish from '../models/Clownfish.stl'
import crab from '../models/Crab.stl'
import deer from '../models/Deer.stl'
import dog from '../models/Dog.stl'
import fish from '../models/Fish.stl'
import fish1 from '../models/Fish1.stl'
import fish2 from '../models/Fish2.stl'
import fish3 from '../models/Fish3.stl'
import fish4 from '../models/Fish4.stl'
import fish5 from '../models/Fish5.stl'
import fish6 from '../models/Fish6.stl'
import fork from '../models/Fork.stl'
import gazebo from '../models/Gazebo.stl'
import giraffe from '../models/Giraffe.stl'
import mug from '../models/Mug.stl'
import orange from '../models/Orange.stl'
import pig from '../models/Pig.stl'
import pillow from '../models/Pillow.stl'
import rhino from '../models/Rhino.stl'
import spiders from '../models/Spiders.stl'
import spoon from '../models/Spoon.stl'
import table from '../models/Table.stl'
import tank from '../models/Tank.stl'
import teeCup from '../models/Tea Cup.stl'
import tree from '../models/Tree.stl'
import triceratops from '../models/Triceratops.stl'
import wolf from '../models/Wolf.stl'

const modelsStorage = {
  apple,
  bear,
  bottle,
  building,
  butterfly,
  chimp,
  clownFish,
  crab,
  deer,
  dog,
  fish,
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
  fish6,
  fork,
  gazebo,
  giraffe,
  mug,
  orange,
  pig,
  pillow,
  rhino,
  spiders,
  spoon,
  table,
  tank,
  teeCup,
  tree,
  triceratops,
  wolf,
}

// Костыль, чтобы работало без пробрасывания размеров
const magicSizes = {
  width: 1200,
  height: 800
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