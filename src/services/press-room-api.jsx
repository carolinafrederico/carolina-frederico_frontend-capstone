import axios from "axios";
const baseURL = "http://localhost:3001/"

export const loginUser = async (email, password) => {
    const URL=` ${baseURL}/{"email":${email},"password":${password}}`
    const response = await axios.get(URL)
}
