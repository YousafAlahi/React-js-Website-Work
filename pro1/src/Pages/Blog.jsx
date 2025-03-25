import Navbar from "../Components/Navbar";
import { CiSearch } from "react-icons/ci";
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/aone1.png';
import Blog3 from '../assets/blog2.png';
import Blog4 from '../assets/blog3.png';
import Blog5 from '../assets/blog4.png';
import Blog6 from '../assets/bb1.png';
import Blog7 from '../assets/bb2.png';
import Blog8 from '../assets/bb3.png';
import Blog9 from '../assets/bb4.png';
import Blog10 from '../assets/bb5.png';
import Blog11 from '../assets/bb6.png';
import Blog12 from '../assets/bb7.png';
import Blog13 from '../assets/bb8.png';
import Blog14 from '../assets/bb9.png';
import Footter from "../Components/Footter";
import { FaAngleRight } from "react-icons/fa";

// import Footer from '../Components/Footer';




const Blog = () => {
  return (
    <>
    <Navbar/>
     <section className="container max-w-[1440px] w-full min-h-[550xpx] bg-slate-100/50">
     <h1 className="py-8 text-xl lg:text-2xl font-bold">Discover our blog</h1>
     
      <div className="flex gap-36 ">
        <div className="flex items-start flex-col gap-2">
          <ul className="flex items-center gap-4 flex-wrap">
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-white bg-blue-500 rounded-md cursor-pointer">All</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Knowledge</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">News</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Cybersecurity</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Personal Finance</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Side Hustles</li>
          </ul>
          <ul className="flex items-center gap-4 py-4">
           
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Investing</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Saving Tips</li>
            <li className="inline-block px-2 py-1 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">Budgeting</li>
          </ul>
          </div>
          <div className="hidden lg:w-[300px] lg:block lg:relative">
          <CiSearch className="absolute top-2 left-1 font-semibold text-xl"/>
          <input type="text"
          placeholder="search"
          className="w-[200px] px-6 py-1 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>


      {/* 2nd Section Start */}
<div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-11">
{/* Left Side Start */}
  <div>
    <div>
      <img src={Blog1} width={600} height={400}/>
    </div>
    <div className="py-4">
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg gap-2 hover:bg-slate-400 ml-2">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg gap-2 hover:bg-slate-400">Side Hustles</button>
    </div>
    <div>
      <h1 className="text-xl font-semibold lg:text-2xl lg:font-bold">How To Profit From In App <br/>Advertising: From Ads to SDK <br/>Integration</h1>
      <p className="py-6 text-gray-600">In-app advertising has revolutionized how developers monetize their apps,<br/> offering a powerful revenue stream without directly charging users. From...</p>
    </div>
    <div className="flex gap-2 py-4 flex-wrape">
<img src={Blog2} width={50} height={40} className="rounded-full"/>
<div>
<h3 className="text-sm lg:text-xl font-semibold">By Honeygain</h3>
<small>Jan 3, 2025 • 12 min read</small>

</div>
    </div>
  </div>
  {/* Left Side EEnnDDD */}
      <div>
      <h1 className="text-xl font-semibold pb-8">Recent articles</h1>

      {/* one row start */}
<div className="flex flex-wrape gap-4">
      <div>
        <img src={Blog1} width={100} height={100}/>
      </div>
      <div className="pb-6">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Side Hustles</button>
      <h1 className="text-sm font-semibold py-4">How To Profit From In App <br/>Advertising: From Ads to SDK <br/>Integration</h1>
      <small>Jan 3, 2025 • 12 min read</small>
      </div>
</div>
{/* one row Ennd */}
{/* two row Start */}
<div className="flex flex-wrape gap-4">
      <div>
     <img src={Blog3} width={100} height={100}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Cybersecurity</button>
      <h1 className="text-sm font-semibold py-2">Why Should You Always<br/> Keep Your Digital Wallet<br/> Safe?</h1>
      <small>Dec 20, 2024 • 5 min read</small>
      </div>
</div>
{/* two row Ennd */}
{/* three row Start */}
<div className="flex flex-wrape gap-4">
      <div>
  <img src={Blog4} width={100} height={100}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Side Hustles</button>
      <h1 className="text-sm font-semibold py-2">Mobile Game<br/> Monetization With SDK:<br/> Opening Up New Revenue<br/> Sources for Developers
</h1>
      <small>Dec 13, 2024 • Last updated Jan 3, 2025,<br/> • 11 min read</small>
      </div>
</div>
{/* Three row Ennd */}
{/* Four row Start */}
<div className="flex flex-wrape gap-4">
      <div>
  <img src={Blog5} width={100} height={100}/>
      </div>
      <div className="pb-6">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <h1 className="text-sm font-semibold py-2">Essential Guide to Smart<br/> Chain Networks and<br/> Digital Wallets for Cryptocurrency
</h1>
      <small>Dec 11, 2024 • 3 min read</small>
      </div>
</div>
{/* Three row Ennd */}

</div>
</div>
<hr className="w-full h-[1px] bg-blue-500"/>

 </section>

{/* ============================= 2nd section Start Now  =============================== */}
<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-slate-100/50 py-6 lg:py-12">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">Knowledge</h1>
  <h3 className="text-blue-500 flex gap-1 items-center">View all <FaAngleRight /></h3>
</div>
  {/* Row Start */}
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-6">

{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog1} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Side Hustles</button>
      <h1 className="text-sm font-semibold py-2">How To Profit From In App<br/> Advertising: From Ads to SDK<br/> Integration
</h1>
      <small>Jan 3, 2025 • 12 min read</small>
      </div>
</div>
{/* 1st Columns Ennd*/} 
{/* 2nd Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog3} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Cybersecurity</button>
      <h1 className="text-sm font-semibold py-2">Why Should You Always Keep Your<br/> Digital Wallet Safe?
</h1>
      <small>Dec 20, 2024 • 5 min read</small>
      </div>
</div>
{/* 2nd Columns Ennd*/}
{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog4} width={300} height={300}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Side Hustles</button>
      <h1 className="text-sm font-semibold py-2">Mobile Game<br/> Monetization With SDK:<br/> Opening Up New Revenue<br/> Sources for Developers
</h1>
      <small>Dec 13, 2024 • Last updated Jan 3, 2025,<br/> • 11 min read</small>
      </div>
</div>
{/* =============================================3rd Columns Ennd*================================================================*/}

  </div>

</section>

{/* =============================================3rd Section is Start*================================================================*/}


<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-slate-100/50 py-6">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">News</h1>
  <h3 className="text-blue-500 flex gap-1 items-center">View all <FaAngleRight /></h3>
</div>
  {/* Row Start */}
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-6">

{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog6} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">News</button>
      <h1 className="text-sm font-semibold py-2">The Global IPv4 Shortage: Impact<br/> on Networks and Honeygain Users
</h1>
      <small>Nov 12, 2024 • 4 min read</small>
      </div>
</div>
{/* 1st Columns Ennd*/} 
{/* 2nd Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog7} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">News</button>
      <h1 className="text-sm font-semibold py-2">A New Chapter for Honeygain: The<br/> Bees Have Rebranded
</h1>
      <small>Jan 18, 2024 • Last updated Oct 4, 2024 • 4 min read</small>
      </div>
</div>
{/* 2nd Columns Ennd*/}
{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog8} width={300} height={300}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Side Hustles</button>
      <h1 className="text-sm font-semibold py-2">Honeygain’s Year in Review 2023
</h1>
      <small>Jan 12, 2024 • Last updated Oct 4, 2024 • 4 min read</small>
      </div>
</div>
{/* ===============3rd Columns Ennd*=================================*/}

  </div>

</section>

{/* ============================================= 4th Section is Start*================================================================*/}


<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-slate-100/50 py-6">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">Cybersecurity</h1>
  <h3 className="text-blue-500 flex gap-1 items-center">View all <FaAngleRight /></h3>
</div>
  {/* Row Start */}
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-6">

{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog9} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Knowledge</button>
      <button className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Cybersecurity</button>
      <h1 className="text-sm font-semibold py-2">Why Should You Always Keep Your<br/> Digital Wallet Safe?
</h1>
      <small>Dec 20, 2024 • 5 min read</small>
      </div>
</div>
{/* 1st Columns Ennd*/} 
{/* 2nd Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog10} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Cybersecurity</button>
      <h1 className="text-sm font-semibold py-2">Honeygain Puts Transparency,<br/> Security, and Education First
</h1>
      <small>Feb 10, 2023 • Last updated Oct 4, 2024 • 3 min read</small>
      </div>
</div>
{/* 2nd Columns Ennd*/}
{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog11} width={300} height={300}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Cybersecurity</button>
      <h1 className="text-sm font-semibold py-2">10 Work From Home Security Tips to<br/> Keep Your Data Safe
</h1>
      <small>Oct 20, 2022 • Last updated Oct 4, 2024 • 9 min read</small>
      </div>
</div>
{/* ===============3rd Columns Ennd*=================================*/}

  </div>

</section>

{/* ============================================= 4th Section is Start*================================================================*/}

<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-slate-100/50 py-6">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">Personal Finance</h1>
  <h3 className="text-blue-500 flex gap-1 items-center">View all <FaAngleRight /></h3>
</div>
  {/* Row Start */}
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-6">

{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog12} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Personal Finance</button>
      <h1 className="text-sm font-semibold py-2">How to Generate Passive Income<br/> with No Initial Funds
</h1>
      <small>Sep 25, 2024 • Last updated Jan 9, 2025 • 8 min read</small>
      </div>
</div>

{/* 1st Columns Ennd*/} 
{/* 2nd Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog13} width={300} height={300}/>
      </div>
      <div className="pb-4 gap-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Personal Finance</button>
      <h1 className="text-sm font-semibold py-2">How to Make Money as a Teen: 9<br/> Easy Ways to Start Earning
</h1>
      <small>Sep 10, 2024 • Last updated Oct 4, 2024 • 9 min read</small>
      </div>
</div>
{/* 2nd Columns Ennd*/}
{/* 1st Columns Start*/}
<div className="flex flex-col gap-4">
      <div>
  <img src={Blog14} width={300} height={300}/>
      </div>
      <div className="pb-4">
      <button className="px-2 py-1 text-blue-500 bg-gray-200 rounded-lg hover:bg-slate-400">Personal Finance</button>
      <h1 className="text-sm font-semibold py-2">How to Make Money in College: Easy<br/> Ways to Earn Extra Cash
</h1>
      <small>Sep 5, 2024 • Last updated Oct 4, 2024 • 10 min read</small>
      </div>
</div>
{/* ===============3rd Columns Ennd*=================================*/}
  </div>
</section>

{/* <Footer/> */}
<Footter/>
    </>
  )
}

export default Blog