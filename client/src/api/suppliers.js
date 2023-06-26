import {$authHost} from "./index"

export const getAllSuppliers = async () => {
    const {data} = await $authHost.get('supply/rank-suppliers')
    return data
}

export const addSuppliers = async (name, phone, account) => {
    const {data} = await $authHost.post('supply/', {name, phone, account})
    return data
}