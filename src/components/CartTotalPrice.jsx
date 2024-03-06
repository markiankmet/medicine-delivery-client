import {useEffect, useState} from "react";

const CartTotalPrice = () => {
  const localCart = JSON.parse(localStorage.getItem("cart"))
  const [totalPrice, setTotalPrice] = useState(0)

  // useEffect(() => {
  //   let total = 0
  //   localCart.forEach((item) => {
  //     total += item.medicine.price * item.quantity
  //   })
  //   setTotalPrice(total)
  // }, [localStorage.getItem()])
  return (
    <div>
      {totalPrice}
    </div>
  )
}

export {
  CartTotalPrice
}
