import { AUTHENTICATION, LOADING } from '../Actions/types'

const isAuthenticateReducer = (prevState = false, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            return !prevState;
        default:
            return prevState;
    }
}


const loadingReducer = (prevState = false, action) => {
    switch (action.type) {
        case LOADING:
            return !LOADING;
        default:
            return prevState;
    }
}

export { isAuthenticateReducer, loadingReducer };