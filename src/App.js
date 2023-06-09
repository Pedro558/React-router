import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { About } from './pages/About'
import { Home } from './pages/Home'
import { Products } from './pages/Products';
import { Error } from './pages/Error';
import { SharedLayout } from './pages/SharedLayout';
import { SingleProduct } from './pages/SingleProduct';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { SharedProductLayout } from './pages/SharedProductLayout';

import  Dashboard  from './pages/Dashboard'
import Login from './pages/Login'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='/products' element={<SharedProductLayout/>}>
            <Route index element={<Products/>}/>
            <Route path=':productId' element={<SingleProduct/>}/>
          </Route>

          <Route path='/dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          }/>

          <Route path='/login' element={<Login setUser={setUser}/>}/>
        </Route>

        <Route path='*' element={<Error/>}/>
      </Routes>
    
  );
}