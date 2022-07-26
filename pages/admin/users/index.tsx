import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../../components/layout/admin'

type Props = {}

const Users = (props: Props) => {
    return (
        <div className="">
            <AdminLayout> </AdminLayout>
            <main className="ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                        <Link href="users/create">
                                <button className="text-base mb-5 font-bold leading-none">
                                    <span className="text-blue-500">Create user</span>
                                </button>
                            </Link>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Name
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Phone
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
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4 w-4">
                                            1
                                        </td>
                                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">Neil Sims</div>
                                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6">
                                            React Developer
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> ON
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <Link href="users/edit"><button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button></Link>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-5">Delete </button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4 w-4">
                                            5
                                        </td>
                                        <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">Leslie Livingston</div>
                                                <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6">
                                            SEO Specialist
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" /> OFF
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <Link href="users/edit"><button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button></Link>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-5">Delete </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

        </div >
    )
}

export default Users