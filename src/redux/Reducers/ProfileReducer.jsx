import { PROFILE_DETAILS } from '../Actions/Types'

const profileReducer = (prevState = null, action) => {
    switch (action.type) {
        case PROFILE_DETAILS:
            return action.payload;
        default:
            return prevState;
    }
}

export default profileReducer;