import { Link } from "react-router-dom";

export function About(){
  return(
    <section className='section'>
      <h2>About</h2>

      <Link to='/' className="btn">Back to Home</Link>
    </section>
  )
}
