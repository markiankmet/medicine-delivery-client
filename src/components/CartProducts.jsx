import {useEffect, useState} from "react";
import {CartProduct} from "./CartProduct.jsx";

const CartProducts = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const localStorageData = localStorage.getItem("cart")
    if (localStorageData) {
      setCart(JSON.parse(localStorageData))
    }
  }, [])

  return (
    <div>
      {
        cart.map(cartProduct => <CartProduct key={cartProduct.medicine._id} product={cartProduct}/>)
      }
    </div>
  )
}

export {
  CartProducts
}
