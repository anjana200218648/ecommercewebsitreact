import React, { useState } from 'react'
import loginicon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {
  const [showpassword,setpassword] = useState(false)
  const [showConfirmpassword,setShowConfirmpassword]=useState(false)

  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmpassword : "",
      profilepic : "",
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
  const handleuploadpic =async(e) =>{
    const file = e.target.files[0]
    const imagepic = await imageTobase64(file)
  

   setData((preve)=>{
    return{
      ...preve,
      profilepic :imagepic
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
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
               <div>
                   <img src={data.profilepic ||loginicon} alt='login item'/>
                </div>
                <form>
                  <label>
                  <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer py-4 text-center absolute bottom-0 w-full'>
                  Upload Photo
                  </div> 
                    <input type='file'className='hidden' onChange={handleuploadpic}/>
                  </label>
                
                  </form>  
            </div>

            <form className='pt-6' onSubmit={handleSubmit}>

            <div className='grid p-2'>
                    <label>Name :   </label>
                    <div className='bg-slate-100 p-2'>
                    <input
                    type='text'
                     placeholder='Enter Your Name' 
                     name='name'
                     required
                     value={data.name}
                     onChange={handleOnChange}
                     className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='grid p-2'>
                    <label>Email :   </label>
                    <div className='bg-slate-100 p-2'>
                    <input
                    type='email'
                     placeholder='enter email' 
                     name='email'
                     required
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
                    required
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

                </div>
                 
                <div className='p-2'>
                    <label>Confirm Password :   </label>
                   <div className='bg-slate-100 flex p-2'>
                   <input type={showConfirmpassword? "text":"password"}
                    placeholder='enter password again'
                    name='confirmpassword'
                    required
                    value={data.confirmpassword}
                    onChange={handleOnChange}
                    className='w-full h-full outline-none  bg-transparent'/>
                   <div className='cursor-pointer text-xl'onClick={()=>setShowConfirmpassword((preve)=>!preve)}>
                    <span>
                        {
                            showConfirmpassword?(
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
                                    
                <button className='bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Sign Up </button>
            </form>

            <p className='my-6 px-2'>Already Have Account?: <Link to={"/login"} className='hover:underline hover:text-red-700 text-red-500'>Login</Link></p>

        </div>

    </div>

</section>
  )
}

export default SignUp
