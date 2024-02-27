import { useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { VscEye, VscEyeClosed } from "react-icons/vsc";


function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmPassword] = useState(false)

  const { register, formState: { errors }, watch, handleSubmit } = useForm()
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="w-full">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input {...register("firstName", { required: true })} type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="John" required=""></input>
                    {errors.firstName?.type === "required" && (
                      <p role="alert">First Name is required</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input {...register("lastName", { required: true })} type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="John" required=""></input>
                    {errors.lastName?.type === "required" && (
                      <p role="alert">Last Name is required</p>
                    )}
                  </div>
                </div>
                <div >
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

                <div>
                  <label htmlFor="confirmPassword" className="select-none block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <div className="flex focus-within:ring-1 border rounded-lg border-gray-300 focus-within:ring-teal-600 focus-within:border-teal-600">
                    <input {...register("confirmPassword", {
                      required: true, validate: value =>
                        value === password.current || "The passwords do not match"
                    })} type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="outline-none border-0 focus:ring-0 bg-gray-50 text-gray-900 sm:text-sm rounded-l-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    <span onClick={() => { setConfirmPassword(prev => (!prev)) }} className="select-none inline-flex items-center px-3 text-sm bg-gray-50 text-gray-900 sm:text-sm rounded-r-lg  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                      {showConfirmPassword ? <VscEye size={20}></VscEye> : <VscEyeClosed size={20}></VscEyeClosed>}
                    </span>
                  </div>
                  {errors.confirmPassword?.type === "required" && (
                    <p role="alert">Confirm Password is required</p>
                  )}
                  {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" required=""></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-teal-600 hover:underline dark:text-teal-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-teal-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUpPage