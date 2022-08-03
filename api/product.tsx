import instance from "./instance";

export const list = async () => {
    return instance.get(`/products`)
}

export const read =  (_id: string) => {
    return instance.get(`/products/${_id}`)
}