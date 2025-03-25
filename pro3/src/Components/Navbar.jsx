
import { Link } from 'react-router-dom'
import Logo from '../assets/logo3.png'
import { IoIosSearch } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";


const Navbar = () => {
  return (
   <>
   <hr className='h-[4px] bg-red-700'/>
    <section className="max-w-[1440px] w-full px-24 py-4 bg-black">
        <div className='flex items-center justify-between'>
            {/* Logo Section Start */}
            <div className='flex flex-col gap-2 text-white'>
                <img src={Logo} width={210} height={0}/>
                <ul className='flex gap-2'>
                    <small>Gaming Reviews,</small>
                    <small>News,</small>
                    <small>Tips and More.</small>
                </ul>
                
            </div>
            {/* Logo Section Ennd */}
    <div className='text-black border-l-[2px] border-gray-500 pl-12'>
        <ul className='flex items-center gap-4 text-white'>
            <Link to={"/"}><li className='bg-yellow-400 text-black px-2 font-semibold'>Home</li></Link>
            <Link to={"/latest"}><li className='hover:text-yellow-400'>Latest</li></Link>
            <Link to={"/entertainment"}><li className='hover:text-yellow-400'>Entertainment</li></Link>
            <Link to={"/reviews"}><li className='hover:text-yellow-400'>Reviews</li></Link>
            <Link to={"/news"}><li className='hover:text-yellow-400'>News</li></Link>
            <Link to={"/games"}><li className='hover:text-yellow-400'>Games</li></Link>

        </ul>
            </div>
   
<div className='flex items-center gap-4'>
    <div className='flex items-center gap-1'>
        <TbWorld className='text-white text-2xl'/>
        <h1 className='text-white uppercase font-bold'>Editions</h1>
        <FaAngleDown className='text-white text-xl'/>
    </div>
    <div className='w-8 h-8 rounded-full bg-white items-center flex justify-center cursor-pointer'>
    <IoIosSearch className='text-black text-2xl'/>

    </div>
    <div className='w-8 h-8 rounded-full bg-white items-center flex justify-center cursor-pointer'>
    <MdMarkEmailUnread  className='text-black text-2xl'/>

    </div>
    <div className='w-8 h-8 rounded-full bg-white items-center flex justify-center cursor-pointer'>
    <RiUserLine  className='text-black text-2xl'/>

    </div>
</div>


 </div>
</section>
   </>
  )
}

export default Navbar
