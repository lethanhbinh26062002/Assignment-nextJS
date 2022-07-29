import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { SubmitHandler,useForm } from 'react-hook-form';
import { list } from '../../../../api/category';
import AdminLayout from '../../../../components/layout/admin'
import { useProduct } from '../../../../hooks/useProduct';

type Props = {}

const CreateProduct = (props: Props) => {
    const router = useRouter();
    const [categorys, setCategorys] = useState<any[]>([]);
    const {register,handleSubmit,formState:errors} = useForm();
    const {createProduct} = useProduct();
    useEffect(() => {
        (async () => {
            const { data } = await list();
            setCategorys(data)
        })()
    }, [])
    const onSubmit:SubmitHandler<any> =  async(data)=>{
        await createProduct(data)
        router.push('/admin/products');
    }
    return (
        <div>
            <AdminLayout> </AdminLayout>
            <main className="ml-60 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                            <div>
                                <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                                    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Create product</h1>
                                    <form action='' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Product name</label>
                                                <input {...register('name',{required:true})} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Price</label>
                                                <input {...register('price',{required:true})} id="price" type="number" min="0" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="username">Author</label>
                                                <input {...register('Writing_master',{required:true})} id="writing" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Description</label>
                                                <textarea {...register('description')} id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={""} />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Categories</label>
                                                <select {...register('category',{required:true})} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                    {categorys?.map(item => 
                                                        <option key={item._id} value={item._id}>{item.name}</option>  
                                                    )}
                                                <option value="62e2a10c012bf1e1aaa2fd83">Abc</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-white">
                                                    Image
                                                </label>
                                                <input {...register('image',{required:true})} id="writing" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-6">
                                            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Create</button>
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

export default CreateProduct