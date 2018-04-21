export const SET_MODELS = 'SET_MODELS'
export const FETCH_EXTRACT_REQUEST = 'FETCH_EXTRACT_REQUEST'

export const setModelsCreator = (models) => ({
  type: SET_MODELS,
  models,
})

export const fetchExtractCreator = (text) => ({
  type: FETCH_EXTRACT_REQUEST,
  text,
})
