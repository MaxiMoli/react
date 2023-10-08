import './ItemDetailContainer.css'
import { useState,useEffect} from 'react'
import { getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId }= useParams()


    useEffect(() => {
        const db = getFirestore()
        const item= doc(db, 'items','HrRxUTJyIo9kkc71ArXD' )
        
        getDoc(item)
//         getProductById(itemId) 
            .then((snapshot) => {
                setProduct({id: snapshot.id, ...snapshot.data()})
            })
            .catch(error => {
                console.error(error)
         })
 }, [itemId])


    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}



export default ItemDetailContainer