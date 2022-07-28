import instance from "./instance";

export const list = async()=>{
    return instance.get("categorys")
}