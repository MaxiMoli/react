import calza from '../src/components/Images/calza.jpg'
import top from '../src/components/Images/top.jpg'
import topML from '../src/components/Images/topML.jpg'
import pesarusa from '../src/components/Images/pesarusa.jpg'
import guantesbox from '../src/components/Images/guantesbox.jpg'

const products =[
    {
        id:'1',
        name: 'TOP',
        price: 1090,
        category:'Vestimenta',
        img: top,
        stock: 5,
        description: 'Top manga corta elastizado para entrenar'
    },
    {id:'2',name: 'TOP ML',price: 1190,category: 'Vestimenta', img: topML,
    stock: 5,description: 'Top manga larga elastizado para entrenar'},
    
    {id:'3',name: 'Calza C',price: 1290,category: 'Vestimenta', img: calza,
    stock: 5, description: 'Calza elastizada corta'},

    {id:'4',name: 'Pesa rusa',price: 1290,category: 'Accesorios',img: pesarusa ,
    stock: 5,description: 'Pesa rusa 12 kilos'},

    {id:'5',name: 'Guantes de boxeo',price: 1290,category: 'Accesorios',img:guantesbox,
    stock: 5,description: 'Guantes de boxeo 12oz'},
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getCategory = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
export const getPrice = (priceId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.price === priceId))
        }, 500)
    })
}



/* retorna una promesa luego de un tiempo */