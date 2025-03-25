
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'
import Img5 from '../assets/img5.jpg'
import Img6 from '../assets/img6.png'
import Img7 from '../assets/img7.png'
import Img8 from '../assets/img6.png'


import Img9 from '../assets/img9.png'
import Img10 from '../assets/img10.png'
import Img11 from '../assets/img11.png'
import Img12 from '../assets/img12.png'
import Img13 from '../assets/img6.png'
import Img14 from '../assets/img14.png'
import Img15 from '../assets/img15.png'
import Img16 from '../assets/img16.jpeg'
import Footer from './Footer'




const ImgData1 =[
  {
    id: 1,
    image: Img1,
    title: "What is the Reseller? |How Markaz is the Top Reselling App in Pakistan",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 2,
    image: Img2,
    title: "Growth of E-Commerce in Pakistan: Look at Market, Size & Players",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 3,
    image: Img3,
    title: "10 Essential Steps to Start Your E-commerce Business in Pakistan",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 4,
    image: Img4,
    title: "Shopify Dropshipping Success for Pakistan: Tips & Strategies",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
 
]

const ImgData2 =[
  {
    id: 5,
    image: Img5,
    title: "Dropshipping In Dubai – Getting Familiar With The Basics",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 6,
    image: Img6,
    title: "General Benefits of Starting a Gulf Dropshipping UAE Business",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 7,
    image: Img7,
    title: "Exploring The Best Spocket Alternatives | Here’s Why You Need To Do So",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 8,
    image: Img8,
    title: "Shopify Dropshipping Success for Pakistan: Tips & Strategies",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
]


const ImgData3 =[
  {
    id: 9,
    image: Img9,
    title: "The Importance Of Women owned businesses For Pakistan's Economy",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 10,
    image: Img10,
    title: "Finding online jobs in Pakistan can be an overwhelming experience",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 11,
    image: Img11,
    title: "Mobile Payments in Pakistan: Everything You Need to Know",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 12,
    image: Img12,
    title: "Market Trends all Entrepreneurs Should Know",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
 
]

const ImgData4 =[
  {
    id: 13,
    image: Img13,
    title: "How Lean Thinking Can Benefit Your Business",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 14,
    image: Img14,
    title: "Tips And Advice On Managing The Impact Of Inflation On Your Small Business",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 15,
    image: Img15,
    title: "Why Diversify Products? Economies of Scope Explained",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
  {
    id: 16,
    image: Img16,
    title: "What is a Buyer Persona and How Do You Build One?",
    description: "Resellers play a crucial intermediary role in the retail ecosystem. Simply put, a reseller purchases products with the intent to sell them at a markup."
  },
]



const Blog = () => {
  return (
    <>
     <div className="container max-w-[1440px] w-full py-6 lg:py-8 bg-gray-200">
      <div className="container w-full">
        <ul className="flex gap-6 flex-wrap">
          <small className="bg-green-300 py-1 px-2 rounded-full">All Post</small>
          <small>TikTok marketing</small>
          <small>Instagram</small>
          <small>Supplier app</small> 
          <small>Supplier portal</small> 
          <small>Dropshiping</small> 
          <small>Shopping app</small>
          <small>Online shop</small>
          <small>Earning apps</small>
          <small>Business ideas</small>
          <small>Case study</small>
        </ul>
      </div>


{/* ============================= 2nd section Start Now  =============================== */}

<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-gray-200 py-6 mt-4">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">All post</h1>
</div>
<div className='flex flex-1 md:flex-2 lg:flex-col-4 xl:flex-col-4 gap-4'>
{ImgData1.map((item)=>{
  return(
    <div key={item.id} className='bg-white mt-4'>
      <div>
        <img src={item.image} className='pb-4'/>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <button className="bg-green-300 py-1 px-2 rounded-full w-36">Dropshiping</button>

        <p className='text-xl font-semibold'>{item.title}</p>
        <p>{item.description}</p>

      </div>
    </div>
  )
})}
</div>
</section>
{/* ===================================2nd Columns Ennd*===========================================*/}

{/* ============================= 3rd section Start Now  =============================== */}
 
 <section className="container max-w-[1440px] w-full min-h-[550xpx] bg-gray-200">
<div className='flex flex-1 md:flex-2 lg:flex-col-4 xl:flex-col-4 gap-4'>
{ImgData2.map((item)=>{
  return(
    <div key={item.id} className='bg-white mt-4'>
      <div>
        <img src={item.image} className='pb-4'/>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <button className="bg-green-300 py-1 px-2 rounded-full w-36">Dropshiping</button>

        <p className='text-xl font-semibold'>{item.title}</p>
        <p>{item.description}</p>

      </div>
    </div>
  )
})}
</div>
</section> 
{/* ==========================3red Section Ennd*=======================================*/}

{/* ============================= 2nd section Start Now  =============================== */}

<section className="container max-w-[1440px] w-full min-h-[550xpx] bg-gray-200 py-6 mt-4">
<div className="conatiner flex justify-between flex-wrape">
  <h1 className="text-xl md:text-2xl font-bold">Case studies</h1>
</div>
<div className='flex flex-1 md:flex-2 lg:flex-col-4 xl:flex-col-4 gap-4'>
{ImgData3.map((item)=>{
  return(
    <div key={item.id} className='bg-white mt-4'>
      <div>
        <img src={item.image} className='pb-4'/>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <button className="bg-green-300 py-1 px-2 rounded-full w-36">Case Studies</button>

        <p className='text-xl font-semibold'>{item.title}</p>
        <p>{item.description}</p>

      </div>
    </div>
  )
})}
</div>
</section>
{/* ===================================2nd Columns Ennd*===========================================*/}

{/* ============================= 3rd section Start Now  =============================== */}
 
 <section className="container max-w-[1440px] w-full min-h-[550xpx] bg-gray-200">
<div className='flex flex-1 md:flex-2 lg:flex-col-4 xl:flex-col-4 gap-4'>
{ImgData4.map((item)=>{
  return(
    <div key={item.id} className='bg-white mt-4'>
      <div>
        <img src={item.image} className='pb-4'/>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <button className="bg-green-300 py-1 px-2 rounded-full w-36">Case Studies</button>

        <p className='text-xl font-semibold'>{item.title}</p>
        <p>{item.description}</p>

      </div>
    </div>
  )
})}
</div>
</section> 
{/* ==========================3red Section Ennd*=======================================*/}
</div>

<Footer/>
    </>
  )
}

export default Blog