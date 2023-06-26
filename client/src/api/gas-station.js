import {$authHost} from "./index"

export const refueling = async (user_id, trip_id, date, fal_list) => {
    const {data} = await $authHost.post('car/refueling', {user_id, trip_id, date, fal_list})
    return data
}