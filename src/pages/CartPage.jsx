import  { useContext } from 'react'
import CartCard from '../components/CartCard'
import { store } from '../context/Store'

const CartPage = () => {

  const {cartProducts}  =  useContext(store)

  if(cartProducts.length ===0){
    return <h1 className='flex justify-center h-screen items-center text-7xl text-black/70'>No Product in cart</h1>
  }


  return (
    <div className='px-50 py-10'>

<div className='flex flex-col gap-10'>
{cartProducts.map((val) => (
    <CartCard data={val} key={val.id}/>
))}
</div>
    </div>
  )
}

export default CartPage