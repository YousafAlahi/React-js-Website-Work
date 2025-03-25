
import Pic1 from '../assets/bb6.png';
import Pic2 from '../assets/bb1.png';
import Pic3 from '../assets/bb2.png';
import Entertain2 from './Entertain2';
import Footer2 from '../Components/Footer2';

const Entertainment = () => {
  return (
   <>
<section className="max-w-[1440px] w-full relative">

{/* 1st Section Start */}
<div className="w-full flex flex-col items-center justify-between bg-blue-600 gap-3 py-12">
  <h1 className="text-xl lg:text-4xl font-semibold lg:font-bold text-white">Entertainment</h1>
  <p className="text-white text-base">Your Guide To The Biggest Movies And Hottest TV Shows</p>
  <ul className="flex gap-2 text-white">
    <li className="font-bold uppercase hover:text-red-700 cursor-pointer transition-all">Action</li>
    <li className="font-bold border-l-2 border-white pl-4 uppercase hover:text-red-700 cursor-pointer transition-all">fantasy</li>
    <li className="font-bold border-l-2 border-white pl-4 uppercase hover:text-red-700 cursor-pointer transition-all">Horror</li>
    <li className="font-bold border-l-2 border-white pl-4 uppercase hover:text-red-700 cursor-pointer transition-all">SCI-FI</li>
    <li className="font-bold border-l-2 border-white pl-4 uppercase hover:text-red-700 cursor-pointer transition-all">SuperHero</li>

  </ul>
</div>
{/* 1st Section EEnnnnDD */}

{/* 2nd Section Start */}
<div className="w-[1100px] bg-white ml-[100px] mr-[100px] absolute top-44 overflow-hidden">
  <div className="w-full flex gap-4">

    {/* Right Side Columns Start Now */}

  <div className="w-[750px]">
   <div className='p-4 w-full'>
    <img src={Pic1} className=''/>
    <h1 className='font-bold text-2xl py-2'>Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?</h1>
    <p className='font-semibold text-gray-800'>Harrison Ford is Thunderbolt Ross has some stiff competition for Ass-Kicker-in-Chief <br/>By <span>Eric Francisco</span></p>
   </div>
   {/* ================= last Section Start=================  */}

   <div className='w-full flex items-center justify-between gap-2 p-4'>
    <div>
      <img src={Pic2} width={240}/>
      <p className='font-bold py-2'>Deadpool & Wolverine Director Working On Live-Action D&D Netflix Show</p>
    </div>

    <div> 
      <img src={Pic3} width={240}/>
      <p className='font-bold py-2'>Deadpool & Wolverine Director Working On Live-Action D&D Netflix Show</p>
    </div>

    <div>
      <img src={Pic2} width={240}/>
      <p className='font-bold py-2'>Deadpool & Wolverine Director Working On Live-Action D&D Netflix Show</p>
    </div>

   </div>
  </div>
  {/* Left Side Columns EEnnDD */}

  {/* Right Side Columns Start Now */}
  <div className='w-[400px] border-l-[1px] border-gray-400 p-4'>

<div className='border-b-[1px] border-gray-300 w-[330px] p-4'>
  <h3 className='font-bold hover:text-gray-500 transition-all'>New Chinese Blockbuster Just<br/> Surpassed Inside Out 2 To Become The <br/> Biggest Animated Movie Ever</h3>
</div>

 
<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
  <h3 className='font-bold hover:text-gray-500 transition-all'>Jeff Bezos Asks Who Should Be The Next James Bond After Franchise Producers Relinquish Creative Control</h3>
</div>


<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>The Last Of Us Season Two Finally Has A Premiere Date</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>Every David Fincher Movie, Ranked By Depravity</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>The 12 Wes Anderson Characters That Made Him An Icon</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>Deadpool & Wolverine Director Working On Live-Action D&D Netflix Show</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>Fan Makes Incredible Fantastic Four Popcorn Buckets That Are Probably Way Better Than The Ones We will Actually Get</h3>
</div>

<div className='border-b-[1px] border-gray-400 w-[330px] p-4'>
<h3 className='font-bold hover:text-gray-500 transition-all'>The Creepiest Toys In Movies To Prepare You For The Monkey</h3>
</div>
  </div>

  </div>
    {/* Right Side Columns EEnnDD */}

</div>
{/* 2nd Section EEnnnnDD */}
</section>

<Entertain2/>
<Footer2/>
   </>
  )
}

export default Entertainment