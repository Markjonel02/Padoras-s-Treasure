
import { NavLink, Outlet } from "react-router-dom"; 
const Layout = () => {
  return (
    <> 
    <ul className="">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink> 
    </li>

  </ul>
  <Outlet/>
  </>
  
  )
}

export default Layout