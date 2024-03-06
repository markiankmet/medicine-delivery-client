import {CartProducts, CartSubmitButton, CartTotalPrice, UserForm} from "../components/index.js";

const ShoppingCart = () => {

  return (
    <div>
      <UserForm />
      <CartProducts />
      <CartTotalPrice />
      <CartSubmitButton />
    </div>
  )
}

export {
  ShoppingCart
}
