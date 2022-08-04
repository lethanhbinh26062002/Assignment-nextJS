import useSWR, { useSWRConfig } from "swr";
import { signup } from "../api/auth";
import { registerType } from "../models/register";

// export const useRegister = () => {
//     // const url = "/users"
//     // const { data, error, mutate } = useSWR(url)
//     // const signup = async(user : registerType) =>{
//     //     const item = await signup(user);
//     //     mutate([...data,item])
//     // };
//     const register = (user) => {
//         const url = "/users"
//         const { data, error, mutate } = useSWR(url)
//         mutate("/users", async (user: registerType) => {
//             const user = await signup(user);
//             return [...data, user];
//         });
//     };
export const useRegister = () => {
    // get list user
    // const fetcher = async (url: string) => {
    //     const { data } = await list(url);
    //     return data;
    // };

    const { data, error } = useSWR("/signup");
    const { mutate } = useSWRConfig();

    const register = (user: registerType) => {
        const account = user;
        mutate("/register", async () => {
            const { data: user } = await signup(account);
            return [...data, user];
        });
    };
    return {
        data,
        error,
        signup,
    }
}