"use client"
import React, { use } from 'react'
import Link from 'next/link'


const Navbar = () => {

  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16 '>
      <div className="logo font-bold text-lg">FuelTheGrind</div>
      {/* <ul className='flex justify-between gap-4' >
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>   
      </ul> */}


      <div >
        <Link href={"/login"}>
          <button type="button" className="text-white bg-[#33e] hover:bg-[#33g] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#33e] dark:hover:bg-[#33g] dark:focus:ring-blue-800">Login</button>
        </Link>

      </div>
      
    </nav>

    
  )
}

export default Navbar;
