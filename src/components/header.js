import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="flex justify-center">
                <Link to="/">
                    <img src="../assets/images/logo.png" alt="Logo" />
                </Link>
            </div>
            
            
        </header>
        
    )
  };
  
  export default Header;