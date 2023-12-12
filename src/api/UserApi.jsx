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

export { fetchUserApi }
