import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to={"/"}>Shop</NavLink></li>
        <li><NavLink to={"/shopping-cart"}>Shopping cart</NavLink></li>
      </ul>
    </nav>
  )
}

export {
  Navigation
}
