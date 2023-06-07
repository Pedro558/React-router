import { Link } from "react-router-dom";
import products from "../data";

export  function Products() {
  return(
    <section className='section'>
      <h2>Products</h2>
      <div className="products">
        {products.map(product => {
          return(
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`${product.id}`}>more info</Link>
            </article>
          )
        })}
      </div>
      <Link to='/' className="btn">Back to Home</Link>
    </section>
  )
}
