import {Navigation} from "../components/index.js";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export {
  MainLayout
}
