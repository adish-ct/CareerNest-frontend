import { EDUCATIONS } from "../Actions/Types";

const educationReducer = (prevState = null, action) => {
    switch (action.type) {
        case EDUCATIONS:
            return action.payload;
        default:
            return prevState;
    }
}

export default educationReducer;