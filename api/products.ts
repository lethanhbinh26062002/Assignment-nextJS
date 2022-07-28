import { productType } from "../models/product";
import instance from "./instance";

export const list = async()=>{
    return instance.get("products")
}
export const create = async (product: productType)=>{
    return instance.post("prducts",product)
}
export const remmove = async(id :String)=>{
    return instance.delete(`products/${id}`)
}
export const update = async(product :productType)=>{
    return instance.put(`products/${product._id}`,product)
}