import instance from "./instance";

export const signup = (user: any) => {
    return instance.post("/signup",user);
}
export const signin = (user: any) => {
    return instance.post("/signin",user);
}
export const list = async()=>{
    return instance.get("/users")
}