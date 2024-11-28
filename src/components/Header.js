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
        <div className='flex items-center'>
            <input type ='text' placeholder='Search product here.....'/>
            <div className='text-lg'><IoIosSearch/></div>
        </div>

        <div>
            user icons and cards
        </div>

    </div>
   </header>
  )
}

export default Header
