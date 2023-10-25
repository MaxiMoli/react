import {useState, useEffect} from 'react'
//import { getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemListContainer = ({ greeting })  => {
    
    const [products, setProducts] = useState([])

    const { categoryId }= useParams()

    useEffect(()=> {

        const db= getFirestore()
        const items = collection (db, 'items')
        getDocs(items)

    //     const asyncFunc = categoryId ? getProductByCategory : getProducts;
    //     asyncFunc(categoryId)
        .then((snapshots) => {
            const products = snapshots.docs.map((snapshot)=>({id: snapshot.id,...snapshot.data()}))
            setProducts(products)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])
    
    return(
        <div>
            <h1>{categoryId}</h1>
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer