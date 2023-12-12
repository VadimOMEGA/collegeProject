import React from 'react'
import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchFromApi } from '../../utils/fetchFromApi'
import { jwtDecode } from 'jwt-decode'

import AdminError from './AdminError'


const AdminCreate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    brand: '',
    price: '',
    image_url: '',
    colors: '',
    memory: '',
    memory_variations: '',
    in_stock: '',
    image1: '',
    image2: '',
    image3: '',
    image4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchFromApi('http://localhost/website-backend/admin_create.php', 'POST', {
      product_name: formData.product_name,
      product_description: formData.product_description,
      brand: formData.brand,
      price: formData.price,
      image_url: formData.image_url,
      colors: formData.colors,
      memory: formData.memory,
      memory_variations: formData.memory_variations,
      in_stock: formData.in_stock,
      image1: formData.image1,
      image2: formData.image2,
      image3: formData.image3,
      image4: formData.image4
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

  return (
    <div className='section__padding mt-[80px] mb-[80px] flex justify-center'>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-[10px] w-[800px]'>
        <label htmlFor="pname">Product name:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='pname' type="text" name='product_name' value={formData.product_name} onChange={handleChange} />
        <label htmlFor="pdesc">Product description:</label> <textarea required className='resize-none rounded-[3px] p-[5px] border outline-none' name="product_description" id="pdesc" cols="30" rows="5" value={formData.product_description} onChange={handleChange}></textarea>
        <label htmlFor="brand">Brand:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='brand' type="text" name='brand' value={formData.brand} onChange={handleChange} />
        <label htmlFor="price">Price:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='price' type="number" name='price' value={formData.price} onChange={handleChange} />
        <label htmlFor="img">Image URL:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='img' type="text" name='image_url' value={formData.image_url} onChange={handleChange} />
        <label htmlFor="col">Colors:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='col' type="text" name='colors' value={formData.colors} onChange={handleChange} />
        <label htmlFor="mem">Memory:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='mem' type="text" name='memory' value={formData.memory} onChange={handleChange} />
        <label htmlFor="memVar">Memory variations:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='memVar' type="text" name='memory_variations' value={formData.memory_variations} onChange={handleChange} />
        <label htmlFor="stock">In Stock:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='stock' type="number" min={0} max={1} name='in_stock' value={formData.in_stock} onChange={handleChange} />
        <label htmlFor="stock">Image1:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='stock' type="text" min={0} max={1} name='image1' value={formData.image1} onChange={handleChange} />
        <label htmlFor="stock">Image2:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='stock' type="text" min={0} max={1} name='image2' value={formData.image2} onChange={handleChange} />
        <label htmlFor="stock">Image3:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='stock' type="text" min={0} max={1} name='image3' value={formData.image3} onChange={handleChange} />
        <label htmlFor="stock">Image4:</label> <input required className='rounded-[3px] p-[5px] border outline-none' id='stock' type="text" min={0} max={1} name='image4' value={formData.image4} onChange={handleChange} />
        <Link to='/admin' className='h-[40px] border border-black grid place-content-center rounded-[5px]'>
          Return to admin
        </Link>
        <input type='submit' value='Save' className=' outline-none bg-redButton hover:bg-redButtonHover duration-[0.5s] h-[40px] text-[white] rounded-[5px]' />
      </form>
    </div>
  )
}

export default AdminCreate
