import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer>
            <div>
                Todos los derechos reservados &copy;2024  <img src={logo} alt="" />
            </div>
            <div>
                Page made by: <a href="https://yendersite.netlify.app/">Yenderson Colmenares</a>
            </div>
        </footer>
    )
}

export default Footer