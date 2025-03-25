
import { Link } from "react-router-dom"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Download1 from '../assets/download1.svg'
import Img1 from '../assets/forbes.svg';
import Img2 from '../assets/Entrepre.svg';
import Img3 from '../assets/yahoo.svg';
import Img4 from '../assets/Benzinga.svg';
import Img5 from '../assets/Hackernoon.svg';
import Img6 from '../assets/IBT.svg';
import Pic1 from '../assets/one.svg';
import Pic2 from '../assets/two.svg';
import Pic3 from '../assets/three.svg';
import Pic4 from '../assets/onevdo.png';
import Pic5 from '../assets/twovdo.png';
import Pic6 from '../assets/onevdo.png';
import FAQ from "../Pages/FAQ";

const ImgData = [
    {
        id: 1,
        image: Img1,
    },
    {
        id: 2,
        image: Img2,
    },
    {
        id: 3,
        image: Img3,
    },
    {
        id: 4,
        image: Img4,
    },
    {
        id: 5,
        image: Img5,
    },
    {
        id: 6,
        image: Img6,
    }
];

const MyData = [
    {
        id: 1,
        image: Pic1,
        title: "Flexible sharing",
        description:"Decide when you want to share and when to pause! You can always get back to earning"

    },
    {
        id: 2,
        image: Pic2,
        title: "Safety in every step",
        description:"We take various security measures to ensure your privacy while you use Honeygain!"

    },
    {
        id: 3,
        image: Pic3,
        title: "24/7 support",
        description:"Honeygain’s help desk is full of advice and our support team is ready to help you 24/7!"

    }
]




const Header = () => {
  return (
    <div>
<section className="container max-w-[1440px] w-full py-2 lg:py-4 md:h-[550px] h-[650px] bg-black text-white mt-2">
<div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 py-4 md:py-2">
        {/* Left Side Start */}
        <div className="flex flex-col gap-2">
          <div className="md:flex items-center gap-2 lg:pt-11">
            <h1 className="text-xl">Excellent</h1>
            <div className="flex flex-wrap gap-2">
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-700"><IoIosStar/></p>
              <p className="h-4 w-4 bg-green-600"><IoIosStarHalf /></p>
              </div>
            <p>18,183 reviews on</p>
            <p className="text-green-600"><IoIosStar/></p>
            <p>Trustpilot</p>
          </div>

          <div className="flex flex-col mt-6">
            <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl md:font-semibold md:py-6 py-2">Use your internet  <span className="text-yellow-400">bandwidth to earn extra cash</span></h1>
            <p>Start earning with Honeygain just by sharing your connection - no extra effort needed. Join now and get a $2 starting gift!</p>
            <p className="text-xl font-semibold md:py-4">Use code: get2</p>
            <Link to={""} ><button className='px-4 py-1 border-none bg-yellow-500 rounded-lg text-black cursor-pointer'>Download</button></Link>

          </div>
        </div>
        {/* Left Side End */}
        {/* Right Side Start */}
        <div className="flex items-center justify-center">
          <img src = {Download1} width={400} height={400}/>
        </div>
        {/* Right Side End */}  
      </div>
</section>



        <div className="h-[350px] lg:h-[250px] container">
            <h1 className="text-center py-12 text-xl md:text-2xl lg:text-3xl md:font-semibold">Seen on</h1>
            <div className="flex items-center justify-center flex-wrap md:gap-6">
               {ImgData.map((item)=> {
                return(
                    <div key={item.id}>
                        <img src={item.image} width={100} height={100}/>
                    </div>
                )
               })}
            </div>
    </div>

    <div className="h-[350px] lg:h-[250px] w-full container">
        <div>
            <h1 className="text-xlfont-semibold md:text-2xl lg:text-4xl md:font-bold text-center">Why choose Honeygain?</h1>
            <p className="text-center text-base py-2 lg:py-4">Honeygain offers many benefits to help you make money effortlessly!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {MyData.map((e)=>{
                return(
                    <div key={e.id}>
                        <img src={e.image} width={300} height={300}/>
                        <h1 className="text-xl md:text-2xl py-2 md:py-4 md:font-bold font-semibold text-center">{e.title}</h1>
                        <p className="text-base max-w-[400px] text-center">{e.description}</p>
                    </div>
                )
            })}
        </div>
       
        </div>
        {/* Button Section */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:max-h-screen md:mt-72">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Download
      </button>
    </div>
 {/* New Section is Start Now */}
     <div className="max-w-[1440px] w-full h-[350px] py-4 mt-8">
        <div className="hidden md:flex md:items-center md:justify-between container bg-gray-300 py-8">
            <div>
                <h1 className="text-xl md:text-2xl font-bold py-2">Trusted by millions <br/>worldwide</h1>
                <p className="text-center pb-11">Discover inspiring user stories and learn how to earn passive income by turning your unused data into cash with Honeygain. Start your own success story today!</p>
            </div>
            <div>
                <img src= {Pic4} width={300} height={300}/>
            </div>
            <div>
                <img src= {Pic5} width={300} height={300}/>
            </div>
            <div>
                <img src= {Pic6} width={300} height={300}/>
            </div>
        </div>
     </div>
 {/* New Section is End Now */}
<div className="max-w-[1440px] w-full h-[450px] bg-slate-200 lg:mt-10 md:p-6 mt-144">
<div className="hidden md:flex-1 md:flex md:items-center md:justify-center gap-4">
<div>
 <img src={Download1} width={400} height={400}/>
</div>
<div>
<h1 className="text-2xl md:text-3xl font-semibold py-4">Set it & forget it!</h1>
<p className="w-[500px] text-gray-600 pb-2">
Yes, it’s true! You can continuously make money with just a few clicks 
- employ your unused internet to turn it into cash.</p>
<p className="w-[500px] text-gray-600 py-6">
Simply download Honeygain on your device and start earning! The app will silently run in the background of your device and you’ll get paid.</p>
<button className="w-[300] bg-blue-700 px-12 text-center text-white py-2 rounded-lg hover:bg-blue-500">Download</button>
 </div>
</div>
</div>
{/* FAQ Components Start */}

<FAQ/>
{/* FAQ Components EEnDD */}

</div>
  )
}

export default Header