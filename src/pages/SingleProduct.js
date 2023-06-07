import { useParams, Link } from 'react-router-dom'
import products from '../data'

export function SingleProduct() {
  const { productId } = useParams()
  const product = products.find(product => product.id === productId)
  const { image, name } = product

  return(
    <section className='section product'>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <Link to={'/products'}>Back to products</Link>
    </section>
  )
  
};