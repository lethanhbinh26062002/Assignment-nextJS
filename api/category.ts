import { Icategory } from "../models/category";
import instance from "./instance";

export const list = async()=>{
    return instance.get("categorys")
}
export const remove = async (_id: String)=>{
    return instance.delete(`categorys/${_id}`)
}
export const created = async (category :Icategory)=>{
    return instance.post(`categorys`,category)
};
export const update = async (category :Icategory)=>{
    return instance.patch(`categorys/${category._id}`,category)
};
export const read = async(_id:String)=>{
    return instance.get(`categorys/${_id}`)
}