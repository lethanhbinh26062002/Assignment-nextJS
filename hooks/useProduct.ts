import useSWR from "swr";
import { create, remmove, update } from "../api/products";
import { productType } from "../models/product";

export const useProduct = () => {
    const url = "/products"
    const { data, error, mutate } = useSWR(url)
    const createProduct = async(product : productType) =>{
        const item = await create(product);
        mutate([...data,item])
    };
    const updateProduct = async(product : productType) =>{
        const pro = await update(product);
        console.log(pro);
        const newProductList = data.map(item => item._id === pro._id ? pro : item)
        mutate(newProductList)
    };
    const removePro = async (_id : String) =>{
        const product = await remmove(_id);
        const newProductList = data.filter((item: any) => item._id !== product._id);
        mutate(newProductList);
    }
    return {
        data,
        error,
        createProduct,
        removePro,
        updateProduct
    }
}