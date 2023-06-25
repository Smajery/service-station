import {$authHost} from "./index"

export const getStatistics = async () => {
    const {data} = await $authHost.get('fal/statistics')
    return data
}