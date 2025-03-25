import Logo1 from '../assets/logo1.png'
import {Link} from 'react-router-dom';
import Menu from './Menu';
import { TbWorld } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect} from 'react';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
      const toggleDropdown = () => {
        setIsOpen(!isOpen)
      }
    
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, []);
    
      
      const handleClickOutside = () => {
          setIsOpen(false)
      }
    
    
  return (
    <>
        <section className="max-w-[1440px] w-full container bg-black text-white py-4">
       <div className='flex items-center justify-center gap-4'>
       <h1 className='text-base md:text-xl font-semibold'>New user? Join now and <span className='text-yellow-400'>get $2</span>starter gift with code get2!</h1>
       <Link to={""} ><button className='px-4 py-1 border-none bg-yellow-500 rounded-lg text-black cursor-pointer hover:bg-yellow-400'>Download</button></Link>
       </div>
      </section>

    <section className='max-w-[1440px] w-full py-6 lg-py-8 container border-2 border-gray-200'>
    <div className='flex items-center justify-between gap-x-6'>

     <div>
        <Link to={" "}><img src={Logo1} width={200} height={100}/></Link>
    </div>
                {/* Menu Section Start */}
    <div className='hidden md:block'>
        <ul className='flex items-center relative z-40'>
        <Link to={"/download"}><li className='inline-block px-2 text-base font-semibold'>Download</li></Link> 
        <Link to={"/referafriend"}><li className='inline-block px-2 text-base font-semibold'>Refer a Friend</li></Link>    
        <Link to={"/aboutus"}><li className='inline-block px-2 text-base font-semibold'>About Us</li></Link>    
        <Link to={"/blog"}><li className='inline-block px-2 text-base font-semibold'>Blog</li></Link>    
   
        </ul>
 </div>
 <Menu/>
 {/* Menu Section End */}
  {/* Icons Section Start */}
<div className="hidden md:relative md:flex md:items-center gap-x-2 md:z-40" onClick={toggleDropdown}>
            <TbWorld className='text-[20px]'/>
            <button className="inline-flex justify-center text-sm">En</button>
            <FaAngleDown className=''/>
        {isOpen && (<div className="absolute left-0 w-32 mt-7 z-50 h-1/2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

          <div className="py-1 bg-white">
            <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Item 1 clicked')
                setIsOpen(false)
              }}
            >
              English
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Item 2 clicked')
                setIsOpen(false)
              }}
            >
              Português(PT)
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Item 3 clicked')
                setIsOpen(false)
              }}
            >
              Español(ES)
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Item 3 clicked')
                setIsOpen(false)
              }}
            >
    Deutsch (DE)
    </button>
    <button
 className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
 onClick={() => {
  console.log('Item 3 clicked')
   setIsOpen(false)
    }}
            >
日本語 (JA)
</button>


<button
 className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
 onClick={() => {
  console.log('Item 3 clicked')
   setIsOpen(false)
    }}
            >
Русский (RU)
</button>
  
  <button
 className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
 onClick={() => {
  console.log('Item 3 clicked')
   setIsOpen(false)
    }}
   >
Français (FR)
</button>
  
  <button
 className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
 onClick={() => {
  console.log('Item 3 clicked')
   setIsOpen(false)
    }}
            >
हिन्दी (HI)
</button>
  </div>
  </div>
    )}
           
</div>

     {/* Icons Section Start */}
  {/* Button Section Start */}
  <div className='flex items-center gap-4 flex-wrape'>
            <Link to={""}><button className='hidden lg:inline-block border-2 border-blue-600 px-2 rounded-lg hover:bg-gray-50 w-18 text-blue-600'>Login</button></Link>
            <Link to={""}><button className='hidden lg:inline-block border-none bg-blue-700 border-blue-700 px-3 py-1 rounded-lg hover:bg-blue-500 w-18 text-white'>Download</button>
            </Link>
        </div> 


    </div>

    </section>
    </>
  )
}

export default Navbar