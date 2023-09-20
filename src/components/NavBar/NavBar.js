import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className='navBar' >
            <NavLink to ={`/`} className={({isActive })=> isActive? 'titulo' : 'titulo'}> Nariso Deportes </NavLink>
            <div className='Categories'>
                <NavLink to ={`/NavLinks/Vestimenta`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Vestimenta </NavLink>
                <NavLink to ={`/NavLinks/Accesorios`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Accesorios </NavLink>
                <NavLink to ={`/NavLinks/Contacto`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Contacto </NavLink>
                <NavLink to ={`/NavLinks/carrito`} className={({isActive })=> isActive? 'ActiveOption' :'carrito'}><CartWidget/></NavLink>
            </div>
        </nav>
    )
}

export default NavBar