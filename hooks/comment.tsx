import useSWR from "swr";
import { add } from "../api/comment";

const useComment = () => {
    const { data, error, mutate } = useSWR('/comments')

    //add cmt
    const create = async (item:any) => {
        const comment =  await add(item)
        mutate ([...data, comment])
    }

    return {
        data,
        error,
        mutate,
        create
    }
}

export default useComment