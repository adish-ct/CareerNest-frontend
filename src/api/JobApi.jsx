import axios from "axios"
import getLocal from "../helper/Auth"
import { baseUrl } from "./Api"

const fetchSelectedJobApi = async (jobId) => {
    try {
        const token = getLocal()
        const headers = { Authorization: `Bearer ${token}` }
        const response = await axios.get(`${baseUrl}/employer/jobs/${jobId}/`, { headers })
        return response
    } catch (error) {
        throw new Error("Error fetching job detail")
    }
}


const fetchEmployerJobApi = async () => {
    try {
        const token = getLocal()
        const headers = { Authorization: `Bearer ${token}` }
        const response = await axios.get(`${baseUrl}/employer/jobs/`, { headers })
        return response.data
    } catch (error) {
        throw new Error("Error fetching jobs")
    }
}

export { fetchEmployerJobApi, fetchSelectedJobApi }