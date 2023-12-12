import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { Empty, CartItem } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [triggerEffect, setTriggerEffect] = useState(true);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  let token = useSelector((state) => state.token);
  if(token) token = jwtDecode(token);

  useEffect(() => {
    if (isAuthenticated && triggerEffect) {
      fetchFromApi('http://localhost/website-backend/show_cart_items.php', 'POST', {
        user_id: token.user_id,
      })
        .then((data) => setCartItems(data))
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => setTriggerEffect(false));
    }
  }, [isAuthenticated, triggerEffect]);

  const handleDelete = (index) => {
    fetchFromApi('http://localhost/website-backend/delete_cart_item.php', 'POST', {
      item_id: cartItems[index].item_id,
    })
      .then(() => setTriggerEffect(true))
      .catch((error) => console.error('Error fetching data:', error));
  };

  if (cartItems.length === 0)
    return (
      <div className='section__padding mt-[80px]'>
        <div className='mb-[3rem]'>
          <p>
            <Link className='opacity-50' to='/'>
              Home /
            </Link>{' '}
            Cart
          </p>
        </div>
        <Empty />
      </div>
    );

  return (
    <div className='section__padding mt-[80px]'>
      <div className='mb-[3rem]'>
        <p>
          {console.log(cartItems)}
          <Link className='opacity-50' to='/'>
            Home /
          </Link>{' '}
          Cart
        </p>
      </div>

      <div className='grid mb-[40px] grid-cols-6 h-[72px] shadow-md border border-gray-100 rounded-[5px]'>
        <div className='ml-[40px] flex items-center'>Product</div>
        <div className='flex pl-[40px] items-center'>Color</div>
        <div className='flex items-center'>Memory</div>
        <div className='flex items-center'>Price</div>
        <div className='flex items-center'>Quantity</div>
        <div className='flex items-center'>Subtotal</div>
      </div>

      {cartItems.map((cartItem, index) => (
        <div className='relative' key={index}>
          <CartItem
            image_url={cartItem.image_url}
            name={cartItem.product_name}
            price={cartItem.price}
            quant={cartItem.quantity}
            item_id={cartItem.item_id}
            color={cartItem.color}
            memory={cartItem.memory}
          />
          <div key={`ch${index}`} className='absolute right-[40px] top-[23px]'>
            <RiDeleteBin6Line
              onClick={() => handleDelete(index)}
              size={25}
              className='text-redButton cursor-pointer'
            />
          </div>
        </div>
      ))}

      <div className='mb-[3rem] flex justify-between'>
        <Link to='/products'>
          <button className='w-[218px] h-[56px] border rounded-[5px] grid place-content-center border-black'>
            Return to shop
          </button>
        </Link>
        <Link to='/checkout'>
          <button className='w-[218px] bg-redButton text-white h-[56px] rounded-[5px] grid place-content-center border-black'>
            To checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;