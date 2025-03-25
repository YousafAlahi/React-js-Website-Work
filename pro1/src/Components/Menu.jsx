
import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Menu = () => {

  //   const [menuOpened, setMenuOpened] = useState(false);

  //   const toggleMenu = () => {
  //     setMenuOpened(!menuOpened)
  // } 

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        {/* <div className="hidden sm:inline-block">
        <ul className={`${menuOpened ?"flex items-center flex-col gap-y-12 fixed top-36 right-4 p-12 bg-white rounded-3xl shadow-md w-88 ring-1 ring-slate-900/50 transition-all duration-400":"flex items-center flex-col gap-y-12 fixed top-36 p-12 bg-white rounded-3xl shadow-md w-88 ring-1 ring-slate-900/50 transition-all duration-400 -right-[100%]"}`}>
        <Link to={"/download"}><li className='inline-block px-2 py-1 text-base font-semibold'>Download</li></Link> 
        <Link to={"/referafriend"}><li className='inline-block px-2 py-1 text-base font-semibold'>Refer a Friend</li></Link>    
        <Link to={"/aboutus"}><li className='inline-block px-2 py-1 text-base font-semibold'>About Us</li></Link>    
        <Link to={"/blog"}><li className='inline-block px-2 py-1 text-base font-semibold'>Blog</li></Link>  
        </ul>
        </div>

        <div className="hidden sm:flex gap-x-5 lg:gap-x-10">

        {!menuOpened? (<MdMenu className="md:hidden cursor-pointer hover:text-red-700 text-2xl" onClick={toggleMenu}/>
        ):(<MdClose className="md:hidden cursor-pointer hover:text-red-700 text-2xl" onClick={toggleMenu}/>
        )}
        </div> */}
        <div className="relative md:hidden">
    <button
      className="absolute -top-2 right-0 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <IoClose className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
    </button>
    {isOpen && (
      <div
       
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } fixed z-20 inset-x-0 left-10 w-72 top-48 bg-white rounded-xl text-black transform transition-transform duration-200 ease-in-out lg:translate-x-0`}
      >
       
        <nav>
          <ul className="space-y-4 flex flex-col items-center gap-4 p-4">
          <Link to="/download">
              <li className="text-lg font-medium hover:text-blue-500">
              Download
              </li>
            </Link>
            <Link to="/referafriend">
              <li className="text-lg font-medium hover:text-blue-500">
              Refer a Friend
              </li>
            </Link>
            <Link to="/aboutus">
              <li className="text-lg font-medium hover:text-blue-500">
              About
              </li>
            </Link>
            {/* <Link to="/careers">
              <li className="text-lg font-medium hover:text-blue-500">
                Careers
              </li>
            </Link> */}
            <Link to="/blog">
              <li className="text-lg font-medium hover:text-blue-500">
              Blog
              </li>
            </Link>
          </ul>
          <div className="block lg:hidden ml-20 py-4">
    <button className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-400">Download</button>
</div>

        </nav>
      
      </div>
    )}
  </div>
 
   
    </>
  )
}

export default Menu