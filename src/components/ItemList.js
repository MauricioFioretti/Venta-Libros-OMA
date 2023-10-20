import React from 'react'
import Item from './Item'

export default function ItemList({ productos, titulo }) {
  return (
    <div className='container'>
      <h2 className='main-title'>{titulo}</h2>
      <div className='productos'>
        {productos.map((prod) => <Item key={prod.id} producto={prod} />)}
      </div>
    </div>
  )
}
