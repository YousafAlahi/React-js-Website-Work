
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Download1 from '../assets/download1.svg'
import { FaWindows } from "react-icons/fa6";
import Img1 from '../assets/down1.svg';
import Img2 from '../assets/down2.svg';
import Img3 from '../assets/down3.svg';
import Img4 from '../assets/down4.svg';
import Img5 from '../assets/down5.svg';
import Img6 from '../assets/down6.svg';
import Img7 from '../assets/down7.svg';
import Img8 from '../assets/down8.svg';
import Img10 from '../assets/down10.svg';
import Img11 from '../assets/down11.svg';
import Img12 from '../assets/down12.svg';
import Img13 from '../assets/down13.svg';
import Img14 from '../assets/down14.svg';
import Img15 from '../assets/down15.svg';
import Img16 from '../assets/down16.svg';
import Img17 from '../assets/down17.svg';
import Img18 from '../assets/down18.png';
import Img19 from '../assets/down19.png';
import Img20 from '../assets/down20.png';
import { FaYoutube } from "react-icons/fa6";
import Img21 from '../assets/down21.svg';
import Img22 from '../assets/down22.svg';
import Img23 from '../assets/down23.svg';
import Img24 from '../assets/down24.svg';
import FAQ from './FAQ';
import Footter from '../Components/Footter';
// import Footer from '../Components/Footer';







const ImgData = [
  {
    id: 1,
    image: Img1,
    title: "Android"
  },
  {
    id: 2,
    image: Img2,
    title: "Windows"
  },
  {
    id: 3,
    image: Img3,
    title: "Linux"
  },
  {
    id: 4,
    image: Img4,
    title: "MacOS"
  },
]

const ImgData2 =[
  {
    id: 1,
    image: Img5,
    title: "Install Honeygain",
    description: "Install Honeygain on any Windows, macOS, Linux, or Android device to make money online."
  },
  {
    id: 2,
    image: Img6,
    title: "Sign up",
    description: "Create an account on Honeygain to get started and earn money. Reach your internet’s full potential!"
  },
  {
    id: 3,
    image: Img7,
    title: "Let it gather",
    description: "Share your internet connection with our network and start earning passive income with no fuss!"
  }
]


const ImgData3 = [
    {
        id: 1,
        image: Img12,
    },
    {
        id: 2,
        image: Img13,
    },
    {
        id: 3,
        image: Img14,
    },
    {
        id: 4,
        image: Img15,
    },
    {
        id: 5,
        image: Img16,
    },
    {
        id: 6,
        image: Img17,
    }
];

const ImgData4 = [
  {
    id: 7,
    image: Img18,
    name: "Mrwhosetheboss",
    subtitle: "16.8M subscribers",
    paragraph: "“It’s genuinely fascinating concept. When you install the app on your device it runs as a background task allowing you to share your internet connection.”",
    youtube: "Watch on YouTube",
  },
  {
    id: 8,
    image: Img19,
    name: "New Rockstars",
    subtitle: "16.8M subscribers",
    paragraph: "“The app doesn’t collect any personal data,instead it uses the internet to gather bits of information from the web like the best prices on airline tickets.”",
    youtube: "Watch on YouTube",
  },
  {
    id: 9,
    image: Img20,
    name: "Mrwhosetheboss",
    subtitle: "16.8M subscribers",
    paragraph: "“Best part about it is that they pay you.The more devices you connect,gather bits ofinformation from the web like the best the more money you’re gonna make.”",
    youtube: "Watch on YouTube",
  },
]

