import { url } from "inspector";
import useSWR, { mutate } from "swr";
import { created, remove, update } from "../api/category";
import { Icategory } from "../models/category";
export const useCategory = () => {
    const url = "/categorys"
    const { data, error, mutate } = useSWR(url)
    const removeCate = async (_id: String) => {
        const cate = await remove(_id)
        const newCateList = data.filter((item: any) => item._id !== cate._id);
        mutate(newCateList);
    }
    const createCate = async (category: Icategory)=>{
        const cate = await created(category);
        mutate([...data,cate]);
    }
    const updateCate = async (category: Icategory)=>{
        const cate = await update(category);
        const newCateList = data.map(item => item._id === cate._id ? cate : item)
        mutate(newCateList)
    }
    return {
        data,
        error,
        removeCate,
        createCate,
        updateCate
    }
}