import cart from './assets/cartxs.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    
    return (
            <img className='CartWidget' src={cart} alt="cart-widget"/>
        
    )

}

export default CartWidget