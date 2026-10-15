import { useContext } from "react"
import { store } from "../context/Store"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {
  const {products} =  useContext(store)

  return (
    <div className="grid grid-cols-4 px-40 py-10">
        {products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
    </div>
  )
}

export default ProductPage