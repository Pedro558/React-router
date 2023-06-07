import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function Home(){
  return(
    <>
      <Navbar/>
      <section className='section'>
        <Outlet/>
      </section> 

    </>
  )
}
