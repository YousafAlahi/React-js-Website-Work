
import Img1 from '../assets/bb6.png'
import Img2 from '../assets/bb1.png'
import Img3 from '../assets/bb2.png'
import Img4 from '../assets/bb3.png'
import Img5 from '../assets/bb4.png'
import Img6 from '../assets/img10.png'
import Img7 from '../assets/img15.png'
import Img8 from '../assets/img11.png'
import Img9 from '../assets/img12.png'
import Img10 from '../assets/img14.png'
import Img11 from '../assets/img15.png'
import DynaHome from './DynaHome'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <>
      <section className="max-w-[1440px] w-full h-[530px] bg-gray-100 py-6 px-6">
        <div className='lg:px-36 flex'>
                    {/*  Left side */}

          <div>
            <div>
              <img src={Img1} width={400}/>
            </div>
            <div>
             <h1 className='text-normal lg:text-xl font-semibold lg:font-bold py-4'>Marvel Rivals May Have Just Set A <br/> Record For Responding To Angry Fans As <br/> It Abandons Controversial Reset</h1>
             <small className='text-gray-700'>The comic book hero shooter has abandoned a planned mid-season rank reset</small>
            </div>
          </div>

            {/*  Right side */}
          <div className='flex flex-col flex-wrap'>

              <div className='flex justify-center gap-4'>
                <div>
                  <img src={Img2} width={250} height={200} className='object-fill'/>
                  <h1 className='text-base font-medium py-2'>The Switch 2 Should not Lock<br/> Classic Nintendo Games Behind <br/> A Subscription Paywall</h1>
                </div>

                <div>
                <img src={Img3} width={250} height={100} className='object-fill'/>
                <h1 className='text-base font-medium py-2'>These 11 Super Bowl LIX <br/> Commercials Should Just Be TV<br/> Shows</h1>
                </div>
              </div>

              
              <div className='flex justify-center space-x-6 space-y-6'>
                <div>
                  <img src={Img4} width={250} height={100} className='object-fill'/>
                  <h1 className='text-base font-medium py-2'>From What s Out To What s<br/> Coming: 17 Cool Games We are<br/> Checking Out In February</h1>
                </div>

                <div>
                <img src={Img5} width={250} height={100} className='object-fill'/>
                <h1 className='text-base font-medium py-2'>From What s Out To What s<br/> Coming: 17 Cool Games We are<br/> Checking Out In February</h1>
                </div>

              </div>


          </div>
        </div>
       
      </section>
       {/* Section 2 Start */}
       <section className="max-w-[1440px] w-full h-[400px] bg-gray-100 py-2 px-6">
      <div className='px-36'>
      <hr className=''/>

      <div className='flex py-4 justify-between'>
        <div className='flex gap-4'>
          <img src={Img6} width={150} height={100}/>
          <p className='text-base font-medium'>Image for Marvel Rivals May Have Just Set A  <br/> Record For Responding To Angry Fans As It Abandons <br/> Controversial Reset</p>
        </div>

        <div className='flex gap-4'>
          <img src={Img7} width={150} height={100}/>
          <p className='text-base font-medium'>Civilization 7 Gets Launch Day<br/> Update To Address Sea Of  Early Complaints</p>
        </div>
        <div className='flex gap-4'>
          <img src={Img8} width={150} height={100}/>
          <p className='text-base font-medium'>Image for Remember When <br/> Selling Out Was A  Bad Thing?</p>
        </div>
     
      </div>
      {/* 2nd Row Start */}
      <div className='flex py-4 justify-between'>
        <div className='flex gap-4'>
          <img src={Img9} width={150} height={100}/>
          <p className='text-base font-medium'>Image for Marvel Rivals May Have Just Set A  <br/> Record For Responding To Angry Fans As It Abandons <br/> Controversial Reset</p>
        </div>

        <div className='flex gap-4'>
          <img src={Img10} width={150} height={100}/>
          <p className='text-base font-medium'>Civilization 7 Gets Launch Day<br/> Update To Address Sea Of  Early Complaints</p>
        </div>
        <div className='flex gap-4'>
          <img src={Img11} width={150} height={100}/>
          <p className='text-base font-medium'>Image for Remember When <br/> Selling Out Was A  Bad Thing?</p>
        </div>
     
      </div>
      
     
      </div>
       {/* Section 2 End */}
    </section>

{/* Other Components Render Start*/}
<DynaHome/>
<Footer/>
{/* Other Components Render End*/}


    </>
  )
}

export default Home