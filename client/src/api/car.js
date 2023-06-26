import {$authHost} from "./index"

export const getAllCars = async () => {
    const {data} = await $authHost.get('car/')
    return data
}

export const getTopConsumers = async () => {
    const {data} = await $authHost.get('car/top-consumers')
    return data
}