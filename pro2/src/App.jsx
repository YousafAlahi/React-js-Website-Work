
import {Routes, Route} from "react-router-dom"
// import Navbar from "./Components/Navbar"
// import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Integrations from "./Pages/Integrations"
import Blog from "./Pages/Blog"
import Careers from "./Pages/Careers"
import BecomeaSupplier from "./Pages/BecomeaSupplier"
 import Navbarr from "./Components/Navbarr"




const App = () => {
  return (

    <div>
   {/* <Navbar/> */}
     <Navbarr/>  
   <Routes>
    {/* <Route path="/" element={<Home/>}></Route> */}
    <Route path="/" element={<Products/>}></Route>
    <Route path="/integrations" element={<Integrations/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/careers" element={<Careers/>}></Route>
    <Route path="/becomesupplier" element={<BecomeaSupplier/>}></Route>




   </Routes> 
      
    </div>
  )
}

export default App