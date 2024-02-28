import { Axios } from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import axiosClient from "../api"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import OtpForm from "../components/otpForm";
import LoginForm from "../components/loginForm";



function LoginPage() {
    const [pageState,setpageState] = useState(0)
    const [user,setUser] = useState({})

    const handlePageState = (data) =>{
        setpageState(data)
    }

    const handleUserDetail = (data)=>{
        setUser({...data})
    }
    return (
      <>
      {pageState === 0 && <LoginForm  pageStateFunc = {handlePageState} userFunc = {handleUserDetail} ></LoginForm>}
        {pageState === 1 && <OtpForm pageStateFunc = {handlePageState} userDetails = {user} ></OtpForm>}

      </>
    )
  }
  
  export default LoginPage