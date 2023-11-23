import { createStore, combineReducers } from 'redux'
import appReducer from './Reducers/CombineReducer'


const store = createStore(appReducer)

export default store;