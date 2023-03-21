import './Header.css'

import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className='headerContainer'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
    </div>
  )
}

export default Header;