import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useParams, Link, useNavigate } from 'react-router-dom'

import AdminError from './AdminError'

import { fetchFromApi } from '../../utils/fetchFromApi'
import { jwtDecode } from 'jwt-decode'

const AdminEdit = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const[productData, setProductData] = useState(null);

  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    brand: '',
    price: '',
    image_url: '',
    colors: '',
    memory: '',
    memory_variations: '',
    in_stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchFromApi('http://localhost/website-backend/product_info.php', 'POST', { product_id: id })
          .then((data) => {
            setProductData(data);
          })
          .catch((error) => console.error('Error fetching data:', error));
  }, [id])

  useEffect(() => {
    if (productData) {
      setFormData({
        product_name: productData[0].product_name,
        product_description: productData[0].product_description,
        brand: productData[0].brand,
        price: productData[0].price,
        image_url: productData[0].image_url,
        colors: productData[0].colors,
        memory: productData[0].memory,
        memory_variations: productData[0].memory_variations,
        in_stock: productData[0].in_stock
      });
    }
  }, [productData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchFromApi('http://localhost/website-backend/admin_edit.php', 'POST', { 
      product_id: id, 
      product_name: formData.product_name,
      product_description: formData.product_description,
      brand: formData.brand,
      price: formData.price,
      image_url: formData.image_url,
      colors: formData.colors,
      memory: formData.memory,
      memory_variations: formData.memory_variations,
      in_stock: formData.in_stock
    }).then((data) => (console.log(data)))

    setTimeout(() => {
      navigate('/admin');
    }, 50)

  }

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


  if(!productData) return '';

  return (
    <div className='section__padding mt-[80px] mb-[80px] flex justify-center'>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-[10px] w-[800px]'>
        <label>ID:</label> <div className='p-[5px] rounded-[3px] border outline-none'>{productData[0].product_id}</div>
        <label htmlFor="pname">Product name:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='pname' type="text" name='product_name' value={formData.product_name} onChange={handleChange} />
        <label htmlFor="pdesc">Product description:</label> <textarea className='resize-none rounded-[3px] p-[5px] border outline-none' name="product_description" id="pdesc" cols="30" rows="5" value={formData.product_description} onChange={handleChange}></textarea>
        <label htmlFor="brand">Brand:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='brand' type="text" name='brand' value={formData.brand} onChange={handleChange} />
        <label htmlFor="price">Price:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='price' type="number" name='price' value={formData.price} onChange={handleChange} />
        <label htmlFor="img">Image URL:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='img' type="text" name='image_url' value={formData.image_url} onChange={handleChange} />
        <label htmlFor="col">Colors:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='col' type="text" name='colors' value={formData.colors} onChange={handleChange} />
        <label htmlFor="mem">Memory:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='mem' type="text" name='memory' value={formData.memory} onChange={handleChange} />
        <label htmlFor="memVar">Memory variations:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='memVar' type="text" name='memory_variations' value={formData.memory_variations} onChange={handleChange} />
        <label htmlFor="stock">In Stock:</label> <input className='rounded-[3px] p-[5px] border outline-none' id='stock' type="number" min={0} max={1} name='in_stock' value={formData.in_stock} onChange={handleChange} />
        <Link to='/admin' className='h-[40px] border border-black grid place-content-center rounded-[5px]'>
          Return to admin
        </Link>
        <input type='submit' value='Save' className=' outline-none bg-redButton hover:bg-redButtonHover duration-[0.5s] h-[40px] text-[white] rounded-[5px]' />
      </form>
    </div>
  )
}

export default AdminEdit
