import useSWR, { useSWRConfig } from "swr";
import { signup, signin } from "../api/auth";
import { registerType } from "../models/register";

export const useRegister = () => {

    const { data, error } = useSWR("/signup");
    const { mutate } = useSWRConfig();

    const userRegister = (user: registerType) => {
        const account = user;
        mutate("/register", async () => {
            const { data: user } = await signup(account);
            return [...data, user];
        });
    };
    const login = (user: registerType) => {
        const account = user;
        mutate("/login", async () => {
            const { data: user } = await signin(account);
            return [...data, user];
        });
    };
    return {
        data,
        error,
        userRegister,
        login,
    }
}