import { Link } from "react-router-dom";

export  function Products() {
  return(
    <>
      <section className='section'>
        <h2>products</h2>
        <Link to='/' className="btn">Back to Home</Link>
      </section>
    </>
  )
}
