import Router from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signin } from '../../api/auth';
type Props = {
  email: string,
  password: string,
  address: string,
  name: string
}

const login = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<Props>();
  // const navigate = useNavigate()
  const onSubmit: SubmitHandler<Props> = async (user) => {
    const {data} = await signin(user)
    console.log(data)
    if(data)
    localStorage.setItem("user", JSON.stringify(user))
    Router.push('/')
  }
  return (
    <div>
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img className="mx-auto w-48" src="https://png.pngtree.com/png-clipart/20190909/ourlarge/pngtree-pink-english-watercolor-wind-wedding-logo-png-image_1720784.jpg" alt="logo" />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1 text-pink-400">We are The Lotus Team</h4>
                      </div>
                      <form  onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4 text-pink-300">Please login to your account</p>
                        <div className="mb-4">
                          <input {...register('email',{required:true})} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                          <input {...register('password',{required:true})} type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button className="inline-block px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-white hover:bg-pink-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">
                            Sign-in
                          </button>
                          <a className="text-gray-300 hover:text-pink-700" href="#!">Forgot password?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2 text-pink-200"> Don't have an account?</p>
                          <a href='/register' className="inline-block px-6 py-2 border-2 border-pink-400 text-pink-400 font-medium text-xs leading-tight uppercase rounded hover:bg-pink-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            Sign-up
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none" >
                    {/* <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div> */}
                    <img src="https://assets.materialup.com/uploads/08479c66-7730-404b-aedd-235deb68180b/preview.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default login