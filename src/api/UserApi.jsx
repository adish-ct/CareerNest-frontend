import axios from "axios"
import { baseUrl } from "./Api"
import getLocal from "../helper/Auth"
import { jwtDecode } from "jwt-decode"
import setUserDetails from "../redux/Actions/UserAction"
import { useDispatch } from "react-redux"



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


const setUserApi = () => {
    const dispatch = useDispatch()

    const token = getLocal()
    if (token) {
        const decodedToken = jwtDecode(token)
        dispatch(setUserDetails(decodedToken))
    }
}

export { fetchUserApi, manageUserApi, setUserApi }
