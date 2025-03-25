
import { FaAnglesRight } from "react-icons/fa6";

import Hero from '../assets/p7.jpeg';
import Hero1 from '../assets/p6.jpeg';
import Hero4 from '../assets/p5.jpeg';

import Hero2 from '../assets/img16.jpeg';
import Hero3 from '../assets/img17.jpeg';

import Img1 from '../assets/product_14.png';
import Img2 from '../assets/product_15.png';
import Img3 from '../assets/product_16.png';
import Img4 from '../assets/product_17.png';
import Img5 from '../assets/product_18.png';
import Img6 from '../assets/product_19.png';
import Img7 from '../assets/product_20.png';

import Pic1 from '../assets/bb2.png';
import Pic2 from '../assets/bb3.png';
import Pic3 from '../assets/bb4.png';
import Latest2 from "./Latest2";
import Footer from "../Components/Footer";




const Latest = () => {
  return (
   <>
      <section className="max-w-[1440px] w-full bg-white lg:pt-12">
  <div className='ml-[100px] w-[600px] border-r-2 border-gray-200 p-10'>

          {/* 1st Section ====== Start */}
   <div className='flex gap-2 border-b-2 border-gray-200 p-6'>
     <div>
     <img src={Img1} width={300} height={400}/>
      </div>
  <div>
   <p className='text-red-800 pb-2 font-bold'>GAME TIPS</p>
  <h3 className='font-bold hover:underline hover:text-red-800'>Getting Started Strong In Avowed, Mastering The Hulk In Marvel Rivals, And More Of The Week s Top Tips</h3>
  <small>We will also help you get every MiSide ending and unlock your ascendancy class in Path of Exile 2</small>
        <div className='flex gap-4 items-center'>
          <h3 className='font-bold'>By Kotaku Staff</h3>
          <small>PublishedFebruary 16, 2025</small>
        </div>
              </div>
    </div>
          {/* 1st Section ====== EEnndd */}

          {/* 2nd Section ====== Start */}
 <div className='flex gap-2 border-b-2 border-gray-200 p-6'>
              <div>
                <img src={Img2} width={300} height={400}/>
              </div>
              <div>
                <p className='text-red-800 pb-2 font-bold'>OPINION</p>
  <h3 className='font-bold hover:underline hover:text-red-800'>Hands-On With Monster Hunter Wilds, What Makes Avowed s Inventory So Great, And More Of The Weeks Takes</h3>
  <small>We also argue that Nintendo should bring the Virtual Console back on the Switch 2</small>
        <div className='flex gap-4 items-center'>
          <h3 className='font-bold'>By Kotaku Staff</h3>
          <small>PublishedFebruary 15, 2025</small>
        </div>
              </div>
 </div>
    {/* 2nd Section ====== EEnndd */}
    {/* 3rd Section ====== Start */}
    <div className='flex gap-2 border-b-2 border-gray-200 p-6'>
              <div>
              <small className='pb-1'>Read on the <span className='text-white bg-gray-800'>Inventory</span></small>
                <img src={Img3} width={170} height={400}/>
              </div>
              <div>
                <p className='text-gray-500 pb-2 font-bold uppercase'>Kinja Deals</p>
  <h3 className='font-extrabold hover:underline hover:text-red-800 py-3'>Join the Free-to-Play Military MMO War Thunder Today</h3>
  <small className='font-extrabold'>By The Inventory</small>
       
              </div>
    </div>
    {/* 3rd Section ====== EEnndd */}
   {/* 4th Section ====== Start */}
<div className='flex gap-2 border-b-2 border-gray-200 p-6'>
              <div>
                <img src={Img4} width={300} height={400}/>
              </div>
              <div>
                <p className='text-red-800 pb-2 font-bold uppercase'>culture</p>
  <h3 className='font-bold hover:underline hover:text-red-800'>Everything We Saw At This Week s Big PlayStation State Of Play And More Of The Week's Top Gaming News</h3>
  <small>Also, big changes are coming to Overwatch 2 and we highlight this month s new game releases</small>
        <div className='flex gap-4 items-center'>
          <h3 className='font-bold'>By Kotaku Staff</h3>
          <small>PublishedFebruary 15, 2025</small>
        </div>
              </div>
 </div>
    {/* 4th Section ====== EEnndd */}
 
<div>
  <img src={Hero}/>
  <h3 className='font-bold hover:underline py-2'>Live Forever in the Universe of New World: Aeternum</h3>
</div>

<div className='flex justify-center gap-4'>
  <div className='w-[200px] flex flex-col justify-center gap-4'>
    <h4 className='font-bold hover:underline'>Agatha All Along Star Sasheer Zamata On Witchcraft And Star Trek</h4>
    <img src={Pic1} width={150}/>
  </div>
  <div className='w-[200px] flex flex-col justify-center gap-4'>
    <h4 className='font-bold hover:underline'>Agatha All Along Star Sasheer Zamata On Witchcraft And Star Trek</h4>
    <img src={Pic2} width={150}/>
  </div>
  <div className='w-[200px] flex flex-col justify-center gap-4'>
    <h4 className='font-bold hover:underline'>The Boys Star Karen Fukuhara On Kimiko s Character Arc, Karate, And More</h4>
    <img src={Pic3} width={150}/>
  </div>
 </div>


{/* New Section Start */}
<div>
  <div className='flex py-4'>
    <img src={Img5} width={170}/>
    <img src={Img6} width={170}/>
    <img src={Img7} width={170}/>
  </div>
  <div className="flex gap-2 items-center">
    <p className="font-bold text-red-800">Opinion</p>
    <FaAnglesRight className="text-gray-400"/>
    <p className="font-bold text-red-800">Commentary</p>
  </div>
  <div>
  <h3 className='font-extrabold hover:underline hover:text-red-800 text-xl py-2'>Kotaku s Weekend Guide: 5 Games We ve Got A Hot Date With</h3>
  <small>From Avowed to Rocket League, here is what we are playing this weeke <br/>
  <span className="font-bold">By Claire Jackson, Ethan Gach, Carolyn Petit, Zack Zwiezen, and Kenneth Shepard</span> <br/>
  </small>

  <small>Published Friday 5:25PM</small>
  </div>
</div>
{/* New Section EEnnDD */}

{/* 1st Section Start */}

<div className="pt-8">
  <img src={Hero1}/>
  <div className="flex gap-2 items-center">
    <p className="font-bold text-red-800 uppercase">culture</p>
    <FaAnglesRight className="text-gray-400"/>
    <p className="font-bold text-red-800 uppercase">News</p>
  </div>
    
  <h3 className='font-bold hover:underline py-2 hover:text-red-700 lg:text-2xl'>Marvel Rivals Director And Others Laid Off Just Months After The Hero Shooter Took Over The Charts</h3>
  <p className="py-2">NetEase s Overwatch-like has been a hit across PS5 and Steam</p>
  <small className="py-6"><span className="font-bold pr-4">By Ethan Gach
</span>
Published Yesterday
</small>
</div>
{/* 1st Section EEnnDD */}

{/* 2nd Section Start */}

<div className="pt-8">
  <img src={Hero2}/>
  <div className="flex gap-2 items-center">
    <p className="font-bold text-red-800 uppercase">culture</p>
    <FaAnglesRight className="text-gray-400"/>
    <p className="font-bold text-red-800 uppercase">News</p>
  </div>
    
  <h3 className='font-bold hover:underline py-2 hover:text-red-700 lg:text-2xl'>New Nike Sneakers Seem Inspired By Donkey Kong</h3>
  <p className="py-2">The Air Max 1 variants feature gold coins and a pixelated banana</p>
  <small className="py-6"><span className="font-bold pr-4">By
  Zack Zwiezen
</span>
Published Yesterday
</small>
</div>
{/* 2nd Section EEnnDD */}


{/* 3rd Section Start */}

<div className="pt-8">
  <img src={Hero3}/>
  <div className="flex gap-2 items-center">
    <p className="font-bold text-red-800 uppercase">Reviews
</p>
    <FaAnglesRight className="text-gray-400"/>
    <p className="font-bold text-red-800 uppercase">Multiplatform</p>
  </div>
    
  <h3 className='font-bold hover:underline py-2 hover:text-red-700 lg:text-2xl'>The New Game From The Makers Of Life Is Strange Is Off To An Excellent Start</h3>
  <p className="py-2">Lost Records: Bloom & Rage captures how hard it is to make and maintain friendships no matter how old you are</p>
  <small className="py-6"><span className="font-bold pr-4">By Kenneth Shepard </span>
Published Yesterday
</small>
</div>
{/* 3rd Section EEnnDD */}


{/* 4th Section Start */}

<div className="pt-8">
  <img src={Hero4}/>
  <div className="flex gap-2 items-center">
    <p className="font-bold text-red-800 uppercase">Culture</p>
    <FaAnglesRight className="text-gray-400"/>
    <p className="font-bold text-red-800 uppercase">News</p>
  </div>
    
  <h3 className='font-bold hover:underline py-2 hover:text-red-700 lg:text-2xl'>Epic Pulls Out All The Stops To Humiliate Fortnite Cheater</h3>
  <p className="py-2">The pro player had to release an apology video after losing a lawsuit</p>
  <small className="py-6"><span className="font-bold pr-4">By Ethan Gach </span>
Published Yesterday
</small>
</div>
{/* 4th Section EEnnDD */}



{/* The Stop Container Has Ended */}
 </div>
 </section>
{/* The Stop Container Has Ended */}
<Latest2/>
<Footer/>
   </>
  )
}


export default Latest;