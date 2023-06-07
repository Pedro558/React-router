import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function SharedLayout() {
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
};
