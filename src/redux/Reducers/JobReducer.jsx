import { SET_JOB_DETAILS } from '../Actions/Types'

const jobReducer = (prevState = null, action) => {
    switch (action.type) {
        case 'SET_JOB_DETAILS':
            return action.payload;
        default:
            return prevState;
    }
}

export default jobReducer;