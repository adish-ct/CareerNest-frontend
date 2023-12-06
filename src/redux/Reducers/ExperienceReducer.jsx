import { EXPERIENCE, EXPERIENCE_DETAILS } from "../Actions/Types";

const experienceReducer = (prevState = null, action) => {
    switch (action.type) {
        case EXPERIENCE:
            return action.payload;
        default:
            return prevState;
    }
}

export const experienceDetailsReducer = (prevState = null, action) => {
    switch (action.type) {
        case EXPERIENCE_DETAILS:
            return action.payload;
        default:
            return prevState;
    }
}

export default experienceReducer;