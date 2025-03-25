

import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { FaKaggle } from "react-icons/fa6";
import { GiFullWoodBucket } from "react-icons/gi";



const Footer2 = () => {
  return (
    <>
    <div className="">
        <section className="bg-gray-900 text-amber-50 overflow-x-hidden">

            <div className="flex justify-center items-center py-6 gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-500">
                <BiLogoFacebookCircle className="items-center" />
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center hover:bg-sky-300">
                <FaTwitter />
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center hover:bg-purple-300">
                <PiInstagramLogo />
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-400">
                <FaYoutube />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center hover:bg-gray-300">
                <IoWifiOutline />
                </div>
            </div>


            <div className="flex justify-center items-center pt-6 gap-2">
                <ul className="flex gap-2">
                    <small>Sitemap</small>
                    <small>About</small>
                    <small>Accessibility</small>
                    <small>Privacy</small>
                    <small>Terms of Use</small>
                </ul>
            </div>
            
            <div className="flex justify-center items-center pt-2 gap-2">
                <ul className="flex gap-2">
                    <small>Advertising</small>
                    <small>Job</small>
                </ul>
            </div>
            <div className="flex justify-center items-center pt-2 gap-2">
                <ul className="flex gap-2">
                    <small>Reprints & Permissions</small>
                   
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center pt-6">
            <small>More from our network</small>
                 <ul className=" flex gap-2 pt-1">
                   <small><FaKaggle /></small>
                   <small className="font-bold">QZ</small>
                   <small className="font-bold">R</small>
                    <><GiFullWoodBucket /></>
                </ul>
            </div>

            <div className="flex justify-center items-center pt-2 gap-2">
                <ul className="flex pb-4">
                    <small>© 2025 G/O Media</small>
                   
                </ul>
            </div>
            <div className="py-2">
            <hr className="bg-white"/>
            </div>
        </section>

        </div>
    </>
  )
}

export default Footer2