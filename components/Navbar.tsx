"use client"
import React, { use, useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"; 


const Navbar = () => {
  const { data: session } = useSession();
  const [ showdropdown ,setShowdropdown] = useState(false);
   
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16 '>
      <div >
        <Link className="logo font-bold text-lg" href={"/"}>
          FuelTheGrind
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-4' >
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>   
      </ul> */}


      <div className='relative'>

        {session ? (
            <>
              <button onClick={() => setShowdropdown(!showdropdown)} id="dropdownDefaultButton"  data-dropdown-toggle="dropdown" className="text-white bg-[#33e] hover:bg-[#33g] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#33e] dark:hover:bg-[#33g] dark:focus:ring-blue-800" type="button">Welcome {session.user?.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
              </button>
              <div id="/dashboard" className={`z-10 ${showdropdown ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 left-[6.3vh]`}>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 py-2" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                    </li>
                    <li>
                      <Link href="#" onClick={()=> signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                    </li>
                  </ul>
              </div>            
            </>
        ): (
          <Link href={"/login"}>
          <button type="button" className={`text-white bg-[#33e] hover:bg-[#33g] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#33e] dark:hover:bg-[#33g] dark:focus:ring-blue-800 `}>LogIn</button>
        </Link>
        )}
      

      </div>
      
    </nav>

    
  )
}

export default Navbar;
