import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    // <>
    //   <header>
    //     <div className='containers flexs'>
    //       <div className="h-[30px]">
    //         <img src='./images/logo.png' alt=''  />
    //       </div>
    //       <div className='nav'>
    //         <ul className={navList ? "small" : "flexs"}>
    //           {nav.map((list, index) => (
    //             <li key={index}>
    //               <Link to={list.path}>{list.text}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className='button flexs'>
    //         <h4>
    //           <span>2</span> My List
    //         </h4>
    //         <button className='btn1'>
    //           <i className='fa fa-sign-out'></i> Sign In
    //         </button>
    //       </div>

    //       <div className='toggle'>
    //         <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
    //       </div>
    //     </div>
    //   </header>
    // </>
          <nav className="bg-[#0B1A4A] z-10 fixed top-0 flex border-gray-200 px-2 sm:px-4 rounde w-full">
          <div className="w-[10%] flex-wrap items-center justify-center sm:hidden md:block">
          <a href="https://flowbite.com/" className="flex items-center">
               <img src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1563x1024.png" className="h-full w-20 mt-1 ml-32 mb-auto hidden sm:block" alt="Flowbite Logo" />
             </a>
          </div>
          <div className="flex w-[100%] flex-wrap items-center md:justify-center sm:justify-end sm:pr-10 justify-end lg:justify-end mx-auto">
             <button data-collapse-toggle="navbar-default" type="button" className="z-10 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
             </button>
             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
               <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#0B1A4A] md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:border-gray-700">
                 {nav.map((list, index) => (
                    <li key={index}>
                      <Link to={list.path}>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 uppercase dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{list.text}</a>
                      </Link>                  
                  </li>
                 ))}                
               </ul>
             </div>
           </div>
         </nav>
  )
}

export default Header
