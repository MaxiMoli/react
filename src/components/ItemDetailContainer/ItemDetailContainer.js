import './ItemDetailContainer.css'
import { useState,useEffect} from 'react'
//import { getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItem } from '../../firebase-config/services/services'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {id}= useParams()


    useEffect(() => {        
        getItem(id)
//         getProductById(itemId) 
            .then((snapshot) => {
                setProduct({id: snapshot.id, ...snapshot.data()})
            })
            .catch(error => {
                console.error(error)
        })
 }, [id]) 


    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}



export default ItemDetailContainer