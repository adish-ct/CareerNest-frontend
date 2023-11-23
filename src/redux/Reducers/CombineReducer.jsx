import { combineReducers } from 'redux'
import { isAuthenticateReducer, loadingReducer } from './AuthReducer'
import userReducer from './UserReducer'


const appReducer = combineReducers({
    user: userReducer,
    isAuthenticate: isAuthenticateReducer,
    loading: loadingReducer,
})

export default appReducer;