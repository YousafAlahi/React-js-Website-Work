
import F1 from "../assets/logo1.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
<section className="container max-w-[1440px] w-full py-6 lg:py-12 bg-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
   <div className="flex flex-col flex-wrap gap-4">
   <div className="flex gap-3 items-center">
        <img src={F1} width={30} height={30}/>
        <h1 className="text-xl lg:text-4xl lg:font-extrabold font-mono">Markaz </h1>
    </div>
    <div>
        <p className="w-[300px] pb-8"><small>Markaz is bringing the social commerce revolution to Pakistan. We are a marketplace where you find some of the best products that your customers need.</small></p>
    </div>
    <div className="flex gap-4">
        <input type="email"
        placeholder="Your email"
         className="border-2 border-gray-400 rounded-lg p-1 focus:border-blue-500 focus:border-2"/>
        <button className="bg-green-400 px-6 py-2 text-black rounded-xl hover:bg-green-300">Subcribe</button>
    </div>
    {/* Empty Div for */}
</div><div>
    {/* Empty Div for */}

</div>
    <div className="flex flex-col flex-wrap gap-4">
        <p className="hover:cursor-pointer hover:text-gray-700">About</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Blog</p> 
        <p className="hover:cursor-pointer hover:text-gray-700">Careers</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Dropshipping</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Reseller</p>
    </div>
    <div className="flex flex-col flex-wrap gap-4">
        <p className="hover:cursor-pointer hover:text-gray-700">We’re hiring</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Terms and Conditions</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Privacy and Confidentiality</p>
    </div>

</div>

<div className="max-w-[1440px] w-full py-6 lg:py-12 bg-gray-100">
<div className='flex flex-col gap-2 justify-center'>
<div className='flex gap-2 text-black'>
<IoLocationOutline className='text-black'/>
<p>2810 North Church Street, Wilmington, DE, 19802</p>
</div>

<div className="flex gap-2 text-black">
<FaFacebookF className="text-black" />
<p>Facebook</p>

</div>
<div className='flex gap-2 text-black'>
<MdOutlineWhatsapp className='text-black'/>
<p>+1 302 8303060 ( USA )</p>
</div>
<div className='flex gap-2 text-black'>
<MdOutlineForwardToInbox className='text-black'/>
<p>hello@markaz.app</p>
</div>
</div>

</div>
<div className="max-w-[1440px] w-full py-6 lg:py-8 bg-gray-100 flex items-center justify-between cursor-pointer flex-wrap">
    <div><p><small>Copyright® 2022 Markaz Inc. Pakistan</small></p></div>
    <div className="flex gap-4">
    <FaFacebookF className="text-black text-xl" />
    <FaInstagramSquare className="text-xl"/>
    <FaLinkedinIn className="text-xl"/>

    </div>
</div>
</section>
  )
}

export default Footer