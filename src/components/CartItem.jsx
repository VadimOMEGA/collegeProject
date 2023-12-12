import React from 'react'
import { useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi';

const CartItem = ({image_url, name, price, quant, color, memory, item_id}) => {

    const[subtotal, setSubtotal] = useState(quant*price);
    const[quantity, setQuantity] = useState(quant);

    const handleChange = (event) => {
        fetchFromApi('http://localhost/website-backend/update_quantity.php', "POST", {quantity: parseInt(event.target.value), item_id: item_id})
          .then((data) => (console.log(data)))
          .catch((error) => console.error('Error fetching data:', error));

        setQuantity(parseInt(event.target.value));
        setSubtotal(parseInt(event.target.value)*price)
    }

    const handleKeyDown = (event) => {
      event.preventDefault();
    }

  return (
    <div className='grid items-center mb-[40px] grid-cols-6 h-[72px] shadow-md border border-gray-100 rounded-[5px]'>
        <div className='ml-[40px] flex items-center h-[54px] gap-[20px]'>
            <img className='h-[100%]' src={require(`../assets/${image_url}`)} alt="item" />
            <p>{name}</p>
        </div>
        <div className='flex pl-[40px] items-center'>{color}</div>
        <div className='flex items-center'>{memory}</div>
        <div className='flex items-center'>{parseInt(price).toLocaleString()} MDL</div>
        <div className='flex items-center'>
            <input
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                min={1}
                max={5}
                type="number"
                name="quantity"
                value={quantity}
                className=' outline-none caret-transparent border rounded-[5px] w-[72px] h-[44px] pl-[12px]'/>
        </div>
        <div className='flex items-center'>{`${parseInt(subtotal).toLocaleString()} MDL`}</div>
    </div>
  )
}

export default CartItem
