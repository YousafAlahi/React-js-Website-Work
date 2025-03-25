

import { Link } from 'react-router-dom';
import Honey from '../assets/img5.png';
// import Honey1 from '../assets/img7.png';
import Logo1 from '../assets/logo3.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";



const BgImg = {
    backgroundImage: `url(${Honey})`,
    backgroundSize: "100%",
    backgroundPosition: "top",
    backgroundRepeat : "no-repeat",
  
}


// const BgImg1 = {
//     backgroundImage: `url(${Honey1})`,
//     backgroundSize: "100%",
//     backgroundPosition: "bottom",
//     backgroundRepeat : "no-repeat",
  
// }
const Footer = () => {
  return (
   <>
     <section style={BgImg} className='md:max-w-[1440px] w-full md:h-[600px]'>
     {/* <div style={BgImg1} className='md:max-w-[1440px] w-full md:h-[600px] cursor-pointer'></div> */}
       </section>
       {/* Footer Section is Start */}

        <footer className='container max-w-[1440px] w-full py-4 lg:py-8 bg-yellow-900 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4 container'>

        <div className='lg:col-span-2 col-span-1'>
        <div className='flex flex-col items-center justify-between'>
        <img src={Logo1} width={150} height={150}/>
        <small className='py-2'> Honeygain is the first-ever app that allows its users to make money online by sharing their Internet connection. Reach your networks full potential by getting paid in USD or crypto!</small>
     <div className='flex items-center gap-2 justify-center pt-10'>
                <Link to ={""}><FaFacebook className='text-xl'/></Link>
                <Link to ={""}><FaInstagram className='text-xl'/></Link>
                <Link to ={""}><FaTwitter className='text-xl'/></Link>
                <Link to ={""}><FaDiscord className='text-xl'/></Link>
                <Link to ={""}><AiFillTikTok className='text-xl'/></Link>
                <Link to ={""}><FaYoutube className='text-xl'/></Link>
            </div>
            </div>
           </div>
           <div>
                <h3 className='text-slate-400 py-2 font-semibold'>Ways to earn more</h3>
                <p>Earn more</p>
                <p>Refer a friend</p>
                <p>JumpTask Mode</p>
            </div>
            <div>
                <h3 className='text-slate-400 py-2 font-semibold'>About</h3>
                <p>Review</p>
                <p>About us</p>
                <p>What is Honeygain</p>
                <p>Blog</p>
                <p>Download</p>
            </div>
            <div>
                <h3 className='text-slate-400 py-2 font-semibold'>Products</h3>
                <p>Swarmbytes</p>
                <p>CareBuzz</p>
                <p>Honeygain SDK</p>
            </div>
            <div>
                <h3 className='text-slate-400 py-2 font-semibold'>Help</h3>
                <p>Support Center</p>
                <p>How to start?</p>
                <p>Payout process</p>
                <p>Privacy policy</p>
                <p>Terms of Use</p>
            </div>
            <hr className='col-start-1 col-end-7 bg-gray-700'/>
      </div> 
      <small className='container py-4'>© 2025 Honeygain. All rights reserved.</small>

     </footer>
   </>
  )
}

export default Footer