import instance from "./instance";
import {registerType} from "../models/register"

export const signup = (user: registerType) => {
    return instance.post("/signup",user);
}
export const signin = (user: registerType) => {
    return instance.post("/login",user);
}