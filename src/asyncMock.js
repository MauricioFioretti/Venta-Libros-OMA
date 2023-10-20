const products = [
    {
        id: 1,
        src: "../img/Libros/Problemas 26 OMÑA.jpeg",
        alt: "Problemas 26 OMÑA",
        precio: 3200,
        stock: 10
    },
    {
        id: 2,
        src: "../img/Libros/Problemas 27 OMÑA.jpeg",
        alt: "Problemas 27 OMÑA",
        precio: 3200,
        stock: 10
    },
    {
        id: 3,
        src: "../img/Libros/Problemas 26 OMA.jpeg",
        alt: "Problemas 26 OMA",
        precio: 3200,
        stock: 10
    },
    {
        id: 4,
        src: "../img/Libros/Problemas 28 OMA.jpeg",
        alt: "Problemas 28 OMA",
        precio: 3200,
        stock: 10
    },
    {
        id: 5,
        src: "../img/Libros/Problemas 29 OMA.jpeg",
        alt: "Problemas 29 OMA",
        precio: 3200,
        stock: 10
    },
    {
        id: 6,
        src: "../img/Libros/Problemas 30 OMA.jpeg",
        alt: "Problemas 30 OMA",
        precio: 3200,
        stock: 10
    },
    {
        id: 7,
        src: "../img/Libros/BUP 1 (Matematicas Bachillerato 1).jpeg",
        alt: "BUP 1 (Matematicas Bachillerato 1)",
        precio: 3200,
        stock: 10
    },
    {
        id: 8,
        src: "../img/Libros/BUP 2 (Matematicas Bachillerato 2).jpeg",
        alt: "BUP 2 (Matematicas Bachillerato 2)",
        precio: 3200,
        stock: 10
    },
    {
        id: 9,
        src: "../img/Libros/BUP 3 (Matematicas Bachillerato 3).jpeg",
        alt: "BUP 3 (Matematicas Bachillerato 3)",
        precio: 3200,
        stock: 10
    },
    {
        id: 10,
        src: "../img/Libros/Mirar y Ver.jpeg",
        alt: "Mirar y Ver",
        precio: 3200,
        stock: 10
    },
    {
        id: 11,
        src: "../img/Libros/Orientaciones en la Geometría Elemental Tomo 1.jpeg",
        alt: "Orientaciones en la Geometría Elemental Tomo 1",
        precio: 3200,
        stock: 10
    },  
    {
        id: 12,
        src: "../img/Libros/Orientaciones en la Geometría Elemental Tomo 2.jpeg",
        alt: "Orientaciones en la Geometría Elemental Tomo 2",
        precio: 3200,
        stock: 10
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

