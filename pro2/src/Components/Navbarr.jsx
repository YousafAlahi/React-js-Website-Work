

import Logo1 from "../assets/logo1.png"
import { Link } from "react-router-dom"
import Menu from "./Memu"
const Navbarr = () => {
  return (
   <>
<section className="container max-w-[1440px] w-full py-2 bg-gray-300/50 relative">

<div className="flex gap-8 ">
    {/* Logo Section */}
    <div className="flex gap-3">
        <img src={Logo1} width={50} height={50}/>
        <h1 className="text-2xl font-bold text-gray-700 mt-3">Markaz</h1>
    </div>
    {/* Menu Section */}
    
      {/* Navbar Links - Desktop */}
      <div className="hidden lg:flex space-x-4 p-4">
      <Link to={""}><li className="list-none text base">Products</li></Link>
            <Link to={"integrations"}><li className="list-none text base hover:text-gray-600 transition-all duration-300">Integrations</li></Link>
            <Link to={"blog"}><li className="list-none text base hover:text-gray-600 transition-all duration-300">Blog</li></Link>
            <Link to={"careers"}><li className="list-none text base hover:text-gray-600 transition-all duration-300">Careers</li></Link>
            <Link to={"becomesupplier"}><li className="list-none text base hover:text-gray-600 transition-all duration-300">BecomeaSupplier</li></Link>
      </div>
      
</div>
<div className="hidden lg:block absolute top-3 right-4">
    <button className="bg-green-300 px-4 py-1 rounded-full hover:bg-green-400">Start Selling Now</button>
</div>
<Menu/>
</section>
   </>
  )
}

export default Navbarr