import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <h2>
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    </h2>
                <ul>
                    <li>
                        <a href="#excursiones">
                            Excursiones
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;