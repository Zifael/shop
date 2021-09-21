import {$authHost,$host} from "./index";


// Type
export const createTypes = async (type) => {
    const {data} = await $authHost.post('api/type',type)    
    return data
}


export const fetchTypes = async () => {    
    const {data} = await $host.get('api/type')
    return data
}

// Brand
export const createBrands = async (brand) => {
    const {data} = await $authHost.post('api/brand',brand)    
    return data
}


export const fetchBrand = async () => {    
    const {data} = await $host.get('api/brand')
    return data
}

// Device
export const createDevices = async (device) => {
    const {data} = await $authHost.post('api/device',device)    
    return data
}


export const fetchDevice = async (typeId,brandId,page, limit) => {    
    const {data} = await $host.get('api/device',{params:{
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneDevice = async (id) => {    
    const {data} = await $host.get('api/device/' + id)
    return data
}

