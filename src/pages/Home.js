import { Link } from 'react-router-dom'

export function Home(){
  return(
    <section className='section'>
      <h2>Home Page</h2>
        <ul>
          <li><Link to='/about' className='btn'>About</Link></li>
          <li><Link to='/products' className='btn'>Products</Link></li>
        </ul>
  </section>
  )
}
