

import Become1 from '../assets/become1.png';
import Become2 from '../assets/become2.png';
import Become3 from '../assets/become3.png';
import Become4 from '../assets/logo1.png';

import { RiGalleryView } from "react-icons/ri";
import { MdCleanHands } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

// import { useState } from "react";


const myData1 =  [
  {
    id: 1,
    icons:<RiGalleryView />,
    name: "Apki Sales Mein Izafah",
    subname: "Markaz apkay orders pooray Pakistan se laata hai"

  },
  {
    id: 2,
    icons:<MdCleanHands />,
    name: "Waqt Per Payment",
    subname: "Markaz apko waqt per mukammal payment deta hai"

  },
  {
    id: 3,
    icons:<SlEarphonesAlt />,
    name: "Apkay Products ki Listing",
    subname: "Markaz supplier app per apkay products ki listing khud kerta hai"

  },
  {
    id: 4,
    icons:<TbTruckDelivery />,
    name: "Customer Service",
    subname: "Markaz apkay customers ko manage kerta hai"

  },
  {
    id: 5,
    icons:<TbTruckDelivery />,
    name: "Pickup Aur Delivery",
    subname: "Markaz apkay parcels ka yaqeeni pickup aur delivery kerwata hay"

  },

]


const BecomeaSupplier = () => {
    return (
    <>
      <section className="container max-w-[1440px] h-min-[350px] w-full py-6 bg-gray-200">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-6 lg:pt-10'>
          <div className='flex flex-col items-start gap-6'>
            <h1 className='py-6 text-2xl lg:text-6xl font-semibold text-blue-950'>Markaz Supplier Banein</h1>
            <div className="hidden lg:block lg:w-[200px] lg:bg-blue-900 lg:h-[2px]"></div>

            {/* 1 Row Start */}
            <div className='flex items-center gap-10 flex-wrap'>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>2nd</h1>
                <p className='text-base text-center text-blue-900'>largest marketplace</p>
              </div>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>5000+</h1>
                <p className='text-base text-center text-blue-900'>daily orders</p>
              </div>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>Upto 1M+</h1>
                <p className='text-base text-center text-blue-900'>weely sales</p>
              </div>
            </div>
                        {/* 1 Row Enndd */}
                        {/* 2 Row Start */}
        <div className='flex items-start lg:items-center gap-10 lg:gap-20 flex-wrap'>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>40k+</h1>
                <p className='text-base text-center text-blue-900'>daily active users</p>
              </div>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>405</h1>
                <p className='text-base text-center text-blue-900'>delivery areas</p>
              </div>
              <div>
                <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>400+</h1>
                <p className='text-base text-center text-blue-900'>suppliers</p>
              </div>
            </div>
                        {/* 2 Row Ennddd */}
                       {/* 3 Row Row */}
            <div>
              <h1 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-blue-950 text-center'>100k+</h1>
              <p className='text-base text-center text-blue-900'>products</p>
            </div>
                        {/* 3 Row Ennddd */}
              <button className='px-8 py-2 boder-none outline-none bg-green-500 hover:bg-black transition-all duration-200 text-white rounded-full'>Apple Now</button>
          </div>

          <div className=''>
            <img src={Become1} width={650} height={650}/>
          </div>
        </div>
      </section>
      {/* 2nd Section start */}
      <section  className="container max-w-[1440px] h-min-[350px] w-full py-6 bg-gray-200">
        <h1 className='text-xl lg:text-2xl font-medium lg:font-semibold text-blue-950 lg:text-center py-8'>Markaz Kay Sath Kaam <br/>
        Kernay Kay Faiday</h1>
<div  className='lg:w-full min-h-[350px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-6 gap-8'>
  {myData1.map((item)=>{
    return(
      <div key={item.id} className='flex gap-6'>
      <h1 className='text-8xl'>{item.icons}</h1>
      <div>
        <p className='text-xl py-2 font-semibold'>{item.name}</p>
        <small>{item.subname}</small>
      </div>
      </div>
    )
  })}

</div>
</section>

      {/* 2nd Section Enndd */}
     {/* 3rd Section Enndd */}
<section  className="container max-w-[1440px] h-min-[450px] w-full pt-6 lg:pt-12 bg-white">
<div className='grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
{/* Content section */}
  <div className='flex flex-col gap-6'>
  <h1 className='text-2xl lg:text-4xl py-0 px-6 font-semibold text-blue-950'>Markaz Supplier Kese Banain</h1>
<div className='flex gap-2'>
  <p className='bg-green-400 text-white w-6 h-6 rounded-full text-center'>1</p>
  <p>Verify kerlein kay kia aap uss shehr se hain jahan per Markaz kaam kerraha hai</p>
</div>
<div className='flex gap-2'>
  <p className='bg-green-400 text-white w-6 h-6 rounded-full text-center'>2</p>
  <p>Form per tamam details fill kerkay submit kerein</p>
</div>
<div className='flex gap-2'>
  <p className='bg-green-400 text-white w-6 h-6 rounded-full text-center'>3</p>
  <p>Markaz kay numayinday se rabtay/mulaqaat ka intezaar kerein</p>
</div>
<div className='flex gap-2'>
  <p className='bg-green-400 text-white w-6 h-6 rounded-full text-center'>4</p>
  <p>Registration kay liye details batayein</p>
</div>

<div className='flex gap-2'>
<p className='bg-green-400 text-white w-5 h-6 rounded-full text-center'>5</p>
  <p>Ap Markaz Supplier account ka login access haasil kerein aur guidelines kay mutaabiq Markaz</p>
</div>

  </div>
  {/* Image section */}
  <div className='flex items-start justify-center'>
  <img src={Become2} width={300} height={300}/>
</div>

</div>
</section>
      {/* 3rd Section Enndd */}
      {/* 4th Section Enndd */}
<section  className="max-w-[1440px] h-min-[450px] w-full bg-gray-100 px-11">
<div className='hidden lg:block lg:bg-gray-200 lg:container lg:p-8 lg:rounded-3xl'>
  <h1 className='text-2xl font-semibold lg:text-4xl px-4 py-12 text-blue-950'>Suppliers Markaz Kay Baray Mein Kia Kehtay Hain?</h1>
  <div className='flex gap-4 items-center justify-center'>

    <div className='bg-white w-1/3 min-h-[400px] flex flex-col rounded-2xl p-6'>
      <div className='flex items-center '>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/></div>

      <div className='flex flex-col p-6'>
      <p className='pt-12'>Markaz is a game-changer for women who want to start their businesses. Women have been held back for too long by the lack of resources and support needed to get their businesses off the ground. But with Markaz,</p>
      <h3 className='text-gray-300 text-right pt-16 pb-6'>ABDUL QADIR <br/>AQ Khan Deals, Peshawer.</h3></div>
    </div>
    
    
    <div className='bg-white w-1/3 min-h-[400px] flex flex-col rounded-2xl p-8'>
      <div className='flex items-center '>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/>
      <IoIosStar className='text-xl text-green-400'/></div>

      <div className='flex flex-col p-6'>
      <p className='pt-12'>Markaz is a game-changer for women who want to start their businesses. Women have been held back for too long by the lack of resources and support needed to get their businesses off the ground. But with Markaz,</p>
      <h3 className='text-gray-300 text-right pt-16'>SOFIA MUMTAZ <br/>Momis Collection, Lahore.</h3></div>
    </div>
    
  </div>
  <div>

  </div>
</div>
</section>
      {/* 4th Section Enndd */}
      {/* 5th Section Enndd */}
<section  className="max-w-[1440px] h-min-[450px] w-full bg-gray-100 py-6 lg:py-24 px-12">
<div className="min-h-[300px] flex items-center justify-center bg-gradient-to-r from-red-900 via-blue-900 to-green-600 rounded-3xl z-1 relative">
      <div className="text-center lg:absolute lg:top-[30%] lg:left-[20%] text-white">
        <h1 className="text-2xl font-semibold mb-4">Markaz Kay Sath Apna<br/> Karobar Barhayein</h1>
        <button className="text-lg border-none px-4 py-2 bg-green-400 rounded-full hover:bg-transparent transition-all duration-200 cursor-pointer">
          Download The App
        </button>
      </div>
      <div className='z-2 absolute top-[-4] right-[300px]'>
        <img src={Become3} width={250} height={250}/>
      </div>
    </div>
    
    </section>

      {/* 5th Section Enndd */}

      {/* Footer Section Enndd */}
<section  className="container max-w-[1440px] h-min-[450px] w-full bg-slate-900 py-6 lg:py-12 px-12 rounded-lg">
<footer className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
  <div>
 <div className='flex gap-2'>
 <img src={Become4} width={30} height={30}/>
 <h1 className='text-2xl font-semibold text-white'>Markaz</h1>
 </div>
 <div>
  <input type='email'
  placeholder='Type your e-mail'
  className='w-[220px] px-2 bg-transparent border-b-[1px] border-b-gray-500 py-2'
  />
  <button className='text-xl border-none outline-none font-medium text-green-400 hover:text-green-500 transition-all duration-200'>Subcribe</button>
 </div>
 <div className='flex text-green-600 gap-4 pt-24'>
 <FaLinkedinIn className='text-xl cursor-pointer' />
 <FaInstagram className='text-xl cursor-pointer'/>
 <FaFacebook className='text-xl cursor-pointer'/>
 </div>
  </div>

  <div className='flex flex-col flex-wrap gap-4'>
<p className='text-gray-600 text-xl font-semibold'>How it works</p>
<p className='text-gray-600 text-xl font-semibold'>Features</p>
<p className='text-gray-600 text-xl font-semibold'>FAQ</p>
  </div>
  <div className='flex flex-col flex-wrap gap-4'>
<p className='text-gray-600 text-xl font-semibold'>Reviews</p>
<p className='text-gray-600 text-xl font-semibold'>We’re hiring</p>
<p className='text-gray-600 text-xl font-semibold'>Become a Supplier</p>
  </div>
  <div className='flex flex-col gap-4'>
<div className='flex gap-4 text-white'>
<IoLocationOutline className='text-2xl text-green-500'/>
<p>2810 North Church Street, Wilmington, DE, 19802</p>
</div>

<div className='flex gap-4 text-white'>
<MdOutlineWhatsapp className='text-2xl text-green-500'/>
<p>+1 302 8303060 ( USA )</p>
</div>
<div className='flex gap-4 text-white'>
<MdOutlineForwardToInbox className='text-2xl text-green-500'/>
<p>hello@markaz.app</p>
</div>
  </div>
</footer>
<hr className='bg-gray-600 mt-10'/>
<div className='flex items-center justify-center gap-4 py-2'>
  <small className='text-gray-600'>Copyright® 2022 Markaz Inc. Pakistan</small>
  <small className='text-gray-600 border-l-[1px] border-l-gray-600 pl-4'>Terms and Conditions</small>
  <small className='text-gray-600 border-l-[1px] border-l-gray-600 pl-4'>Privacy and Confidentiality</small>
</div>
</section>
      {/* Footer Section Enndd */}


    </>
  )
}

export default BecomeaSupplier;