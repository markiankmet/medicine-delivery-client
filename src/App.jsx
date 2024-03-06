import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/index.js";
import {ShoopingCart, Shop} from "./pages/index.js";

function App() {


  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainLayout />} >
          <Route index element={<Navigate to={"shop"} />} />
          <Route path={"shop"} element={<Shop />} />
          <Route path={"shopping-cart"} element={<ShoopingCart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
