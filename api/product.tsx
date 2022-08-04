import instance from "./instance";
import { productType } from "../models/product";

export const list = async()=>{
    return instance.get("products")
}
export const create = async (product: productType)=>{
    return instance.post("products/create",product)
}
export const remmove = async(id :String)=>{
    return instance.delete(`products/${id}`)
}
export const read = async(id :String)=>{
    return instance.get(`products/${id}`)
}
export const update = async(product :productType)=>{
    return instance.patch(`products/edit/${product._id}`,product)
}