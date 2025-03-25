

import Img2 from '../assets/bb1.png'
import Img3 from '../assets/bb2.png'
import Img4 from '../assets/bb3.png'
import Img5 from '../assets/bb4.png'
import { CiSearch } from "react-icons/ci";

import Img6 from '../assets/img10.png'
import Img7 from '../assets/img15.png'
import Img8 from '../assets/img11.png'
import Img9 from '../assets/img12.png'
import Img10 from '../assets/img14.png'
import Img11 from '../assets/pro1.png'
import Img12 from '../assets/pro2.png'
import Img13 from '../assets/pro3.png'
import Img14 from '../assets/pro4.png'
import Img15 from '../assets/p2.jpeg'
import Img16 from '../assets/p3.png'
import Img17 from '../assets/p4.jpeg'
import Img18 from '../assets/p5.jpeg'

import Img19 from '../assets/product_3.png';
import Img20 from '../assets/product_7.png';
import Img21 from '../assets/product_5.png';

import Img22 from '../assets/product_8.png';
import Img23 from '../assets/product_9.png';
import Img24 from '../assets/product_10.png';

import Img25 from '../assets/product_11.png';
import Img26 from '../assets/product_12.png';
import Img27 from '../assets/product_13.png';

import Img28 from '../assets/product_14.png';
import Img29 from '../assets/product_15.png';
import Img30 from '../assets/product_16.png';
import Pic1 from '../assets/p4.jpeg';




const Data1 = [
    {
        id: 1,
        image: Img2,
        title: "Heal Your Marvel Rivals Team With Luna Snow is Ice Abilities And Upbeat K-Pop",
        name: "Samuel Moreno",
    },
    {
        id: 2,
        image: Img3,
        title: "How To Smash Enemies To Bits With The Hulk In Marvel Rivals",
        name: "Samuel Moreno",
    },
    {
        id: 3,
        image: Img4,
        title: "How To Unlock Every Character In Metal Slug Tactics",
        name: "Brian Barnett",
    },
    {
        id: 4,
        image: Img5,
        title: "How To Unlock Ascendancy Classes In Path Of Exile 2",
        name: "Brandon Morgan",
    },

]


const Data2 = [
    {
        id: 5,
        name: "image1",
        src: Img6,
        title: "Eternal Return",
        subtitle: "Nimble Neuron",
    },
    {
        id: 6,
        name: "image2",
        src : Img7,
        title: "Diablo IV",
        subtitle: "Blizzard Entertainment",
    },
    {
        id: 7,
        name: "image3",
        src: Img8,
        title: "Planet Crafter",
        subtitle: "Miju Games",
    },
    {
        id: 8,
        name: "image4",
        src: Img9,
        title: "The Last Faith",
        subtitle: "Kumi Souls Games",
    },
    {
        id: 9,
        name: "image5",
        src: Img10,
        title: "The Legend of Zelda: Tears of the Kingdom",
        subtitle: "Nintendo EPD Production Group No. 3",
    },

]


const Data3 = [
    {
        id: 10,
        image: Img11,
        title: "Captain America: Brave New World Reviews: A Messy And Unnecessary MCU Sequel",
        name: "Zack Zwiezen",
    },
    {
        id: 11,
        image: Img12,
        title: "Every Quentin Tarantino Movie, Ranked By Rewatchability",
        name: "Keith Nelson Jr",
    },
    {
        id: 12,
        image: Img13,
        title: "Did You Catch The PlayStation Reference In Kendrick Lamar’s Halftime Show?",
        name: "Kenneth Shepard",
    },
    {
        id: 13,
        image: Img14,
        title:"Remember When Selling Out Was A Bad Thing?",
        name: "Zack Zwiezen",
    },

]



const Data4 = [
    {
        id: 14,
        image: Img15,
        newz : "Superhero",
        title: "Our First Look At The Fantastic Four: First Steps",
        name: "John Walker",
    },
    {
        id: 15,
        image: Img16,
        newz : "News",
        title: "Metal Gear Solid Delta: Snake Eater's Release Date Accidentally Announced",
        name: "John Walker",
    },
    {
        id: 16,
        image: Img17,
        newz : "News",
        title: "Assassin's Creed Shadows Delayed Again",
        name: "Zack Zwiezen",
    },
    {
        id: 17,
        image: Img18,
        newz : "Superhero",
        title:"Daredevil: Born Again's New Trailer Complicates Wilson Fisk and Matt Murdock's Relationship",
        name: "Keith Nelson Jr",
    },

]

const Row1 = [
    {
        id: 18,
        image:Img19,
        title: "Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?"
    },
    {
        id: 19,
        image:Img20,
        title: "Avowed: The Kotaku Review"
    },
    {
        id: 20,
        image:Img21,
        title: "GameCube That Can't Play Games On Sale For $100,000"
    },
    {
        id: 21,
        image:Img22,
        title: "Where Does Red Hulk Land In The Canon Of The Most Badass Action Movie Presidents?"
    },
    {
        id: 22,
        image:Img23,
        title: "Citizen Sleeper 2: The Kotaku Review"
    },
    {
        id: 23,
        image:Img24,
        title: "Former PlayStation Boss Played Company's First Game On Scrapped Nintendo Console"
    },
    {
        id: 24,
        image:Img25,
        title: "GameCube That Can't Play Games On Sale For $100,000"
    },
    {
        id: 25,
        image:Img26,
        title: "Avowed: The Kotaku Review"
    },
    {
        id: 26,
        image:Img27,
        title: "GameCube That Can't Play Games On Sale For $100,000"
    },
    {
        id: 27,
        image:Img28,
        title: "GameCube That Can't Play Games On Sale For $100,000"
    },
    {
        id: 28,
        image:Img29,
        title: "Citizen Sleeper 2: The Kotaku Review"
    },
    {
        id: 29,
        image:Img30,
        title: "GameCube That Can't Play Games On Sale For $100,000"
    }
]



