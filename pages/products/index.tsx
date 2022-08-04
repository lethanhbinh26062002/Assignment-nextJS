import React from 'react'
import { useProducts } from '../../hooks/useProduct';
import { ProductType } from '../../types/ProductType';

const ProductPage = () => {
    const { data, error } = useProducts();
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>

    return (
        <div className='w-[90%] mx-auto'>
            <div className='search flex justify-between items-end'>
                <div className='group navbar-products relative'>
                    <button className='lable inline-block w-[300px]
                    py-[5px] border-b-2 pl-[5px] flex justify-between items-center
                    '><span>All</span><span></span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg></button>
                    <div className="absolute hidden group-hover:block z-10 left-0 right-0 bottom--[20px] overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='search-products w-[30%]'>
                    <form className="flex items-center pr-[30px]">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full pl-10 p-2.5" placeholder="Name Product..." required />
                        </div>
                        {/* <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <span className="sr-only">Search</span>
                        </button> */}
                    </form>
                </div>
            </div>
            <div className='product-list'>
                <div className="bg-white">
                    <div className="w-full mx-auto lg:w-full">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {/* product */}
                            {data.map((item: ProductType) => {
                                return (
                                    <div key={item._id} className="group relative">
                                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                            <img src={item.image} alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={`/products/${item._id}`}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {item.name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{item.price}</p>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>

                    <div className='w-full flex justify-center mt-[100px]'>
                        <div className="flex items-center space-x-1">
                            <a href="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>
                            </a>

                            <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                1
                            </a>
                            <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                2
                            </a>
                            <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                3
                            </a>
                            <a href="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductPage