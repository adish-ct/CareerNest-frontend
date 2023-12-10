import { PROJECTS } from "../Actions/Types";

const projectReducer = (prevState = null, action) => {
    switch (action.type) {
        case PROJECTS:
            return action.payload;
        default:
            return prevState;
    }
}

export default projectReducer;