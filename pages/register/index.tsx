import Router from 'next/router';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signup } from '../../api/auth';
import { useRegister } from '../../hooks/useRegister';
import { registerType } from '../../models/register';
type Props = {
  // name: string,
  // address: string,
  // email: string,
  // password: string
}
  // const signUp = () => {
  //   // const router = useRouter()
  //   const {register,handleSubmit,formState:{errors}} = useForm<Props>();
  //   const onSubmit:SubmitHandler<Props> =  async(user)=>{
  //       const {data} = await signup(user)
  //         if (data){
  //           Router.push('/login');
  //         }
  //   }

  const register = (props: Props) => {
    const {register,handleSubmit,formState:errors} = useForm<registerType>();
    const {signup} = useRegister();
    useEffect(() => {
        (async () => {
            const {data} = await signup();
        })()
    }, [])
    const onSubmit:SubmitHandler<registerType> =  async(data)=>{
        await signup(data)
        Router.push('/login');
    }
  
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: "\n/*remove custom style*/\n  .circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n  .circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n    background: rgba(254, 252, 191,0.5);\n    animation: animate 25s linear infinite;\n    bottom: -150px;  \n}\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n \n \n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n \n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n \n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n \n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n \n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n \n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n \n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n \n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n \n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n  @keyframes animate {\n \n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n \n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n \n}\n" }} />
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end p-10 pr-20 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1472841298542-80b08039a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'}}>
            <div className="absolute bg-gradient-to-b from-pink-600 to-pink-500 opacity-75 inset-0 z-0" />
            <div className="w-full  max-w-lg z-10 mb-20">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
              <div className="sm:text-sm xl:text-md text-gray-100 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
                text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                has?</div>
            </div>
            {/*-remove custom style*/}
            <ul className="circles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="mb-10">
                <h4 className="font-semibold text-2xl text-gray-800">REGISTRATION FORM </h4>
                <p className="text-gray-500">Please register your account.</p>
              </div>
              <div className="flex">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <button type="submit" className="w-full flex items-center justify-center bg-red-500  hover:bg-red-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign up with 
                    <svg className="w-4 ml-2" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z" /></svg>
                  </button>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <button type="submit" className="w-full flex items-center justify-center bg-blue-600  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign up with 
                    <svg className="w-4 ml-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22" /></svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-200" />
                <span className="text-gray-300 font-normal">or continue with</span>
                <span className="h-px w-16 bg-gray-200" />
              </div>
              <form className="w-full max-w-lg"  onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                      Name
                    </label>
                    <input  {...register('name',{required:true})} className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 border border-gray-200 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" type="text" placeholder="Name" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address-name">
                      Address
                    </label>
                    <input  {...register('address',{required:true})}  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" type="text" placeholder="Address" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                      Email
                    </label>
                    <input  {...register('email',{required:true})}  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" type="email" placeholder="email@gmail.com" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input  {...register('password',{required:true})}  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" type="password" placeholder="******************" />
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-pink-400 hover:text-pink-400">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center bg-pink-400  hover:bg-pink-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
              <div className="pt-6 text-center text-gray-400 text-xs">
                <span>
                  Copyright © Team 9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default register