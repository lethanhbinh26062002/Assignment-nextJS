import useSWR from "swr";
import { signup, signin, list } from "../api/auth";
import { loginType, registerType } from "../models/register";

export const useRegister = () => {
    const { data, error, mutate } = useSWR("/users")
    const signUp = async (user: registerType) => {
        const item = await signup(user);
        mutate([...data, item])
    };
    const signIn = async (user: registerType) => {
        data.map(async (item: registerType) => {
            console.log(data);
            if (item.email === user.email) {
                const dataLogin = await signin(user)
                localStorage.setItem("UserLocal", JSON.stringify(item));
                console.log("data login", item);
            }
        })
    };
    return {
        data,
        error,
        signUp,
        signIn,
    }
}