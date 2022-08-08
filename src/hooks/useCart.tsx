import { json } from "node:stream/consumers";
import useSWR from "swr";
import { create_cart } from "../api/cart";
import { CartItem } from "../models/cartItem";

export const useCart = () => {
    const url = `/cart`
    const { data, error, mutate } = useSWR(url)

    const createCartItem = async(cartItem : any) =>{
        // const data =  JSON.parse(localStorage.getItem('UserLocal') || '{}');
        const item = await create_cart(cartItem)
        mutate([...data,item])
    };
    const updateCartItem = async(cartItem : CartItem) =>{
        // const pro = await update(product);
        // console.log(pro);
        // const newProductList = data.map(item => item._id === pro._id ? pro : item)
        // mutate(newProductList)
    };
    const removeCartItem= async (_id : String) =>{
        // const product = await remmove(_id);
        // const newProductList = data.filter((item: any) => item._id !== product._id);
        // mutate(newProductList);
    }
    return {
        data,
        error,
        createCartItem,
        updateCartItem,
        removeCartItem
    }
}