import sampleReducer from './sampleReducers'
import { combineReducers } from 'redux'

export default combineReducers ({
    sample: sampleReducer
})