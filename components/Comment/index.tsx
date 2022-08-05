import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useComment from '../../hooks/comment'

type CommentProps = {
    content: String
}

const Comment = () => {
    const {create} = useComment()
    const {register, handleSubmit, formState:{errors}} = useForm<CommentProps>()
    const onSubmit: SubmitHandler<CommentProps> = async (comment) => {
        const data = await create(comment)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='py-3'>
                <div className='py-2'>
                    <input type="text" {...register('content')} placeholder="Viết bình luận ..." className="w-1/3 px-4 py-2 border-b-2 border-pink-300 outline-none focus:border-gray-400" />
                </div>
                <div className='py-2 px-4 bg-pink-300 w-20 text-white text-center rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    <button className=''>Đăng</button>
                </div>
            </form>
        </div>
    )
}

export default Comment