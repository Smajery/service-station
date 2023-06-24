import {$authHost, $host} from "./index"

export const registration = async (email, password, name) => {
    const {data} = await $host.post('user/registration', {email, password, name})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('user/login', {email, password})
    return data
}

export const checkAuth = async () => {
    const {data} = await $authHost.get('user/auth')
    return data
}