import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { useRouter } from 'next/router'
import useSWR from 'swr'

type DetailProps = {
    product: any
}

const Detail = () => {
    const router = useRouter()
    const {id} = router.query
    const {data, error} =  useSWR(id ? `/products/${id}` : <div>error</div>)
    if (!data) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    
    return (
        <div>
            <main id="main" className="container">
                <div className="bg-white bg-center text-2xl md:text-[38px] uppercase text-pink-400 text-center mb-6 py-10">
                    {data.name}
                </div>

                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-[40%] flex">
                            <div className="flex flex-wrap md:flex-nowrap gap-3 mb-4">
                                <div className="w-full lg:w-[80%]">
                                    <img src={data.image} className="p-4 border border-solid border-gray-900 object-cover" />
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
                                    <span className="text-base lg:text-2xl text-pink-400 text-center font-bold">
                                        {data.price}
                                    </span>
                                    {/* <a><span className="opacity-80">
                                        Có 0 phản hồi cho sản phẩm này
                                    </span></a> */}
                                    <span>{data.description}</span>
                                </div>
                            </div>
                            <div className="border-y border-solid border-gray-300 py-4">
                                <button className="bg-pink-300 text-white p-4 rounded-sm">
                                    <i className="fa-solid fa-cart-shopping" />
                                    <span className="uppercase">Đặt hàng nhanh</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-b border-gray-300 border-solid mb-2">
                        <div>
                            <button className="bg-gray-100 py-2 px-3 rounded-tl-xl rounded-tr-xl uppercase">
                                Thông tin sản phẩm
                            </button>
                        </div>
                        <div>
                            <button className="bg-gray-300 py-2 px-3 rounded-tl-xl rounded-tr-xl uppercase">
                                Bình luận(0)
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 pb-32">
                        <i className="fa-solid fa-star start" />
                        <i className="fa-solid fa-star start" />
                        <i className="fa-solid fa-star start" />
                        <i className="fa-solid fa-star start" />
                        <i className="fa-regular fa-star" />
                        <span>4 |</span>
                        <i className="fa-solid fa-star" />
                        <span>444</span>
                    </div>
                    <h3 className="text-lg font-bold border-b border-solid border-gray-300 mb-8">
                        Sản phẩm khác
                    </h3>
                    {/* <Swiper
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
                    </Swiper> */}
                </div>
            </main>
        </div>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const data = await (await fetch(` http://localhost:3002/products`)).json()
//     const paths = data.map((item:any) => {
//         return { params: { id: item.id } }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps: GetStaticProps<DetailProps> = async (
//     context: GetStaticPropsContext
// ) => {
//     //call api
//     const data = await (await fetch(` http://localhost:3002/products/${context.params?.id}`)).json()
//     if (!data) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props:{
//             product:data
//         }
//     }
// }

export default Detail