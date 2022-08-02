import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../../components/layout/admin'
import { useCategory } from '../../../hooks/useCategory'

type Props = {}

const Categories = (props: Props) => {
    const { data: categorys, error, removeCate } = useCategory();
    const handlerRemove = (_id:String) =>{
        let result = confirm("Bạn có muốn xoá không ?")
        if(result) removeCate(_id)
    }
    if (error) return <div>Fali : {error}</div>
    if (!categorys) return <div>Loading...</div>
    return (
        <div className="">
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"></link>
            <AdminLayout> </AdminLayout>
            <main className="ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                            <Link href="categories/create">
                                <button className="text-base mb-5 font-bold leading-none">
                                    <span className="text-blue-500">Create category</span>
                                </button>
                            </Link>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Image
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Name
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Status
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys?.map((item: any, index: any) => {
                                        return (
                                            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-4">
                                                    {index + 1}
                                                </td>
                                                <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img className="w-10 h-10 rounded-full" src={item.image} />
                                                </th>
                                                <td className="py-4 px-6">
                                                    <div className="">
                                                        <div className="text-base font-semibold">{item.name}</div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center">
                                                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> ON
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div>
                                                        <Link href="categories/1">
                                                            <button className="text-gray-400 hover:text-gray-100 mr-2">
                                                                <i className="material-icons-outlined text-base">visibility</i>
                                                            </button>
                                                        </Link>
                                                        <Link href={`/admin/categories/edit/${item._id}`}>
                                                            <button className="text-gray-400 hover:text-blue-500 mx-2">
                                                                <i className="material-icons-outlined text-base">edit</i>
                                                            </button>
                                                        </Link>
                                                        <button onClick={() =>handlerRemove(item._id)} className="text-gray-400 hover:text-red-500 ml-2">
                                                            <i className="material-icons-round text-base">delete_outline</i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

        </div >
    )
}

export default Categories