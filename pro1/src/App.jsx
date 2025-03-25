
import {Routes, Route} from 'react-router-dom'
import Download from './Pages/Download';
import Referafriend from './Pages/Referafriend';
import Aboutus from './Pages/Aboutus';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
<Routes>
  <Route path="" element={<Home/>}></Route>
  <Route path="/download" element={<Download/>}></Route>
  <Route path="/referafriend" element={<Referafriend/>}></Route>
  <Route path="/aboutus" element={<Aboutus/>}></Route>
  <Route path="/Blog" element={<Blog/>}></Route>

</Routes>
    </div>
  )
}

export default App