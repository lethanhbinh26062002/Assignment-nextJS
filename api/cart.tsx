import instance from "./instance";

export const list = async()=>{
    return instance.get("/cart")
}
export const create = async (product: any)=>{
    return instance.post(`/products/${product._id}`,product)
}
export const remmove = async(id :String)=>{
    return instance.delete(`/cart/${id}`)
}
export const update = async(_id: String , cart : any) => {
    return instance.patch(`/cart/${_id}`,cart)
}