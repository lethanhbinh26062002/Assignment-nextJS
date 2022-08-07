import instance from "./instance";

export const create_cart = (cart: any) => {
    return instance.post(`/cart`,cart);
}
export const list_cart = () => {
    return instance.get(`/cart`);
}
export const update_cart = async(id_u:string, id:string,product:any)=>{
    return instance.patch(`/cart/${id_u}/${id}`,product);
}
export const delete_cart = async(id_u:string,id:string)=>{
    return instance.delete(`/cart/${id_u},/${id}`)
}