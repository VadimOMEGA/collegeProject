import React from 'react'
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchFromApi } from '../../utils/fetchFromApi';
import { jwtDecode } from 'jwt-decode';

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import AdminError from './AdminError';


const AdminPage = () => {
  const[products, setProducts] = useState([]);
  const [triggerEffect, setTriggerEffect] = useState(true);

  useEffect(() => {
    fetchFromApi('http://localhost/website-backend/show_products.php')
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching data:', error))
          .finally(() => setTriggerEffect(false));
  }, [triggerEffect])

  const handleDelete = (index) => {
    fetchFromApi('http://localhost/website-backend/delete_product.php', 'POST', {
      product_id: products[index].product_id,
    })
      .then((data) => {setTriggerEffect(true); console.log(data)})
      .catch((error) => console.error('Error fetching data:', error));
  };

  const[isAdmin, setIsAdmin] = useState(0);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  let token = useSelector((state) => state.token); 

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, [token]);

  if(!isAuthenticated || (isAuthenticated && parseInt(isAdmin) === 0)) return <AdminError />

  return (
    <div className='section__padding flex flex-col gap-[30px] justify-center mt-[80px] mb-[80px]'>
      <Link to='create' className='w-[150px] h-[40px] grid place-content-center border hover:border-[#c5c5c5] hover:text-[#c5c5c5] duration-[0.5s] border-black cursor-pointer rounded-[5px]'>Create new</Link>
      <table className='w-[100%]'>
        <thead>
          <tr>
            <th className='p-[10px] border border-black'>ID</th>
            <th className='p-[10px] border border-black'>Name</th>
            <th className='p-[10px] border border-black'>Description</th>
            <th className='p-[10px] border border-black'>Brand</th>
            <th className='p-[10px] border border-black'>Price</th>
            <th className='p-[10px] border border-black'>Image URL</th>
            <th className='p-[10px] border border-black'>Colors</th>
            <th className='p-[10px] border border-black'>Memory</th>
            <th className='p-[10px] border border-black'>Memory Variations</th>
            <th className='p-[10px] border border-black'>In stock</th>
            <th className='p-[10px] border border-black'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <tr key={index}>
                <td className='p-[10px] border border-black'>{product.product_id}</td>
                <td className='p-[10px] border border-black'>{product.product_name}</td>
                <td className='p-[10px] border border-black'>{product.product_description}</td>
                <td className='p-[10px] border border-black text-center'>{product.brand}</td>
                <td className='p-[10px] border border-black text-center'>{product.price}</td>
                <td className='p-[10px] border border-black'>{product.image_url}</td>
                <td className='p-[10px] border border-black'>{product.colors}</td>
                <td className='p-[10px] border border-black text-center'>{product.memory}</td>
                <td className='p-[10px] border border-black'>{product.memory_variations}</td>
                <td className='p-[10px] border border-black text-center'>{product.in_stock}</td>
                <td className='p-[10px] border border-black text-center'>
                  <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <Link to={`edit/${product.product_id}`}>
                      <FaEdit size={25} className='hover:text-blue-400 duration-[0.5s]'/>
                    </Link>
                    <TiDeleteOutline onClick={() => {handleDelete(index)}} size={30} className='hover:text-redButton duration-[0.5s] cursor-pointer'/>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminPage
