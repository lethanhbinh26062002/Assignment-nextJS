import React from 'react'

const BlogPage = () => {
    return (
        <div>
            <div className='text-center mb-[5rem]'>
                <h1 className='text-[3rem]'>The Blog</h1>
                <p className='w-[60%] py-3 mx-auto text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti quaerat nostrum perspiciatis at tempora nobis doloremque esse voluptatum. Nemo minus dolor similique porro odit quibusdam aspernatur reprehenderit suscipit eos?</p>
            </div>
            <div>
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24"><div><a href="/blog/this-is-latest-post/"><img src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" /></a><div className="bg-gray-50 p-8"><div className="text-xs text-gray-600 uppercase font-semibold">23 Sep 2020</div><h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">This is my third &amp; latest post</h2><p className="mt-4 max-w-md">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p><a href="/blog/this-is-latest-post/" className="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg></a></div></div><div><a href="/blog/my-third-big-post/"><img src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" /></a><div className="bg-gray-50 p-8"><div className="text-xs text-gray-600 uppercase font-semibold">03 Sep 2020</div><h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">This is my second post</h2><p className="mt-4 max-w-md">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p><a href="/blog/my-third-big-post/" className="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg></a></div></div><div><a href="/blog/my-first-post/"><img src="https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" /></a><div className="bg-gray-50 p-8"><div className="text-xs text-gray-600 uppercase font-semibold">01 Sep 2020</div><h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">This is my first post</h2><p className="mt-4 max-w-md">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p><a href="/blog/my-first-post/" className="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg></a></div></div></div>
            </div>

        </div>
    )
}

export default BlogPage