import React from 'react'
import ItemCount from '../item-count'

const ProductDetail = ({data, addToCarrito}) => {
  return (
    <div style={{ padding: '10px 40px' }}>      
        <img src={data?.imageURL} alt={data?.title} />
        <h2>{data?.title}</h2>
        <h3>{data?.description}</h3>
        <ItemCount stock={data?.stock || 0} addToCarrito={addToCarrito} />
    </div>
  )
}

export default ProductDetail