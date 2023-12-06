import { combineReducers } from 'redux'
import { isAuthenticateReducer, loadingReducer } from './AuthReducer'
import userReducer from './UserReducer'
import jobReducer from './JobReducer'
import employerReducer from './EmployerReducer'
import profileReducer from './ProfileReducer'
import experienceReducer, { experienceDetailsReducer } from './ExperienceReducer'


const appReducer = combineReducers({
    user: userReducer,
    isAuthenticate: isAuthenticateReducer,
    loading: loadingReducer,
    job: jobReducer,
    employer: employerReducer,
    profile: profileReducer,
    experience: experienceReducer,
    selectedExperience: experienceDetailsReducer,
})

export default appReducer;