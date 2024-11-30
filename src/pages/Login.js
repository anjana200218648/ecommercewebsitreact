import React, { useState } from 'react'
import loginicon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"

const Login = () => {
    const [showpassword,setpassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const handleOnChange =(e)=>{
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    console.log("data login",data)

  return (
    <section id='login'>
        <div className='mx-auto container p-4 '>
            <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginicon} alt='login item'/>   
                </div>

                <form className='pt-6' onSubmit={handleSubmit}>
                    <div className='grid p-2'>
                        <label>Email :   </label>
                        <div className='bg-slate-100 p-2'>
                        <input
                        type='email'
                         placeholder='enter email' 
                         name='email'
                         value={data.email}
                         onChange={handleOnChange}
                         className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                      
                    <div className='p-2'>
                        <label>Password :   </label>
                       <div className='bg-slate-100 flex p-2'>
                       <input type={showpassword? "text":"password"}
                        placeholder='enter password'
                        name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        className='w-full h-full outline-none  bg-transparent'/>
                       <div className='cursor-pointer text-xl'onClick={()=>setpassword((preve)=>!preve)}>
                        <span>
                            {
                                showpassword ?(
                                    <FaEyeSlash/>
                                )
                                :
                                (
                                    <FaEye/>
                                )
                            }
                        </span>
                       </div>
                       </div>
                       <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-700 p-2'>
                             Forgot Password?
                       </Link>
                    </div>

                    <button className='bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Login </button>
                </form>

                <p className='my-6 px-2'>You Don't Have Account?: <Link to={"/sign-up"} className='hover:underline hover:text-red-700 text-red-500'>Sign Up</Link></p>

            </div>

        </div>

    </section>
  )
}

export default Login
