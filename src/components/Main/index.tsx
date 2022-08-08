import React from 'react'

type Props = {}

const Main = (props: Props) => {
    
  return (
    
    <main className='my-4'>
  <div className="relative w-full">
  <div className="relative bg-yellow-50">
    <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
      <div className="flex items-center flex-wrap px-2 md:px-0">
        <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
          <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">In books lies the soul of the whole past time</h1>
          
          <p className="mt-8 text-gray-700 lg:w-10/12"> Let us tenderly and kindly cherish, therefore, the means of knowledge. Let us dare to read, think, speak, and write. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
        </div>
        <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
          <img src="https://pngimage.net/wp-content/uploads/2018/05/books-tumblr-png-5.png" className="relative" alt="food illustration" loading="lazy" width={3000} height={3000} />
        </div>
      </div>
    </div>
  </div>
</div>

  <section className="container mx-auto pt-12 bg-white">
    {/* title */}
    <div className="relative flex items-end font-bold">
      <h2 className="text-2xl">Browse by Category</h2>
      <a  className="ml-10 flex items-center text-gray-400">
        <span className="text-sm">All Categories</span>
        <svg className="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" /></svg>
      </a>
      <div className="ml-auto flex">
        <a  className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
          <svg className="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" /></svg>
        </a>
        <a  className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
          <svg className="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" /></svg>
        </a>
      </div>
    </div>
    {/* cards */}
    <div className="mt-10">
      <ul className="-m-3.5 flex">
        <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
          <img className="max-h-20" src="https://i.ibb.co/Smq7sZK/2021-11-07-13h26-50.png"  />
          <span className="font-semibold">Fruits &amp; Vegetables</span>
        </li>
        <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
          <img className="max-h-20" src="https://i.ibb.co/PwYJkQs/2021-11-07-13h39-41.png"  />
          <span className="font-semibold">Breads &amp; Sweets</span>
        </li>
        <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
          <img className="max-h-20" src="https://i.ibb.co/Hx3vbFx/2021-11-07-13h39-52.png"  />
          <span className="font-semibold">Frozen Seafoods</span>
        </li>
        <li className="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
          <img className="max-h-20" src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png"  />
          <span className="font-semibold">Raw Meats</span>
        </li>
      </ul>
    </div>
  </section>
  <section className="container mx-auto pt-12">
    
    <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
  <div className="relative">
    <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"> Level Up Your Designs</h2>
    <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We've crafted a beautiful user experience that your visitors will love. </p>
  </div>
  <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
      <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png"  />
    </div>
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
      <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p>
      <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
      <p className="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.</p>
    </div>
  </div>
  <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
      <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png"  />
    </div>
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
      <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
      <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Conversions</h3>
      <p className="mt-5 text-lg text-gray-700 text md:text-left">Backed by data, these templates have been crafted for ultimate optimization. Now, converting your visitors into customers is easier than ever before.</p>
    </div>
  </div>
  <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
      <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"  />
    </div>
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
      <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
      <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
      <p className="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
    </div>
  </div>
</div>
<div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
  <div className="container xl:max-w-6xl mx-auto px-4">
    {/* section header */}
    <header className="text-center mx-auto mb-12">
      <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
        <span className="font-light">Our</span> Team
      </h2>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style={{margin: '0 auto', height: 35}} xmlSpace="preserve">
        <circle cx="50.1" cy="30.4" r={5} className="stroke-primary" style={{fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10}} />
        <line x1="55.1" y1="30.4" x2={100} y2="30.4" className="stroke-primary" style={{strokeWidth: 2, strokeMiterlimit: 10}} />
        <line x1="45.1" y1="30.4" x2={0} y2="30.4" className="stroke-primary" style={{strokeWidth: 2, strokeMiterlimit: 10}} />
      </svg>
    </header>
    {/* end section header */}
    {/* row */}
    <div className="flex flex-wrap flex-row -mx-4 justify-center">
      <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp'}}>
          {/* team block */}
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">BinhLT</p>
            <p className="text-gray-500 leading-relaxed font-light">Leader</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">ThamCTH</p>
            <p className="text-gray-500 leading-relaxed font-light">Member</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">LongKT</p>
            <p className="text-gray-500 leading-relaxed font-light">Member</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
      <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        {/* team block */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="relative overflow-hidden px-6">
            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
          </div>
          <div className="pt-6 text-center">
            <p className="text-lg leading-normal font-bold mb-1">LinhLTP</p>
            <p className="text-gray-500 leading-relaxed font-light">Member</p>
            {/* social icon */}
            <div className="mt-2 mb-5 space-x-2">
              <a className="hover:text-blue-700" aria-label="Twitter link" href="#">
                {/* <i class="fab fa-twitter text-twitter"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Facebook link" href="#">
                {/* <i class="fab fa-facebook text-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Instagram link" href="#">
                {/* <i class="fab fa-instagram text-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                  <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                  <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                </svg>
              </a>
              <a className="hover:text-blue-700" aria-label="Linkedin link" href="#">
                {/* <i class="fab fa-linkedin text-linkedin"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end team block */}
      </div>
    </div>
    {/* end row */}
  </div>
</div>

  </section>
</main>

  )
}

export default Main