import { Outlet } from "react-router-dom";

export function SharedProductLayout(){
  return(
    <section className='section'>
      <h2>Products</h2>
      <Outlet/>
    </section>
  )
}