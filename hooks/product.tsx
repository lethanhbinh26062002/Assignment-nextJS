import useSWR from "swr";

const useProducts = () =>{
    const {data, error, mutate} = useSWR('/products')
    return{
        data,
        error,
        mutate
    }
}

export default useProducts