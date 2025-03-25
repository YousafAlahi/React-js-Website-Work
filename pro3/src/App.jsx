
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Latest from './Pages/Latest';
import Entertainment from './Pages/Entertainment';
import Reviews from './Pages/Reviews';
import News from './Pages/News';
import Games from './Pages/Games';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <>  
<section className="max-w-[1440px] w-full bg-black text-white">
 <ul className="flex justify-center">
<li className="px-2 text-sm text-gray-300 py-2 hover:bg-gray-700">KOTAKU</li>
<li className="px-2 text-sm text-gray-300 py-2 hover:bg-gray-700">KUARTZ</li>
<li className="px-2 text-sm text-gray-300 py-2 hover:bg-gray-700">THE ROOT</li>
<li className="px-2 text-sm text-gray-300 py-2 hover:bg-gray-700 border-l-2 border-gray-700 border-width-[2px]">THE INVENTORY</li>
 </ul>
</section>
    
<Navbar/>

<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/latest' element={<Latest/>}></Route>
<Route path='/entertainment' element={<Entertainment/>}></Route>
<Route path='/reviews' element={<Reviews/>}></Route>
<Route path='/news' element={<News/>}></Route>
<Route path='/games' element={<Games/>}></Route>

      </Routes>
    </>
  )
}

export default App