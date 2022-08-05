import { CommentType } from "../types/CommentType";
import instance from "./instance";

export const list = async () => {
    return instance.get(`/comments`)
}

export const add = async (comment: any)=>{
    return instance.post("/comments/create",comment)
}