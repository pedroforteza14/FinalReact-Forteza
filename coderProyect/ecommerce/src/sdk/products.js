export const getProducts = (search) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
}

export const getProduct = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)    
}