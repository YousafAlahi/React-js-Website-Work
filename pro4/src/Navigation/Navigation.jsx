
import './Nav.css';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";


const Navigation = () => {
  return (
   <nav>
        <div className='nav-container'>
          <input 
          type='text'
           placeholder='Enter your search Shoes' 
           className='search-input'

           />
 </div>
 
<div className='profile-container'>
  <a href='#' className='nav-icons'>
  <FiHeart />
  </a>
  <a href='#' className='nav-icons'>
  <AiOutlineShoppingCart />
  </a>
  <a href='#' className='nav-icons'>
  <AiOutlineUserAdd />
  </a>
 </div>

       
   </nav>
  )
}

export default Navigation
