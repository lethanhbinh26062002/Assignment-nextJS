import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useCart } from '../../hooks/useCart';

type Props = {}

const Cart = (props: Props) => {

    const { data: cart, error } = useCart();
    const [cartItem, setCartItem] = useState<any[]>([]);
    const arr: React.SetStateAction<any[]> = []
    cart?.map(async (item: any) => {
        const user = JSON.parse(localStorage.getItem('UserLocal') || '{}');
        if (item.user === user._id && item.status === 0) {
            const newcart = await item
            arr.push(newcart)
            setCartItem(arr)
        }
    })

    if (error) return <div>False : {error}</div>
    if (!cart) return <div>Loading...</div>
    return (
        <div className='w-[90%] mx-auto'>
            <style dangerouslySetInnerHTML={{ __html: "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')" }} />
            <style dangerouslySetInnerHTML={{ __html: "\n/*\nmodule.exports = {\n    plugins: [require('@tailwindcss/forms'),]\n};\n*/\n.form-radio {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  border-radius: 100%;\n  border-width: 2px;\n}\n\n.form-radio:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@media not print {\n  .form-radio::-ms-check {\n    border-width: 1px;\n    color: transparent;\n    background: inherit;\n    border-color: inherit;\n    border-radius: inherit;\n  }\n}\n\n.form-radio:focus {\n  outline: none;\n}\n\n.form-select {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e\");\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  background-repeat: no-repeat;\n  padding-top: 0.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  background-position: right 0.5rem center;\n  background-size: 1.5em 1.5em;\n}\n\n.form-select::-ms-expand {\n  color: #a0aec0;\n  border: none;\n}\n\n@media not print {\n  .form-select::-ms-expand {\n    display: none;\n  }\n}\n\n@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {\n  .form-select {\n    padding-right: 0.75rem;\n  }\n}\n" }} />
            <Header />
            <div className="min-w-screen min-h-screen bg-gray-50 py-5">
                <div className="px-5">
                    <div className="mb-2">

                    </div>
                    <div className="mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Cart</h1>
                    </div>
                </div>
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                    <div className="w-full">
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-7/12 lg:pr-10">
                                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                    {cartItem?.map((cart: any) =>
                                        <div key={cart._id} className="w-full flex items-center">
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-semibold uppercase text-gray-600"></h6>
                                                <p className="text-gray-400">{cart.quantity}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-600 text-xl">$210</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <div className="-mx-2 flex items-end justify-end">
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Subtotal</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">$190.91</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Taxes (GST)</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">$19.09</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Total</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold text-gray-400 text-sm">AUD</span> <span className="font-semibold">$210.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-5/12">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Contact</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" value="Lê Thanh Bình" type="text" />
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Billing Address</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" value="123 George Street, Sydney, NSW 2000 Australia" type="text" />
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Phone number</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" value="0346759178" type="text" />
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Order code</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <span className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors">14b3f281503f</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                    <div className="w-full p-3 border-b border-gray-200">
                                        <div className="mb-5">
                                            <label htmlFor="type1" className="flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" />
                                            </label>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="type1" className="flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                                                <span className="text-gray-600 font-semibold ml-3">Thanh toán khi nhận hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1" />Orders Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12" rel="noreferrer">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Cart