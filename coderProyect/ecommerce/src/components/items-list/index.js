import React from 'react'
import Item from '../item-card'

const ItemsList = ({ items, loading }) => {
  return (
    <div style={containerStyle}>|
      {
        Boolean (loading)     ?
            <p>bancame...</p>
        :
            items.map ((item, index) => <Item key={item.title + index} data={item} />)
      }
    </div>
  )
}

export default ItemsList

const containerStyle = {
  display: "flex",
  flexDirection:"row",
  justifyContent:"center",
  flexWrap:"wrap",
  gap:"10px",
}