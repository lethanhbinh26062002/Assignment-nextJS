import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const index = (props: Props) => {
  return (
    <div>
    <Header></Header>
        <div className="py-16 bg-white">
        </div>
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" />
            </div>
            <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
            </div>
        </div>
        </div>
    <section className="h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
            {/* Card 1 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1621352404112-58e2468993a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1633329712176-4751f52ccc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt />
            <div className="p-3">
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
                </p>
                <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
            </div>
        </div>
        </section>
    </div>

  )
}

export default index