const DynaHome = () => {
  return (
    <>
    <section className="container bg-gray-100">
    <div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Tips & Guides</h1>
        <li className='pt-3'>View all</li>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data1.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={210} className='object-fit'/>
                    <div>
                        <small className='py-4 font-semibold'>{item.title}</small>
                        <p className='text-gray-500'>{item.name}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

    </section>

    {/* 2nd Section Start */}
    
    <section className="container bg-gray-100">
    <div className='flex justify-between'>
        <div className='flex gap-4'>
            <h3 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Top Games</h3>
            <li className='pt-3'>View all</li>
        </div>

        <div className='relative'>
        <CiSearch className='absolute top-3 left-2 text-[16px]'/>
        <input type='text'
        placeholder='Search all games'
        className='pl-6 border-4 border-gray-300 focus:outline-none w-64 py-[2px]'
        />

        </div>
    </div>

    {/* Arrays Data */}
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-4 gap-4'>
        {Data2.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.src} width={180} className='object-fit w-full h-[300px]'/>
                    <div>
                        <h3 className='py-2 font-semibold text-red-800 underline'>{item.title}</h3>
                        <p className='text-gray-500'>{item.subtitle}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}
    </section>

    {/* 2nd Section End */}
    {/* 3rd Section Start */}

<section className="container bg-gray-100">
<div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Entertainment</h1>
        <li className='pt-3'>View all</li>
    </div>
     {/* Arrays Data */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data3.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={210} className='object-fit pb-4'/>
                    <div>
                        <small className='font-medium'>{item.title}</small>
                        <p className='text-gray-500'>{item.name}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

</section>
    {/* 3rd Section End */}
  {/* 4th Section Start */}

<section className="container bg-gray-100">
<div className='flex gap-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Future Releases</h1>
        {/* <li className='pt-3'>View all</li> */}
    </div>
     {/* Arrays Data */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
        {Data4.map((item) =>{
            return(
                <div key={item.id} className='flex flex-col'>
                    <img src={item.image} width={210} className='object-fit pb-2'/>
                    <p className='py-2 text-red-700'>{item.newz}</p>
                    <div>
                        <small className='font-medium'>{item.title}</small>
                        <p className='text-gray-500'>{item.name}</p>
                    </div>

                </div>
            )
        })}
    </div>
    {/* Array End */}

</section>
    {/* 4th Section End */}

    {/* 5th Section Start */}

<section className="container bg-gray-100 pt-8">
<div className='flex justify-between'>
<div><h1 className='text-2xl lg:text-3xl lg:font-bold font-normal text-red-800'>Future Releases</h1></div> 
<div><h1 className='text-2xl lg:text-3xl lg:font-bold font-normal text-red-800'>Reviews</h1></div>       
<div><h1 className='text-2xl lg:text-3xl lg:font-bold font-normal text-red-800'>Retro</h1></div>  

       {/* <li className='pt-3'>View all</li> */}
    </div>

     {/* Arrays Data */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8'>
       {Row1.map((item) =>{
        return(
            <div key={item.id} className='flex justify-between px-3'>
               <div className='border-b-2 border-amber-400 flex justify-between items-start py-4'>
               <img src= {item.image} width={70} height={100}/>
               <h6 className='text-base font-semibold'>{item.title}</h6>
               </div>
            </div>
        )
       })}
    </div>
    {/* Array End */}

</section>
    {/* 5th Section End */}
     
<section className="container bg-gray-100 lg:py-10">
<div className='flex gap-4 pb-4'>
        <h1 className='text-2xl lg:text-4xl lg:font-bold font-normal text-red-800'>Kotaku Video</h1>
        <li className='pt-3'>View all</li>
    </div>
     {/* Arrays Data */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-4 gap-4  bg-gradient-to-r from-gray-500 to-yellow-600'>
       <div className='p-2'>
        <img src={Pic1}/>
        <h4 className='text-xl font-bold text-white hover:underline'>Live Forever in the Universe of New World: Aeternum</h4>
       </div>

       <div >
       <div className='bg-slate-900/20 flex justify-between p-1 mt-2'>
        <p className='text-white'>icons Director and Proud Nerd Kevin Smith On Sneaking Into Movies , Mallrate, And More</p>
        <img src={Img3} width={100}/>
       </div>
       <div className='bg-slate-900/20 flex justify-between p-1 mt-2'>
        <p className='text-white'>Where To Buy New Outfits And Charms In Mika And The Witch is Mountain</p>
        <img src={Img4} width={100}/>
       </div>
       <div className='bg-slate-900/20 flex justify-between p-1 mt-2'>
        <p className='text-white'>icons Director and Proud Nerd Kevin Smith On Sneaking Into Movies , Mallrate, And More</p>
        <img src={Img5} width={100}/>
       </div>
       <div className='bg-slate-900/20 flex justify-between p-1 mt-2'>
        <p className='text-white'>Obsidian Has Quietly Become Xbox is Secret Weapon</p>
        <img src={Img6} width={100}/>
       </div>
       </div>
    </div>
    {/* Array End */}

</section>

    </>
  )
}

export default DynaHome
