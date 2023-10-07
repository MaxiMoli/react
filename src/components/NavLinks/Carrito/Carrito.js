import '../Carrito/Carrito.css'
import React from "react"
import { useContext } from "react"
import { CartContext, CartProvider, useCartContext } from '../../../context/CartContext'
import { Link} from 'react-router-dom'
import { getPrice } from '../../../asyncMock'


const Carrito = () => {
    const {cart, clearCart, totalQuantity, total} = useCartContext()
    
    if(totalQuantity ===0){
        return (
            <div>
                <h1> El carrito está vacío </h1>
            </div>
        )
    }
    
    return (
        <div>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button"> Limpiar carrito </button>
            <Link to='/checkout'className='Option'> Terminar compra </Link>
        </div>
    )
}

export default Carrito