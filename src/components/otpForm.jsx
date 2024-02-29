import { Axios } from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import axiosClient from "../api"
import { VscEye, VscEyeClosed } from "react-icons/vsc";



function OtpForm(props) {

    const { register,formState: { errors }, handleSubmit } = useForm()
      
        const onSubmit = async (formData) => { 
        const values = Object.values(formData);
        const sum = values.reduce((acc, val) => acc + val);
        const responseData = {"email" : props.userDetails.email , "otp" : sum}
        const {data,status} = await axiosClient.post('auth/verifysignin',JSON.stringify(responseData),{
                "headers":{"Content-Type":"application/json"}
            })
            console.log(data,status)
    } 

    return (
      <>
        <div className="bg-gray-50 dark:bg-gray-900 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Authenticate Your Account
              </h1>
              <p>Please complete the authentication by entering the code sent to {props.userDetails.email}</p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8" action="#">
                  <div className = "flex items-center space-x-2">
                  <div>
                      <input {...register("otp1",{required: true})} type="text" name="otp1" id="otp1" maxLength="1" pattern="[0-9]{1,5}" className=" text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                   
                  </div>
                  <div>
                  <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                  </div>
                  <div>
                      <input {...register("otp2",{required: true})} type="text" name="otp2" id="otp2" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                        
                  </div>
                  <div>
                  <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                  </div>
                  <div>
                      <input {...register("otp3",{required: true})} type="text" name="otp3" id="otp3" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                        
                  </div>
                  <div>
                  <hr className="w-2 h-1  my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                  </div>
                  <div>
                      <input {...register("otp4",{required: true})} type="text" name="otp4" id="otp4" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                        
                  </div>
                  <div>
                  <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                  </div>
                  <div>
                      <input {...register("otp5",{required: true})} type="text" name="otp5" id="otp5" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                     
                  </div>
                  <div>
                  <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                  </div>
                  <div>
                      <input {...register("otp6",{required: true})} type="text" name="otp6" id="otp6" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                        
                  </div>
                  </div>
                  <div className = "flex justify-end">
                    <p>It may take a minute to receive your code. Didn't receive it yet?Resend Code</p>
                  <button type = "submit" className=" text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Send</button>
              </div>
              </form>
          </div>
      </div>
  </div>
</div>
      </>
    )
  }
  
  export default OtpForm