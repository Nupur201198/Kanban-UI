import { Axios } from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import axiosClient from "../api"
import { VscEye, VscEyeClosed } from "react-icons/vsc";



function OtpForm({ pageStateFunc, userDetails }) {
    const [isFetching, setIsFetching] = useState(false)
    const [isError, setIsError] = useState({
        state: false,
        value: ""
    })

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        setIsFetching(true)
        const otp = Object.values(data).reduce((acc, val) => acc + val);
        try {
            const response = await axiosClient.get(
                "auth/verifysignin",
                {
                    params: {
                        email: userDetails.email,
                        otp: otp
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log(response.data)
            if (response.data.status === "success") {
                // set auth token here 
            }
        } catch (e) {
            setIsError(prev => ({ ...prev, state: true, value: e.message }))
        }
        finally {
            setTimeout(() => {
                setIsFetching(false)
                reset()
                setIsError(prev => ({ ...prev, state: false, value: "" }))
            }, 2000)
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
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Two Factor Authentication
                            </h1>
                            <p>Please complete the authentication by entering the code sent to <span className="font-bold">{userDetails.email}</span></p>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8" action="#">
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <input {...register("otp1", { required: true })} type="text" name="otp1" id="otp1" maxLength="1" pattern="[0-9]{1,5}" className=" text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>

                                    </div>
                                    <div>
                                        <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                                    </div>
                                    <div>
                                        <input {...register("otp2", { required: true })} type="text" name="otp2" id="otp2" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>

                                    </div>
                                    <div>
                                        <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                                    </div>
                                    <div>
                                        <input {...register("otp3", { required: true })} type="text" name="otp3" id="otp3" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>

                                    </div>
                                    <div>
                                        <hr className="w-2 h-1  my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                                    </div>
                                    <div>
                                        <input {...register("otp4", { required: true })} type="text" name="otp4" id="otp4" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>

                                    </div>
                                    <div>
                                        <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                                    </div>
                                    <div>
                                        <input {...register("otp5", { required: true })} type="text" name="otp5" id="otp5" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                    </div>
                                    <div>
                                        <hr className="w-2 h-1 my-4 bg-teal-600 rounded md:my-10 dark:bg-gray-700"></hr>
                                    </div>
                                    <div>
                                        <input {...register("otp6", { required: true })} type="text" name="otp6" id="otp6" maxLength="1" pattern="[0-9]{1,5}" className="text-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="" required=""></input>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <p className="text-sm">It may take a minute to receive your code. Didn't receive it yet? Resend Code</p>
                                    {
                                        isFetching ? <button disabled type="button" className="w-1/2 text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                            </svg>
                                            verifying
                                        </button> : <button type="submit" className="w-1/2 text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm  text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Verify</button>

                                    } 
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