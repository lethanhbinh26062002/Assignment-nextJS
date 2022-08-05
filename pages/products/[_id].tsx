import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../components/Header'
import Comment from '../../components/Comment'
import Link from 'next/link'


const Detail = () => {
    const router = useRouter()
    const { _id } = router.query
    const { data, error } = useSWR(_id ? `/products/${_id}` : null)
    console.log(data);

    if (!data) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div>
            <Header />
            <section>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">
                            {data.name}
                        </h1>
                        {/* <p className="mt-1 text-sm text-gray-500">
                            { }
                        </p> */}
                    </div>
                    <div className="grid gap-8 lg:items-start lg:grid-cols-4">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img src={data.image} className="w-max object-cover" />
                                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                    <span className="text-xs ml-1.5">
                                        Hover to zoom
                                    </span>
                                </div> */}
                            </div>
                            <ul className="flex gap-1 mt-1">
                                <li>
                                    <img className="object-cover w-16 h-16 rounded-md" src={data.image} />
                                </li>
                                <li>
                                    <img className="object-cover w-16 h-16 rounded-md" src={data.image} />
                                </li>
                                <li>
                                    <img className="object-cover w-16 h-16 rounded-md" src={data.image} />
                                </li>
                                <li>
                                    <img className="object-cover w-16 h-16 rounded-md" src={data.image} />
                                </li>
                            </ul>
                        </div>
                        <div className="lg:top-0 lg:sticky">
                            <form className="space-y-4 lg:pt-8">
                                <fieldset>
                                    <legend className="text-lg font-bold">
                                        Bộ sách
                                    </legend>
                                    <div className="flex mt-2 space-x-1">
                                        <Link href="">chỗ này để link danh mục</Link>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="text-lg font-bold">
                                        Material
                                    </legend>
                                    <div className="flex mt-2 space-x-1">
                                        <label htmlFor="material_cotton" className="cursor-pointer">
                                            <input type="radio" id="material_cotton" name="material" className="sr-only peer" defaultChecked />
                                            <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                                                Cotton
                                            </span>
                                        </label>
                                        <label htmlFor="material_wool" className="cursor-pointer">
                                            <input type="radio" id="material_wool" name="material" className="sr-only peer" defaultChecked />
                                            <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                                                Wool
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>
                                <div className="p-4 border rounded">
                                    <p className="text-sm">
                                        <legend className="text-lg font-bold">
                                            Tác giả
                                        </legend>
                                        <span className="block">
                                            {data.Writing_master}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">
                                        {data.price} VNĐ
                                    </p>
                                </div>
                                <div className="relative flex flex-row h-8 ">
                                    <input type="number" defaultValue={1} className="w-44 rounded text-center text-gray-700 border -2 border-pink-300 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                                <button type="submit" className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-pink-300 rounded hover:bg-gray-400">
                                    Add to cart
                                </button>
                                <button className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-400 text-white border border-gray-300 rounded hover:bg-pink-300">
                                    <Link href="/products">
                                        Quay về danh sách
                                    </Link>
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="prose max-w-none">
                                {data.description}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Detail