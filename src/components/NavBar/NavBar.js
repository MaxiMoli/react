import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className='navBar' >
            <NavLink to ={`/`} className={({isActive })=> isActive? 'titulo' : 'titulo'}> Narison Deportes </NavLink>
            <div className='Categories'>
                <NavLink to ={`/Vestimenta`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Vestimenta </NavLink>
                <NavLink to ={`/Accesorios`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Accesorios </NavLink>
                <NavLink to ={`/Contacto`} className={({isActive })=> isActive? 'ActiveOption' : 'Option1'}> Contacto </NavLink>
                <NavLink to ={`/carrito`} className={({isActive })=> isActive? 'ActiveOption' :'carrito'}><CartWidget/></NavLink>
            </div>
        </nav>
    )
}

export default NavBar