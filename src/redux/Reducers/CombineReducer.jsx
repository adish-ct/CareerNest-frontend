import { combineReducers } from 'redux'
import { isAuthenticateReducer, loadingReducer } from './AuthReducer'
import userReducer from './UserReducer'
import jobReducer from './JobReducer'


const appReducer = combineReducers({
    user: userReducer,
    isAuthenticate: isAuthenticateReducer,
    loading: loadingReducer,
    job: jobReducer,
})

export default appReducer;