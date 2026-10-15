
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import { lazy } from 'react';
// import CartPage from '../pages/CartPage'
const CartPage = lazy(() => import("../pages/CartPage"));

const Approutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/products' element={<ProductPage/>}/>
        <Route  path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default Approutes