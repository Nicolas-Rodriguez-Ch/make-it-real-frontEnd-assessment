import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({ title, image,  }) => {
  return(
    <div className='productCard__container'>
      <picture className='productCard__img'>
        <img src={`${image}`} alt={`${title}`}/>
      </picture>
      <p>{title}</p>
      <section className='productCard__footer'>
        <p>timer</p>
        <Link to={'/'}>
          <button
            className='productCard__button'
            type='button'
          >
            Go to Detail
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ProductCard;