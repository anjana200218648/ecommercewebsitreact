import React, { useState } from 'react'
import loginicon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showpassword,setpassword] = useState(false)
  return (
    <section id='login'>
        <div className='max-auto container p-4 '>
            <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginicon} alt='login item'/>   
                </div>

                <form>
                    <div className='grid'>
                        <label>Email :   </label>
                        <div className='bg-slate-100 p-2'>
                        <input type='email' placeholder='enter email' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div>
                        <label>Password :   </label>
                       <div className='bg-slate-100 flex p-2'>
                       <input type={showpassword? "text":"password"} placeholder='enter password' className='w-full h-full outline-none  bg-transparent'/>
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
                    </div>

                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px]'>Login </button>
                </form>

            </div>

        </div>

    </section>
  )
}

export default Login
