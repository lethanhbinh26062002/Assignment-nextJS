import useSWR from "swr";
import { create, remove, update, read } from "../api/user";
import { userType } from "../models/userType";

export const useUser = () => {
    const url = "/users"
    const { data, error, mutate } = useSWR(url)
    
    const createUser = async(user : userType) =>{
        const item = await create(user);
        mutate([...data,item])
    };
    const updateUser = async(user : userType) =>{
        const users = await update(user);
        console.log(user);
        const newUserList = data.map(item => item._id === users._id ? users : item)
        mutate(newUserList)
    };
    const removeUser = async (_id : String) =>{
        const users = await remove(_id);
        const newUserList = data.filter((item: any) => item._id !== users._id);
        mutate(newUserList);
    }
    const updateStatus = async (_id: string, status: number) =>{
        const users = await read(_id);
        users.status = status
        const dataUpdate = await update(users);
        console.log(users);
        const newUserList = data.map(item => item._id === users._id ? users : item)
        mutate(newUserList)
    }
    const updateRole = async (_id: string, role: number) =>{
        const users = await read(_id);
        users.role = role
        const dataUpdateRole = await update(users);
        console.log(users);
        const newUserList = data.map(item => item._id === users._id ? users : item)
        mutate(newUserList)
    }
    return {
        data,
        error,
        createUser,
        removeUser,
        updateUser,
        updateStatus, 
        updateRole
    }
}