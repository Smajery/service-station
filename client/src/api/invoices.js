import {$authHost} from "./index"

export const getAllReceipts = async () => {
    const {data} = await $authHost.get('supply/receipt')
    return data
}

export const addReceipts = async (supplier_id, user_id, supply_date, station_id, invoice_id) => {
    const {data} = await $authHost.post('supply/receipt', {supplier_id, user_id, supply_date, station_id, invoice_id})
    return data
}