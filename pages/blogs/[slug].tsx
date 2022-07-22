import React from 'react'

const BlogDetailPage = () => {
    return (
        <div className='w-[75%] mx-auto'>
            <h1 className='text-[3rem] text-center text-gray-800 mb-[3rem]'>BLogs Detail Page</h1>
            <figure className=' mx-auto'>
                <img src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg" alt="" />
            </figure>
            <div className='content'>
                <div className='flex justify-between items-end px-5 my-5'>
                    <h3 className='text-3xl'>BLogs detail title</h3>
                    <span className='bg-red-400 text-white block px-5 py-2 rounded-3xl'>2022</span>
                </div>
                <p className='text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a, officiis dicta assumenda amet incidunt! Totam accusantium voluptate dicta! Nisi similique quia officia tempora incidunt maxime laboriosam iusto placeat. Inventore!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni unde reprehenderit suscipit repellendus nam minima autem quis. Ad, doloremque iusto illum quidem veniam corporis necessitatibus id aperiam aliquid voluptate dicta.
                </p>
            </div>
        </div>
    )
}

export default BlogDetailPage