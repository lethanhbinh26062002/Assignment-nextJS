import { userType } from "../models/userType";
import instance from "./instance";

export const list = async()=>{
    return instance.get("users")
}
export const create = async (user: userType)=>{
    return instance.post("users/create",user)
}
export const remove = async(id :String)=>{
    return instance.delete(`users/${id}`)
}
export const read = async(id :String)=>{
    return instance.get(`users/${id}`)
}
export const update = async(user :userType)=>{
    return instance.patch(`users/${user._id}`,user)
}