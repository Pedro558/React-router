import { useParams } from 'react-router-dom'

export function SingleProduct() {

  const { productId } = useParams()

  return(
    <section className='section product'>
      <h2>single product</h2>
      <p>Id = {productId}</p>
    </section>
  )
  
};