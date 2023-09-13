import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return ( 
        <nav className='navBar' >
            <h3> Maxi Ventas </h3>
            <div className='buttons'>
                <button className='Button'> Menu </button>
                <button className='Button'> Productos </button>
                <button className='Button'> Contacto </button>
                <button className='carrito'><CartWidget/></button>
            </div>
        </nav>
    )
}

export default NavBar