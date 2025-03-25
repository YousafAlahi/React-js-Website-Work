
import Careers1 from '../assets/careers1.jpg';
import Careers2 from '../assets/careers2.png'
import Careers3 from '../assets/careers3.png'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Footer from './Footer';



const Careers = () => {
  return (
    <>
      <section className="container max-w-[1440px] w-full py-6 bg-gray-100">
<div className="flex justify-between px-6">
<div>
  <img src={Careers1} width={200} height={200}/>
</div>
<div className='flex items-center gap-8 flex-wrape'>
<div  className='border-2 border-gray-300 text-black px-4 py-2 rounded-full hover:border-gray-600 transition-all duration-200 cursor-auto'><FaLinkedin/></div>
<div  className='border-2 border-gray-300 text-black px-4 py-2 rounded-full hover:border-gray-600 transition-all duration-200 cursor-auto'><FaTwitter /></div>
<div  className='border-2 border-gray-300 text-black px-4 py-2 rounded-full hover:border-gray-600 transition-all duration-200 cursor-auto'><FaFacebookF/></div>
</div> 
</div>
<div className='w-full bg-white mx-auto rounded-xl py-6 mt-4 border-b-2 border-b-gray-300 border-r-2 border-r-gray-300 '>
  <div className='flex flex-col justify-center py-10 px-11'>
    <img src={Careers2} width={100} height={100} className='mx-auto'/>
    <h1 className='text-xl lg:text-2xl font-semibold lg:font-bold text-center py-2 text-gray-800'>Thank you for your interest. Unfortunately, we are not hiring at this time</h1>
    <p className='text-center py-4'>Please check back as we will most certainly be looking for great people to join our team in the future.</p>
  </div>
</div>

<div className='flex justify-between py-6 flex-wrap'>
  <div className='flex flex-wrap gap-2 pt-4'>
    <li className='list-none font-mono font-medium text-gray-800 hover:text-green-600 hover:underline'>Privacy Policy</li>
    <li className='font-mono font-medium text-gray-800 hover:text-green-600 hover:underline'>Terms of Service</li>
<li className='font-mono font-medium text-gray-800'>© BambooHR All rights reserved.</li>
  </div>
  <div className=''>
  <img src={Careers3} width={200} height={100}/>

  </div>
</div>
</section>
<Footer/>
    </>
  )
}

export default Careers