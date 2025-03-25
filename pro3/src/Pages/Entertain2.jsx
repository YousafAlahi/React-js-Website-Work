

import Img2 from '../assets/bb1.png'
import Img3 from '../assets/bb2.png'
import Img4 from '../assets/bb3.png'
import Img5 from '../assets/bb4.png'
// import { CiSearch } from "react-icons/ci";


import Img6 from '../assets/img10.png'
import Img7 from '../assets/img15.png'
import Img8 from '../assets/img11.png'
import Img9 from '../assets/img12.png'
import Img10 from '../assets/img14.png'
import Img11 from '../assets/pro1.png'
import Img12 from '../assets/pro2.png'
import Img13 from '../assets/pro4.png'

import Img14 from '../assets/p2.jpeg'
import Img15 from '../assets/p3.png'
import Img16 from '../assets/p4.jpeg'
import Img17 from '../assets/p5.jpeg'



const Data1 = [
    {
        id: 1,
        image: Img2,
        title: "Jeff Bezos Asks Who Should Be The Next James Bond After Franchise Producers Relinquish Creative Control",
       
    },
    {
        id: 2,
        image: Img3,
        title: "Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?",
        
    },
    {
        id: 3,
        image: Img4,
        title: "Watch Homelander Audition To Be James Bond As Fans Joke: 'Breast Milk, Squeezed Not Pumped'",
      
    },
    {
        id: 4,
        image: Img5,
        title: "Jurassic World Rebirth's First Trailer Looks Very Promising",
      
    },

]


const Data2 = [
    {
        id: 5,
        image: Img6,
        title:"Deadpool & Wolverine Director Working On Live-Action D&D Netflix Show"
    },
    {
        id: 6,
        image: Img7,
        title: "One Of 2025's Biggest RPGs Gets A Movie Deal Before It's Even Released",
        
    },
    {
        id: 7,
        image: Img8,
        title: "Iconic Muppet Masterpiece Labyrinth Is Getting A Sequel From Horror Filmmaker Behind Nosferatu",
      
    },
    {
        id: 8,
        image: Img9,
        title: "Ryan Gosling Reportedly In Talks To Lead New Star Wars Movie",
      
    },

]

const Data3 = [
    {
        id: 9,
        image: Img10,
        title: "Jeff Bezos Asks Who Should Be The Next James Bond After Franchise Producers Relinquish Creative Control",
       
    },
    {
        id: 10,
        image: Img11,
        title: "Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?",
        
    },
    {
        id: 11,
        image: Img12,
        title: "Watch Homelander Audition To Be James Bond As Fans Joke: 'Breast Milk, Squeezed Not Pumped'",
      
    },
    {
        id: 12,
        image: Img13,
        title: "Jurassic World Rebirth's First Trailer Looks Very Promising",
      
    },

]


const Data4 = [
    {
        id: 13,
        image: Img14,
        title: "Jeff Bezos Asks Who Should Be The Next James Bond After Franchise Producers Relinquish Creative Control",
       
    },
    {
        id: 14,
        image: Img15,
        title: "Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?",
        
    },
    {
        id: 15,
        image: Img16,
        title: "Watch Homelander Audition To Be James Bond As Fans Joke: 'Breast Milk, Squeezed Not Pumped'",
      
    },
    {
        id: 16,
        image: Img17,
        title: "Jurassic World Rebirth's First Trailer Looks Very Promising",
      
    },

]

const Entertain2 = () => {
  return (
   <>
<div className='relative'>

{/* 1st Section Start */}
<section className="w-[1100px] ml-[100px] mr-[100px] absolute top-[880px] overflow-hidden">
    <div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Action</h1>
        <li className='pt-3'>Show all</li>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data1.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={250} className='object-fit'/>
                    <div>
                        <p className='py-4 font-bold'>{item.title}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

    </section>

{/* 1st Section EEnnDD */}


{/* 12nd Section Start */}
<section className="w-[1100px] ml-[100px] mr-[100px] absolute top-[1230px] overflow-hidden">
    <div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Fantasy</h1>
        <li className='pt-3'>Show all</li>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data2.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={250} className='object-fit'/>
                    <div>
                        <p className='py-4 font-bold'>{item.title}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

    </section>

{/* 2nd Section EEnnDD */}


{/* 3rd Section Start */}
<section className="w-[1100px] ml-[100px] mr-[100px] absolute top-[1570px] overflow-hidden">
    <div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Horror</h1>
        <li className='pt-3'>Show all</li>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data3.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={250} className='object-fit'/>
                    <div>
                        <p className='py-4 font-bold'>{item.title}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

    </section>

{/* 3rd Section EEnnDD */}

{/* 3rd Section Start */}
<section className="w-[1100px] ml-[100px] mr-[100px] absolute top-[1900px] overflow-hidden">
    <div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Sci-Fi</h1>
        <li className='pt-3'>Show all</li>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data4.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={250} className='object-fit'/>
                    <div>
                        <p className='py-4 font-bold'>{item.title}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

    </section>

{/* 3rd Section EEnnDD */}

</div>
   </>
  )
}

export default Entertain2
