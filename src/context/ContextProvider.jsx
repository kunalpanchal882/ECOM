import { useEffect, useState } from "react";
import { store } from "./Store";

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [toggleCart, settoggleCart] = useState(false);

  async function fetchProduct() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setProducts(result.products);
    } catch (error) {
      console.log("error in products data", error);
    }
  }

  function handleDecrease(id) {

    // const cart = cartProducts.find((val) => val.id == id)

    setcartProducts((prev) => prev.map(val => val.id === id ? {...val,quantity:val.quantity-1}:val).filter((val) => val.quantity > 0))

    // setcartProducts((prev) =>
    //   prev.filter((prev) => (prev.quantity === 1 ? prev.id != cart.id : prev)),
    // );

    // setcartProducts((prev) =>
    //   prev.map((val) =>
    //     val.id === cart.id ? { ...val, quantity: val.quantity - 1 } : val,
    //   ),
    // );
  }

  function handleIncrease(id) {

    // const cart = cartProducts.find((val) => val.id == id)


    setcartProducts((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, quantity: val.quantity + 1 } : val,
      ),
    );
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const value = {
    products,
    toggleCart,
    settoggleCart,
    setcartProducts,
    cartProducts,
    handleDecrease,
    handleIncrease,
  };

  return <store.Provider value={value}>{children}</store.Provider>;
}

export default ContextProvider;
