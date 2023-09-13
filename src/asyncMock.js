const products =[
    {
        id:'1',
        name: 'TOP',
        price: 1090,
        category: 'torso',
        //img:'',
        stock: 5,
        description: 'Top manga corta elastizado para entrenar'
    },
    {id:'2',name: 'TOP ML',price: 1190,category: 'torso',//img:'',
    stock: 5,description: 'Top manga larga elastizado para entrenar'},
    
    {id:'3',name: 'Calza L',price: 1290,category: 'Miembros inferiores',//img:'',
    stock: 5,description: 'Calza elastizada larga'},
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



/* retorna una promesa luego de un tiempo */