const ImgData5 = [
  {
    id: 10,
    image: Img21,
    name: "How to install Honeygain?",
    subtitle: "We have various safety measures, so the installation is smooth and will take only a few minutes!",
    youtube: "Read more >",
  },
  {
    id: 11,
    image: Img22,
    name: "How to sign up for an account",
    subtitle: "Don’t forget to register for an account after you install the app. You’ll see important information after you sign up!",
    youtube: "Read more >",
  },
  {
    id: 12,
    image: Img23,
    name: "How to verify/confirm your email",
    subtitle: "If you signed up with your email address, you can find the button to confirm your email on your Dashboard.",
    youtube: "Read more >",
  },
  {
    id: 13,
    image: Img24,
    name: "What to do after installing Honeygain",
    subtitle: "Keep the app open to share your unused internet connection and start earning passive income!",
    youtube: "Read more  >",
  },
]

const Download = () => {
  return (
    <>
      <Navbar/>

      <section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[500px] md:h-[650] h-[650px] bg-sky-100 text-black mt-2">
<div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 py-4 md:py-2">
        {/* Left Side Start */}
        <div className="flex flex-col gap-2">
          <div className="md:flex items-center gap-2 lg:pt-11">
            <h1 className="text-xl">Excellent</h1>
            <div className="flex flex-wrap gap-2">
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-600"><IoIosStarHalf /></p>
              </div>
            <p>18,195 reviews on</p>
            <p className="text-green-600"><IoIosStar/></p>
            <p>Trustpilot</p>
          </div>

          <div className="flex flex-col mt-6">
            <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl md:font-semibold md:py-10 py-2">Download Honeygain</h1>
            <p className='py-4 leading-loose'>Honeygain lets you earn passive income by sharing your internet connection! Download the Honeygain app today and make money effortlessly.</p>
            <Link to={""} className='relative top-0 left-0 mt-4'>
            <FaWindows className='absolute top-5 left-4 text-white text-[16px]'/>
            <button className='px-10 py-4 border-none bg-blue-500 rounded-lg text-white cursor-pointer'>Download for Windows</button></Link>

          </div>
        </div>
        {/* Left Side End */}
        {/* Right Side Start */}
        <div className="flex items-center justify-center">
          <img src = {Download1} width={400} height={400}/>
        </div>
        {/* Right Side End */}  
      </div>
</section>
                            {/* 2nd Section Start Now */}

    <section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-slate-200 h-[450px]'>
    <div className='cursor-pointer'>
      <div className='py-12 flex items-center justify-center'>
        <h1 className='text-sm md:text-3xl lg:text-3xl xl:text-3xl font-medium md:font-semibold lg:font-bold text-center leading-loose'>Have a different device?<br/> Install Honeygain</h1>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-6'>
        {ImgData.map((items)=>{
          return(
            <div key={items.id} className='ring-1 ring-black py-4 px-6 rounded-md hover:bg-slate-300'>
              <img src={items.image} width={40} height={30}/>
              <small className='text-center py-2'>{items.title}</small>
            </div>
          )
        })}
      </div>
    </div>

    </section>

                            {/* 2nd Section EEEEEnnDD  */}
                            {/* 3rd Section Start Now  */}
<section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-slate-200 lg:h-[550px] md:h-[600px] h-[700px]'>
<h1 className='text-xl md:text-2xl lg:text-3xl md:font-semibold font-medium text-center'>Set it up in 3 easy steps!</h1>
  <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center py-6 '>
          {ImgData2.map((item)=>{
            return(
              <div key={item.id}>
              <div className='flex items-center justify-center'>
              <img src={item.image} width={200} height={200}/>
              </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <h3 className='text-xl md:text-2xl font-semibold'>{item.title}</h3>
                  <p className='w-[250px]'>{item.description}</p>
                </div>
              </div>
            )
          })}
  </div>      
</section>

                             {/* 3rd Section EEEEEnnDD  */}
                            {/* 4rth Section Start Now  */}

<section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-sky-100 lg:h-[450px] h-[600px] mt-96 md:mt-24 lg:mt-0'>
          <div className='flex items-center justify-center gap-4 py-6'>
            <div>
              <img src={Img8} width={400} height={400}/>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div>
                <h1 className='text-xl lg:text-4xl md:text-2xl font-medium md:font-semibold py-4'>Why should you join Honeygain?</h1>
                <p className='pb-6'>We provide an innovative way to make passive income effortlessly. By sharing your internet <br/>connection with our network, you’ll earn money with a few clicks.</p>
              </div>
              <div className='hidden lg:w-[630px] lg:flex lg:items-center lg:justify-between'>
              
               <div>
                <div className='flex items-center justify-start gap-2 py-2'>
                  <img src= {Img10} width={20} height={20}/>
                  <h4 className='text-xl font-semibold'>Earn without compromising security</h4>
                </div>
                <small className='w-full'>We have various security measures to ensure safe sharing! We verify our trusted partners and monitor shared traffic to provide transparency and fairness.</small>
               </div> 
               <div>
               <div className='flex items-center justify-start gap-2 py-2 mt-4'>
                  <img src= {Img11} width={20} height={20}/>
                  <h4 className='text-xl font-semibold'>Bonuses and extra ways to make money</h4>
                </div>
                <small className='w-full'>Looking to increase your payout? Honeygain offers various bonuses through its referral program, partnership with JumpTask, and exciting social media contests!</small>
               </div>
               </div>
              </div>
            </div>
</section>
                                              {/* 5th Section Start Now  */}

<div className="h-[350px] lg:h-[250px] container">
            <h1 className="text-center py-12 text-xl md:text-2xl lg:text-3xl md:font-semibold">Spotlighted by</h1>
            <div className="flex items-center justify-center flex-wrap md:gap-6">
               {ImgData3.map((item)=> {
                return(
                    <div key={item.id}>
                        <img src={item.image} width={100} height={100}/>
                    </div>
                )
               })}
            </div>
    </div>
                            {/* 5th Section EEnnnDD  */}
                            {/* 6th Section Start Now  */}

<section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[400px] md:h-[700] h-[950px] text-black mt-2">

<h1 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold pt-4 pb-12 text-center'>Trusted by global community</h1>
<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between place-self-center gap-4'>
  {ImgData4.map((list)=>{
    return(
      <div key={list.id} className='border-2 border-slate-600 p-4 rounded-2xl'>
        <div className='flex items-center gap-4 py-6 '>
          <img src={list.image} width={50} height={50} className='rounded-full'/>
          <div>
            <p className='text-black'>{list.name}</p>
            <small className='text-slate-600'>{list.subtitle}</small>
            </div>
           </div>
           <div className='w-64 relative'>
           <small className='text-slate-600'>{list.paragraph}</small>
            <p className='pt-7 text-blue-600'>{list.youtube}</p>
            <FaYoutube className='absolute left-36 bottom-0 text-blue-600 text-xl' />

        </div>
      </div>

    ) 
  })}
</div>

</section>
                            {/* 6th Section EEnnnDD  */}
                              {/* 7th Section Start  */}
  
<section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[600px] md:h-[700] h-[950px] bg-slate-100 text-black mt-2">
<h1 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-bold pt-4 pb-6 text-center'>Still need help?</h1>
<h4 className='text-center text-slate-600'>We prepared a complete guide to help you with installation, signing up, and<br/> other useful information.</h4>

<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-between place-self-center gap-6 pt-16'>
      {ImgData5.map((e) => {
        return(
          <div key={e.id} className='border-2 border-gray-500 py-4 px-6 rounded-lg'>
            <div className='flex items-center gap-4 justify-center'>
            <div className='pb-12'>
              <img src={e.image} width={60} height={40}/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-base font-semibold'>{e.name}</p>
              <small className='text-slate-600'>{e.subtitle}</small>
              <p className='text-base text-blue-700'>{e.youtube}</p>

            </div>
            </div>
          </div>
        )
      })}
    </div>
</section>                            
                              {/* 7th Section EEnnnDD  */}

<FAQ/>
{/* <Footer/> */}
<Footter/>
    </>
  )
}

export default Download