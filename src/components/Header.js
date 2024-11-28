import React from 'react'
import Logo from './Logo'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
   <header className='h-16 shadow-md'  >
    <div className='h-full container mx-auto flex items-center px-5 justify-between'>
        <div className=''>
           <Logo w={80} h={60}/>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-4'>
            <input type ='text' placeholder='Search product here.....'className='w-full outline-none '/>
            <div className='text-lg min-w-[50px] h-8 bg-red-700 flex items-center justify-center rounded-r-full text-white '><IoIosSearch/></div>
        </div>

        <div>
            user icons and cards
        </div>

    </div>
   </header>
  )
}

export default Header
