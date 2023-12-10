import { PROJECTS } from './Types'

const projectAction = (projectDetails) => {
    return {
        type: PROJECTS,
        payload: projectDetails,
    }
}

export default projectAction;