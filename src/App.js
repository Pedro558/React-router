import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { About } from './pages/About'
import { Home } from './pages/Home'
import { Products } from './pages/Products';
import { Error } from './pages/Error';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
        </Route>

        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

