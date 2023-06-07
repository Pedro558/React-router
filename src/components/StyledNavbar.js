import { NavLink } from 'react-router-dom'

export function StyledNavbar() {
  const getLinkClassName = ({ isActive }) => (isActive ? 'active' : 'link')

  return(
    <nav className='navbar'>
      <NavLink to='/' className={getLinkClassName}>Home</NavLink>
      <NavLink to='/about' className={getLinkClassName}>About</NavLink>
      <NavLink to='/products' className={getLinkClassName}>Products</NavLink>
      <NavLink to='/login' className={getLinkClassName}>Login</NavLink>
    </nav>
  )
};
