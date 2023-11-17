import { createStore, combineReducers } from 'redux'



// const appReducer = (prevState = initialState, action) => {
//     return {
//         value: valueReducer(prevState.value, action),
//         name: "",
//         loading: loadingReducer(prevState.loading, action)
//     }
// };

const valueReducer = (prevState = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return prevState + 1;
        case

            'DECREMENT':
            return prevState - 1;

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
    value: valueReducer,
    loading: loadingReducer
})

const store = createStore(appReducer)

export default store;