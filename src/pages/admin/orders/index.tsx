import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../../components/layout/admin'

type Props = {}

const Orders = (props: Props) => {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"></link>
            <AdminLayout> </AdminLayout>
            <main className="ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Detail
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Customer
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Phone Number
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
                                <td className="py-4 px-6">
                                    <div className="group inline-block">
                                        <button className="outline-none focus:outline-none px-3 py-1 dark:bg-gray-700 rounded-sm flex items-center text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </button>
                                        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                                            <li className="">
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="p-4 w-4">
                                                        1
                                                    </td>
                                                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                                        <div className="pl-3">
                                                            <div className="text-base font-semibold">Neil Sims</div>
                                                        </div>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        120.000 VNĐ
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div>
                                                            <button className="text-gray-400 hover:text-red-500 ml-2">
                                                                <i className="material-icons-round text-base">delete_outline</i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="p-4 w-4">
                                                        2
                                                    </td>
                                                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                                        <div className="pl-3">
                                                            <div className="text-base font-semibold">Neil Sims</div>
                                                        </div>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        152.000 VNĐ
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div>
                                                            <button className="text-gray-400 hover:text-red-500 ml-2">
                                                                <i className="material-icons-round text-base">delete_outline</i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </li>
                                        </ul>
                                    </div>
                                    <style dangerouslySetInnerHTML={{ __html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
                                </td>
                                <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="py-4 px-6">
                                    <div className="text-base font-semibold">0346759178</div>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Giao hàng thành công
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <button className="text-gray-400 hover:text-red-500 ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 w-4">
                                    5
                                </td>
                                <td className="py-4 px-6">
                                    <div className="group inline-block">
                                        <button className="outline-none focus:outline-none px-3 py-1 dark:bg-gray-700 rounded-sm flex items-center text-gray-400 hover:text-gray-100 mr-2">
                                            <i className="material-icons-outlined text-base">visibility</i>
                                        </button>
                                        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                                            <li className="">
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="p-4 w-4">
                                                        1
                                                    </td>
                                                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                                        <div className="pl-3">
                                                            <div className="text-base font-semibold">Neil Sims</div>
                                                        </div>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        120.000 VNĐ
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div>
                                                            <button className="text-gray-400 hover:text-red-500 ml-2">
                                                                <i className="material-icons-round text-base">delete_outline</i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="p-4 w-4">
                                                        2
                                                    </td>
                                                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" />
                                                        <div className="pl-3">
                                                            <div className="text-base font-semibold">Neil Sims</div>
                                                        </div>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        152.000 VNĐ
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div>
                                                            <button className="text-gray-400 hover:text-red-500 ml-2">
                                                                <i className="material-icons-round text-base">delete_outline</i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </li>
                                        </ul>
                                    </div>
                                    <style dangerouslySetInnerHTML={{ __html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
                                </td>
                                <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="py-4 px-6">
                                    <div className="text-base font-semibold">0976819350</div>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" /> Chưa tiếp nhận
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <button className="text-gray-400 hover:text-red-500 ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </main>
        </div>
    )
}

export default Orders