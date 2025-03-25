
import { Link } from 'react-router-dom';
import Honey from '../assets/img5.png';
import { SiHoneygain } from "react-icons/si";
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


const Footter = () => {
  return (
    <>
    <section style={BgImg} className='md:max-w-[1440px] w-full md:h-[400px]'>
    </section>
    <div className='md:relative md:w-full md:h-[150px] md:bg-sky-100 '>
        <div className='hidden md:block md:text-center'>   
            <h1 className='md:text-2xl lg:text-4xl lg:pb-4 lg:font-semibold'>Ready to make sweet money?</h1>
            <p className='md:text-xl md:pb-4'>It only takes 5 minutes to start earning with Honeygain</p>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center">
      <button className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Download
      </button>
    </div>
    </div>

{/* Footer Section Start */}

<footer className='container max-w-[1440px] w-full h-min-[350px] lg:h-[350px] bg-slate-900 py-6 lg:mt-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
    <div>
        <div className='flex items-center gap-2'>
        <SiHoneygain className='text-xl text-white'/>
        <h1 className='text-white font-bold'>honeygain</h1>
        </div>
        <div className='flex flex-col items-start'>
            <p className='w-[300px] py-6 text-white'>
            Honeygain is the first-ever app that allows its users to make money online by sharing their Internet connection. Reach your networks full potential by getting paid in USD or crypto!</p>
            <div className='flex items-start gap-2 justify-center pt-10 lg:py-8'>
             <Link to ={""}><FaFacebook className='text-2xl text-white'/></Link>
                <Link to ={""}><FaInstagram className='text-2xl text-white'/></Link>
                <Link to ={""}><FaTwitter className='text-2xl text-white'/></Link>
                <Link to ={""}><FaDiscord className='text-2xl text-white'/></Link>
                <Link to ={""}><AiFillTikTok className='text-2xl text-white'/></Link>
                <Link to ={""}><FaYoutube className='text-2xl text-white'/></Link>
            </div>
        </div>
        </div>
        {/* Right side */}
        <div className='flex flex-wrap md:flex-col-2 lg:flex-col-4 justify-between'>
        <div  className=''>
         <h3 className='text-slate-400 py-2 font-semibold'>Ways to earn</h3>
        <p className='py-2 text-white'>Earn more</p>
        <p className='py-2 text-white'>Refer a friend</p>
        <p className='py-2 text-white'>JumpTask Mode</p>
        </div>

    <div>
     <h3 className='text-slate-400 py-2 font-semibold'>About</h3>
        <p className='py-2 text-white inline-block'>Review</p>
        <p className='py-2 text-white'>About us</p>
        <p className='py-2 text-white'>What is Honeygain</p>
        <p className='py-2 text-white'>Blog</p>
        <p className='py-2 text-white'>Download</p>
        </div> 
            
        <div>
        <h3 className='text-slate-400 py-2 font-semibold'>Products</h3>
        <p className='py-2 text-white'>Swarmbytes</p>
        <p className='py-2 text-white'>CareBuzz</p>
         <p className='py-2 text-white'>Honeygain SDK</p>
        </div>     
        <div className='hodden md:flex flex-col'>
         <h3 className='text-slate-400 py-2 font-semibold'>Help</h3>
        <p className='py-2 text-white'>Support Center</p>
                <p className='py-2 text-white'>How to start?</p>
                <p className='py-2 text-white'>Payout process</p>
                <p className='py-2 text-white'>Privacy policy</p>
                <p className='py-2 text-white'>Terms of Use</p>
            </div>
        </div>
    </div>
    <hr className='w-full py-2 col-start-1 col-end-4'/>
    <small className='py-4 text-white text-start'>© 2025 Honeygain. All rights reserved.</small>
</footer>

        {/* Footer Section End */}


</>
  )
}

export default Footter