import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className='navBar' >
            <h3> Nariso Deportes </h3>
            <div className='Categories'>
                <NavLink to ={`/category/Vestimenta`} className={({isActive })=> isActive? 'ActiveOption' : 'Option'}> Vestimenta </NavLink>
                <NavLink to ={`/category/Accesorios`} className={({isActive })=> isActive? 'ActiveOption' : 'Option'}> Accesorios </NavLink>
                <NavLink to ={`/category/Contacto`} className={({isActive })=> isActive? 'ActiveOption' : 'Option'}> Contacto </NavLink>

            </div>
                <button className='carrito'><CartWidget/></button>
        </nav>
    )
}

export default NavBar