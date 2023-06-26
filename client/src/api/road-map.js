import {$authHost} from "./index"

export const getAllRoadMap = async (startDate, endDate) => {
    const {data} = await $authHost.get(`trip/?startDate=${startDate}&endDate=${endDate}`)
    return data
}

export const getAllRoadMapDriver = async (user) => {
    const {data} = await $authHost.get('trip/driver', user)
    return data
}

export const addRoadMap = async (user_id, car_id, date, destination_address) => {
    const {data} = await $authHost.post('trip/', {user_id, car_id, date, destination_address})
    return data
}