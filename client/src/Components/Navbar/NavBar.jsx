import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
        <div className="titleContainer">Navbar</div>
        <div className="buttonContainer">
            <Link to={"/home"}>
                <button>Home</button>
            </ Link>
            <Link to={"/about"}>
                <button>about</button>
            </ Link>

        </div>

    </div>
  )
}

export default NavBar;