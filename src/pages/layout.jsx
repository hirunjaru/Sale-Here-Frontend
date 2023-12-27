import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
const Layout = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-center">
            <Link to="/">
                <img className='logo' src={logo} alt="Logo" />
            </Link>
        </div>
      </header>
      <div className="app">
        <Outlet />
      </div>
      
    </>
  )
};

export default Layout;