import useSWR, { useSWRConfig } from "swr";
import { signup } from "../api/auth";
import { registerType } from "../models/register";
export const useRegister = () => {

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