import { Axios } from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import axiosClient from "../api"
import { VscEye, VscEyeClosed } from "react-icons/vsc";



function LoginForm(props) {
    //console.log(props.data)
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    const { register,formState: { errors }, handleSubmit } = useForm()
    const onSubmit = async (formData) => {
        try{
        const {data,status} = await axiosClient.post('auth/signin',JSON.stringify(formData),{
            "headers":{"Content-Type":"application/json"}
        })
        console.log(data,status)
        if (status === 200) {
            props.pageStateFunc(1)
        props.userFunc(formData)
        }
    }
    catch{
        console.log("time pass")
    }
        


    }
    return (
      <>
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
                      <input {...register("email",{required: true})} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
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
                  <button type = "submit" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Sign in</button>
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