import instance from "./instance";

export const list = async()=>{
    return instance.get("products")
}

export const read = async(id :String)=>{
    return instance.get(`products/${id}`)
}