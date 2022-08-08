import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useSWR from 'swr'
import { list } from '../../../../api/category'
import { read } from '../../../../api/product'
import AdminLayout from '../../../../components/layout/admin'
import { useProducts } from '../../../../hooks/useProduct'
import { productType } from '../../../../models/product'
type Props = {}

const EditProducts = (props: Props) => {
    const { register, formState: errors, reset, handleSubmit } = useForm();
    const [categorys, setCategorys] = useState<any[]>([]);
    const router = useRouter();
    const { updateProduct } = useProducts();
    const { id } = router.query
    // const { data, error } = useSWR(id ? `/products/${id}` : null);
    useEffect(() => {
        (async () => {
            const data = await read(id)
            const listCate = await list();
            setCategorys(listCate)
            reset(data)
        })()
    }, [id])
    const onSubmit: SubmitHandler<productType> = async (data: productType) => {
        await updateProduct(data);
        router.push('/admin/products')
    }
    // if (!data) return <div>Loading...</div>
    // if (error) return <div>Error : {error}</div>
    return (
        <div>
            <AdminLayout> </AdminLayout>
            <main className="ml-60 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                            <div>
                                <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                                    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Edit product</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Product name</label>
                                                <input {...register('name', { required: true })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Price</label>
                                                <input {...register('price', { required: true })} id="price" type="number" min="0" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Writing master</label>
                                                <input {...register('Writing_master', { required: true })} id="writing" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Description</label>
                                                <textarea {...register('description')} id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={""} />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Categories</label>
                                                <select {...register('category', { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                    {categorys?.map(item =>
                                                        <option key={item._id} value={item._id}>{item.name}</option>
                                                    )}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-white">
                                                    Image
                                                </label>
                                                <input {...register('image', { required: true })} id="writing" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                                {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span className="">Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1 text-white">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-white">
                                                            PNG, JPG, GIF up to 10MB
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-6">
                                            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Update</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EditProducts