import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './SingleProduct.css'

const SingleProduct = () => {
  const productId = useParams().productId.replace(':','');
  const singleItem = useSelector(state => state.productReducer.data[productId]);

  if (!singleItem) {
    return(
      <h1>Ooops, it looks like we dont have that product on hand right now, please try again later</h1>
      )
    }
  const rating = Object.entries(singleItem.rating)

  return(
    <div className='singleProduct__container'>
      <article>
        <picture className='singleProduct__image'>
          <img src={singleItem.image} alt={singleItem.title}/>
        </picture>
        <h1 className='singleProduct__title'>{singleItem.title}</h1>
      </article>
      <article>
      <p className='singleProduct__description'>{singleItem.description}</p>
      <p className='singleProduct__price'>${singleItem.price}</p>
      <p className='singleProduct__category'>Category: {singleItem.category}</p>
      <div className='singleProduct__rating'>
        {rating[0].map((element)=>{
          return(

            <p key={element}>{element}</p>
          )
        })}
      </div>
      </article>
    </div>
  )
}

export default SingleProduct;