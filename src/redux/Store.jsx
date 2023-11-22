import { createStore, combineReducers } from 'redux'


const isAuthenticateReducer = (prevState = false, action) => {
    switch (action.type) {
        case 'AUTHENTICATION':
            return !prevState;

        default:
            return prevState;
    }

}

const loadingReducer = (prevState = false, action) => {
    switch (action.type) {
        case
            'LOADING':
            return !prevState;

        default:
            return prevState;
    }
}

const appReducer = combineReducers({
    isAuthenticated: isAuthenticateReducer,
    loading: loadingReducer
})

const store = createStore(appReducer)

export default store;