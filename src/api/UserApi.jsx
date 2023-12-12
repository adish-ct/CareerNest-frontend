import axios from "axios"
import { baseUrl } from "./Api"

const fetchUserApi = async (role) => {
    try {
        const response = await axios.get(`${baseUrl}/accounts/users/?role=${role}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}


const manageUserApi = async (userId, values) => {
    try {
        const response = await axios.put(`${baseUrl}/accounts/get-user/${userId}/`, values)
        console.log(response.data);
    } catch (error) {

    }
}

export { fetchUserApi, manageUserApi }
