
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";


const Card = ({img,title,reviews,prePrice,newPrice}) => {
  return (
    <div>
      
      {/* 1st Rooww Start */}
      {/* One Start */}
      <section className='card'>
          <img src = {img} alt={title}
          className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className='card-reviews'>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
          <span className='total-reviews'>{reviews}</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>${prePrice}</del> {newPrice}
              </div>

              <div className='bag'>
              <BsFillBagHeartFill className='bag-icon'/>

              </div>
            </section>
          </div>
        </section>
        {/* One End */}

        
    </div>
  )
}

export default Card
