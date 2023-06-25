import {$authHost} from "./index"

export const getAllGas = async () => {
    const {data} = await $authHost.get('fal/')
    return data
}

export const addGas = async (name, type) => {
    const {data} = await $authHost.post('fal/', {name, type})
    return data
}