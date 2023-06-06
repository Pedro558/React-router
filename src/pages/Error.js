import{ Link } from 'react-router-dom'

export function Error() {
  return(
    <section className="section">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/' className='btn'>Back to Home</Link>
    </section>
  )
};

