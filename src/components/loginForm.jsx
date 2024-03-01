import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axiosClient from "../api"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useQuery } from "@tanstack/react-query";



function LoginForm({pageStateFunc,userFunc}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState({
    state: false,
    value: ""
  })

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: { email: "", password: "" }
  })

  const onSubmit = async (data) => {
    setIsFetching(true)
    try {
      const response = await axiosClient.post(
        "auth/signin",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      // write your logic here
      if(response.data.status === "success"){
        userFunc({email:data.email})
        pageStateFunc(1)
      }
    } catch(e) {
      setIsError(prev =>({...prev,state:true,value:e.message}))
    }
    finally {
      setIsFetching(false)
      reset()
      setTimeout(()=>{
        setIsError(prev =>({...prev,state:false,value:""}))
      },3000)
    }
  }

  return (
    <>
{  isError.state && <div id="toast-bottom-right" className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
        <div className="text-sm font-normal text-red-600">{isError.value}. Try again Later</div>
      </div>}
      <div className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="name@company.com" required=""></input>
                  {errors.email?.type === "required" && (
                    <p role="alert">email is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="select-none block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <div className="flex focus-within:ring-1 border rounded-lg border-gray-300 focus-within:ring-teal-600 focus-within:border-teal-600">
                    <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="outline-none border-0 focus:ring-0 bg-gray-50 text-gray-900 sm:text-sm rounded-l-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    <span onClick={() => { setShowPassword(prev => (!prev)) }} className="select-none inline-flex items-center px-3 text-sm bg-gray-50 text-gray-900 sm:text-sm rounded-r-lg  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                      {showPassword ? <VscEye size={20}></VscEye> : <VscEyeClosed size={20}></VscEyeClosed>}
                    </span>
                  </div>
                  {errors.password?.type === "required" && (
                    <p role="alert">Password is required</p>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</a>
                </div>
                {
                  isFetching ? <button disabled type="button" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Loading...
                  </button> : <button type="submit" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Sign in</button>

                }
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-teal-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm