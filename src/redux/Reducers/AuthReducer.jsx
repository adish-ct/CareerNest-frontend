import { AUTHENTICATION, LOADING } from '../Actions/Types'

const isAuthenticateReducer = (prevState = false, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            return !prevState;
        default:
            return prevState;
    }
}


const loadingReducer = (prevState = true, action) => {
    switch (action.type) {
        case LOADING:
            return !LOADING;
        default:
            return prevState;
    }
}

export { isAuthenticateReducer, loadingReducer };