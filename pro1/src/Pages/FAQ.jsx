

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const faqData = [
  {
    question: "What is Honeygain?",
    answer:"Honeygain is a passive income app that lets you earn money from your unused internet bandwidth. All you have to do is download our app and keep it open to start earning! We ensure maximum security in every step and provide transparent communication about our processes. You can rest easy while using Honeygain to make passive income!",
  },
  {
    question: "How does Honeygain work?",
    answer:"By sharing your unused internet with Honeygain, you help our verified business partners perform data-intensive tasks like price comparison, ad verification and more! The best part? You’ll get compensated for making the web a better place.",
  },
  {
    question: "How do you use Honeygain?",
    answer:"You can start earning passive income with a few clicks. Download the Honeygain app, register and share your unused internet! Remember to keep the app running in the background and make money effortlessly.",
  },
  {
    question:"How much internet does Honeygain use?",
    answer:"Don’t worry -- our bees allow you to set up limits on how much internet you want to share! Whether it’s 250MB or 30GB, you can track your shared internet or go to the Setting menu and set the limits. Also, Honeygain has no daily cap on how much you want to share — your earning potential is unlimited, so share unused internet 24/7 if you wish!",
  },
 
];

const FAQ = () => {

  
    const [active, setActive] = useState(null);

  
    const handleClick = (index) => {
      setActive(index === active ? null : index);
    };
  

  return (
    <>
       <div className="max-w-2xl mx-auto mt-36 md:mt-12 mb-16 px-8">
           <h1 className="text-3xl font-bold text-center pb-8">
             Frequently Asked Questions
           </h1>
       
           {faqData.map((item, index) => (
             <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
               <div
                 className="flex justify-between items-center cursor-pointer py-4"
                 onClick={() => handleClick(index)}
               >
                 <h3 className="text-xl font-semibold text-gray-800">
                   {item.question}
                 </h3>
                 <span>{active === index ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
               </div>
       
               {active === index && <p className="text-gray-600">{item.answer}</p>}
             </div>
           ))}
       
         </div> 
    </>
  )
}

export default FAQ