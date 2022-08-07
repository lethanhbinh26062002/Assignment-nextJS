import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useForm } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'

const Detail = () => {
    const {createCartItem} = useCart();
    const router = useRouter()
    const { _id } = router.query
    const { data, error } = useSWR(_id ? `/products/${_id}` : null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (cart:any) =>{
        const userLocal =  JSON.parse(localStorage.getItem('UserLocal') || '{}');
        const user = userLocal._id
        const quantity = cart.quantity
        const product = _id
        const new_data = ({product,user,quantity})
        console.log(new_data);
        await createCartItem(new_data);
        
    }
    if (!data) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div className='w-[90%] mx-auto'>
            <Header />
            <main id="main" className="container">
                <div className="bg-white bg-center text-2xl md:text-[38px] uppercase text-red-400 text-center mb-6 py-10">
                    {data.name}
                </div>

                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-[40%] flex">
                            <div className="flex flex-wrap md:flex-nowrap gap-3 mb-4">
                                <div className="w-full lg:w-[80%]">
                                    <img src={data.image} className="p-4 border border-solid border-gray-900 object-cover h-96" />
                                </div>
                                <div className="w-[20%]">
                                    <img src={data.image} className="p-2 border border-solid border-gray-900 object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%]">
                            <div className="mb-10">
                                <h3 className="text-xl lg:text-3xl mb-2">
                                    {data.name}
                                </h3>
                                <div className="flex items-center gap-8">
                                    <span className="text-base lg:text-2xl text-red-400 text-center font-bold">
                                        {data.price} VNĐ
                                    </span>
                                    {/* <a><span className="opacity-80">
                                        Có 0 phản hồi cho sản phẩm này
                                    </span></a> */}
                                </div>
                                <span>
                                    {data.description}
                                </span>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="border-y border-solid border-gray-300 py-4 grid grid-cols-4 gap-2">
                                    <div className='py-3'>
                                        <div className="relative flex flex-row h-8 ">
                                            <input {...register("quantity")} type="number" min={1} defaultValue={1} className="w-44 rounded text-center text-gray-700 border -2 border-pink-300 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black" />
                                        </div>
                                    </div>
                                    <button className="bg-red-300 text-white p-4 rounded-sm hover:bg-gray-400">
                                        <i className="fa-solid fa-cart-shopping" />
                                        <span className="uppercase">Đặt hàng nhanh</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='font-bold border-b border-solid border-gray-200'>

                    </div>
                    <div className="border-solid mb-2 py-1 mx-10">
                        <textarea className="border-stone-900" name="" id="" cols={100} rows={10}></textarea>
                        <div>
                            <button className="bg-pink-300 text-white py-2 px-3 rounded uppercase hover:bg-gray-400">
                                Bình luận
                            </button>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold border-b border-solid border-gray-200 mb-8">
                        Sản phẩm khác
                    </h3>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://shopsonmoi.vn/assets/uploads/files/76479-screen-shot-2019-03-24-at-11.31.35-pm.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center'><strong>Son thỏi 3CE Slim Velvet Lip Color</strong></p>
                            </div>
                            <div>
                                <p className='text-center'><strong>239.000đ</strong></p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default Detail