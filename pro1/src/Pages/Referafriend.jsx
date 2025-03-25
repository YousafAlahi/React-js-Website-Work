import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Refer1 from "../assets/refer1.svg";
import Refer2 from "../assets/refer2.svg";
import Refer3 from "../assets/refer3.svg";
import Refer4 from "../assets/refer4.svg";
import Refer5 from "../assets/refer5.svg";
import Refer6 from "../assets/refer6.svg";
import Refer7 from "../assets/refer7.svg";
import Refer8 from "../assets/refer8.svg";
import Refer9 from "../assets/refer9.svg";
import Footter from "../Components/Footter";
// import Footer from "../Components/Footer";




const ImgData1 =[
  {
    id: 1,
    image: Refer3,
    title: "Refer a friend",
    description: "Copy your referral code and share it with your friends to join our referral program!"
  },
  {
    id: 2,
    image: Refer4,
    title: "Friend joins",
    description: "Your friend will get $3 for free by signing up with your unique referral code."
  },
  {
    id: 3,
    image: Refer5,
    title: "Claim rewards",
    description: "Gather $5 every time your friends progress to the $20 payout threshold."
  }
]


const ImgData2 = [
  {
    id: 7,
    image: Refer6,
    name: "Transparency leads to better security",
    subtitle: "As Honeygain is an innovator of the industry, we constantly communicate with our users regarding crucial information.",
  },
  {
    id: 8,
    image:Refer7,
    name: "Users’ data is protected & secure",
    subtitle: "Your data is protected by regulations and our app’s infrastructural security measures.",
  },
  {
    id: 9,
    image:Refer8,
    name: "Every business partner is verified",
    subtitle: "Honeygain partners with notable businesses that go through a rigorous verification process.",
  },
  {
    id: 10,
    image:Refer9,
    name: "Honeygain never asks for permissions",
    subtitle: "The app never accesses any of your personal data and doesn’t ask for permissions, so your information is secure!",
  },
]


const Referafriend = () => {
  return (
   <>
   <Navbar/>

               {/* Hero Section Start */}
   
   <section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[500px] md:h-[650] h-[650px] bg-sky-100/50 text-black mt-2">
<div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 py-4 md:py-2">

          <div className="flex flex-col mt-6">
 <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl md:font-semibold md:py-10 py-2">Refer a friend & collect $5</h1>
            <p className='py-4 leading-loose'>Invite a friend to join Honeygain and receive rewards! You will accumulate $5 every time your friends reach the $20 payout threshold. </p>
            <Link to={""} className='relative top-0 left-0 mt-4'>
            <button className='px-10 py-4 border-none bg-blue-500 rounded-lg text-white cursor-pointer'>Refer a friend</button></Link>

          </div>
          <div className="flex items-center justify-center">
          <img src = {Refer1} width={400} height={400}/>
        </div>
        </div>
       
</section>

                           {/* Hero Section EEndd */}
                          {/* 2nd Section Start Now  */}

<section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-sky-100 lg:h-[450px] h-[600px] md:mt-24 lg:mt-0'>
          <div className='flex items-center justify-center md:flex-col-2 lg:flex-col-2 gap-2 flex-wrap'>
            <div>
              <img src={Refer2} width={350} height={350}/>
            </div>
            <div className='w-[600px]'>
                <h1 className='text-xl lg:text-4xl md:text-2xl font-medium md:font-semibold py-8'>
                Invite friends and earn money together!</h1>
                <p className='text-base'>
                Honeygain lets you make money from the comfort of your couch — why don’t you share this joy with others? Your friends will get <span className="font-bold">$3 upon signing up</span>, and you will gather $5 from all traffic they share each time they reach the $20 payout threshold.</p>
              </div>
             
            </div>
</section>
                                              {/* 2nd Section End  */}
                                          {/* 3rd Section Start Now  */}
<section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-slate-200 lg:h-[550px] md:h-[600px] h-[1150px]'>
<h1 className='text-xl md:text-2xl lg:text-3xl md:font-semibold font-medium text-center py-12'>How it works?</h1>
  <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center py-6 '>
          {ImgData1.map((item)=>{
            return(
              <div key={item.id}>
              <div className='flex items-center justify-center'>
              <img src={item.image} width={200} height={200}/>
              </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <h3 className='text-xl md:text-2xl font-semibold'>{item.title}</h3>
                  <p className='w-[250px] text-center'>{item.description}</p>
                </div>
              </div>
            )
          })}

  </div>
  
  <div className="hidden md:container md:flex md:items-center md:justify-center md:h-1/3 bg-slate-200">
      <button className="px-4 py-2 w-1/4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Refer a friend
      </button>
    </div>      
</section>
 

                                           {/* 3rd Section End  */}
                                          {/* 4th Section End  */}

<section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[400px] md:h-[700] h-[950px] text-black mt-2 lg:mt-24 bg-sky-100/50">

<h1 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold pt-4 pb-8 text-center'>Ensuring safety in every step</h1>
<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-between place-self-center gap-4'>
  {ImgData2.map((list)=>{
    return(
      <div key={list.id} className='border-2 border-slate-600 p-4 rounded-2xl'>
        <div className='flex flex-col gap-4 py-6 '>
          <img src={list.image} width={50} height={50} className='rounded-full'/>
          <div>
            <p className='text-black font-semibold'>{list.name}</p>
            <small className='text-slate-600'>{list.subtitle}</small>
            </div>
           </div>
        </div>
     

    ) 
  })}
</div>

{/* 
<div className="hidden md:container md:flex md:items-center md:justify-center md:h-1/3 bg-sky-100/50">
      <button className="px-4 py-2 w-1/4 border-2 border-blue-500 text-blue-500 rounded">
        See all safety measures
      </button>
    </div> 
 */}

</section> 

  {/* 4th Section End  */}

{/* <Footer/> */}
<Footter/>
   </>
  )
}

export default Referafriend