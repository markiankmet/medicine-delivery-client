import {useEffect, useState} from "react";

const CartProduct = ({product}) => {
  const medicine = product.medicine
  const [productQuantity, setProductQuantity] = useState(product.quantity)
  const localCart = JSON.parse(localStorage.getItem("cart")) || []

  useEffect(() => {
    localCart.map(item => {
      if (item.medicine._id === medicine._id) {
        item.quantity = productQuantity
      }
      localStorage.setItem("cart", JSON.stringify(localCart))

    })
  }, [productQuantity])

  const handleIncrementQuantity = () => {
    if (productQuantity < medicine.quantity) {
      setProductQuantity(prevState => ++prevState)
    }
  }

  const handleDecrementQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(prevState => --prevState)
    }
  }

  return (
    <div>
      <div>{medicine.title}</div>
      <div>{medicine.price}</div>
      <div>
        <button onClick={handleDecrementQuantity}>-</button>
        <span>{productQuantity}</span>
        <button onClick={handleIncrementQuantity}>+</button>
      </div>
    </div>
  )
}

export {
  CartProduct
}
