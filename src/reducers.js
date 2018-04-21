import { SET_MODELS } from './actions'

const initialState = {
  models: [
    {
      name: 'bottle',
    },
  ],
}

const App = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODELS:
      return {
        ...state,
        models: action.models,
      }
    default:
      return state
  }
}

export default App