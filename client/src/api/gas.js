import {$authHost} from "./index"

export const getAllGas = async () => {
    const {data} = await $authHost.get('fal/')
    return data
}

export const addGas = async (name, type) => {
    const {data} = await $authHost.post('fal/', {name, type})
    return data
}

export const getStock = async () => {
    const {data} = await $authHost.get('fal/stock')
    return data
}

export const getConsumption = async (trip_id) => {
    const {data} = await $authHost.get(`fal/consumption/${trip_id}`)
    return data
}