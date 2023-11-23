import { SET_USER_DETAILS } from '../Actions/Types'


const userReducer = (prevState = null, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return action.payload;
        default:
            return prevState;
    }
}

export default userReducer;
