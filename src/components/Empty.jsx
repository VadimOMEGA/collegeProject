import React from 'react'

const Empty = () => {
  return (
    <div className='w-[100%] h-[60vh] grid place-content-center'>
      <img className='w-[300px] h-[300px]' src={require('../assets/others/no_products.jpg')} alt="no products" />
    </div>
  )
}

export default Empty
