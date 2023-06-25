import {$authHost} from "./index"

export const getAllUser = async () => {
    const {data} = await $authHost.get('user/')
    return data
}

export const updateEmployeeRole = async (email, role) => {
    const {data} = await $authHost.post('user/', {email, role})
    return data
}