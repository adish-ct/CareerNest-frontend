import { combineReducers } from 'redux'
import { isAuthenticateReducer, loadingReducer } from './AuthReducer'
import userReducer from './UserReducer'
import jobReducer from './JobReducer'
import employerReducer from './EmployerReducer'


const appReducer = combineReducers({
    user: userReducer,
    isAuthenticate: isAuthenticateReducer,
    loading: loadingReducer,
    job: jobReducer,
    employer: employerReducer,
})

export default appReducer;