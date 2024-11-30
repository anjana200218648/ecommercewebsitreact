import React from 'react'
import loginicon from '../assest/signin.gif'

const Login = () => {
  return (
    <section id='login'>
        <div className='max-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-md max-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginicon} alt='login item'/>   
                </div>

                <form>
                    <div className='grid'>
                        <label>Email :   </label>
                        <div>
                        <input type='email' placeholder='enter email' className='w-full h-full outline-none'/>
                        </div>
                    </div>

                    <div>
                        <label>Password :   </label>
                       <div>
                       <input type='password' placeholder='enter password' className='w-full h-full outline-none'/>
                       </div>
                    </div>

                    <button>Login </button>
                </form>

            </div>

        </div>

    </section>
  )
}

export default Login
