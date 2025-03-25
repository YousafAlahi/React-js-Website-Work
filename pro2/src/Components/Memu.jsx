import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
    <button
      className="absolute -top-8 right-0 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <IoClose className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
    </button>
    {isOpen && (
      <div
        // initial={{ x: '100%' }}
        // animate={{ x: 0 }}
        // exit={{ x: '100%' }}
        // transition={{ duration: 0.3 }}
        // className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-40 p-4"
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } fixed z-20 inset-x-0 left-2 w-72 bg-white rounded-xl text-black transform transition-transform duration-200 ease-in-out lg:translate-x-0`}
      >
        {/* <div className="flex justify-end mb-4">
           <button onClick={() => setIsOpen(false)}>
            <IoClose className="w-6 h-6" />
          </button> 
        </div> */}
        <nav>
          <ul className="space-y-4 flex flex-col items-center gap-4 p-4">
          <Link to={""}>
              <li className="text-lg font-medium hover:text-blue-500">
              Products
              </li>
            </Link>
            <Link to={"integrations"}>
              <li className="text-lg font-medium hover:text-blue-500">
              Integrations
              </li>
            </Link>
            <Link to={"blog"}>
              <li className="text-lg font-medium hover:text-blue-500">
                Blog
              </li>
            </Link>
            <Link to={"careers"}>
              <li className="text-lg font-medium hover:text-blue-500">
                Careers
              </li>
            </Link>
            <Link to={"becomesupplier"}>
              <li className="text-lg font-medium hover:text-blue-500">
              BecomeaSupplier
              </li>
            </Link>
          </ul>
          <div className="block lg:hidden ml-16 py-4">
    <button className="bg-green-300 px-4 py-1 rounded-full hover:bg-green-400">Start Selling Now</button>
</div>

        </nav>
      
      </div>
    )}
  </div>
  );
};

export default Menu;
