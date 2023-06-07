import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { StyledNavbar } from '../components/StyledNavbar'

export function SharedLayout() {
  return(
    <>
      <StyledNavbar/>
      <Outlet/>
    </>
  )
};
