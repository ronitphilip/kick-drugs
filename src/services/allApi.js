import commonApi from './commonApi';
import server_url from './serverURL';

// -------------------------------admin api-------------------------------

// login
export const loginAPI = async (reqBody ) => {
    return await commonApi("POST", `${server_url}/login`, reqBody)
}

// register
export const registerAPI = async (reqBody, header) => {
    return await commonApi("POST", `${server_url}/register`, reqBody, header)
}

// register
export const fetchAllUsersAPI = async (header) => {
    return await commonApi("GET", `${server_url}/all-users`, null, header)
}

