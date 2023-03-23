import './ProductCard.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, image, index }) => {

  const [timer, setTimer] = useState(parseInt(Math.floor(Math.random() * 149) + 1));
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(()=> {
    const interval = setInterval(()=>{
      setTimer(prevTimer => prevTimer -1)
    }, 1000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (timer === 0) {
      setTimerExpired(true);
    }
  }, [timer]);

  const handleClick = (e)=> {
    if (timerExpired){
      e.preventDefault()
    }
  }

  return(
    <div className='productCard__container' onClick={(e) =>handleClick(e)}>
      <picture className='productCard__img'>
        <img src={`${image}`} alt={`${title}`}/>
      </picture>
      <p>{title}</p>
      <section className='productCard__footer'>
        <p className='productCard__timer'>{timer > 0 ? `⏰ ${timer} second${timer>1?'s':''} left!` : 'Time ran out! Sorry! 🤷'}</p>
        <Link to={`/:${index}`}
          onClick={(e) =>handleClick(e)}
        >
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