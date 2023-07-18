import "../assets/styles/Header.css";
import { Link } from 'react-router-dom';

function  Header(){

  return  (
    <>
      <div className="headerContainer"  style={{color:"red"}}>
        <div>
          <Link to={"/"}  style={{color:"#ffffff90",marginRight:"10px",fontSize:"16px"}}>Site.com</Link>
        </div>

        <div>
          <Link to={"/products"}  style={{color:"#ffffff90",marginRight:"10px"}}>produits</Link>
          <Link to={"/account"}  style={{color:"#ffffff90",marginRight:"10px"}}>compte</Link>
          <Link to={"/login"}  style={{color:"#ffffff90",marginRight:"10px"}}>connexion</Link>
          <Link to={"/about"}  style={{color:"#ffffff90",marginRight:"10px"}}>A  propos</Link>
        </div>
      </div>
    </>
  )
}

export  default Header;