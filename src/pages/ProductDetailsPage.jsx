import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { useSelector } from 'react-redux'

import { jwtDecode } from 'jwt-decode'

const SplitColors = ({ str, selectedColor, setSelectedColor }) => {
  
  let colors = str ? str.split(",") : [];
  let colorsUnchanged = str ? str.split(",") : [];
  // Use map to transform the array and return the modified values
  colors = colors.map((color) => {
    switch (color) {
      case "white": return "bg-secondary";
      case "black": return "bg-black";
      case "silver" : return "bg-[#AAACAD]";
      case "green": return "bg-[#94DD8E]";
      case "blue": return "bg-[#A0BCE0]";
      case "red": return "bg-[#E07575]";
      case "purple": return "bg-[#74318B]";
      case "pink": return "bg-[#FE8CFF]";
      case "gold": return "bg-[#FFDC73]";
      case "fade": return "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%";
      default: return "bg-black";
    }
  });

  return (
    <div className='flex gap-[0.5rem] items-center'>
      {colors.map((color, index) => (
        <button key={index} title={colorsUnchanged[index]} onClick={() => {setSelectedColor(index);}} className={`outline-none border border-gray-400 rounded-full ${color} ${selectedColor === index ? ' w-[25px] h-[25px] ' : ' w-[20px] h-[20px] '} duration-[0.5s]`}></button>
      ))}
    </div>
  );
};




const ProductDetailsPage = () => {

  const { id } = useParams();

  const[productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);

  const[mainImage, setMainImage] = useState(0);

  const[user_id, setUser_id] = useState(null);

  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  let token = useSelector((state) => state.token);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser_id(decodedToken.user_id);
    }
  }, [token]);
  

  useEffect(() => {
    fetchFromApi(`http://127.0.0.1:8000/api/products/${id}`)
          .then((data) => setProductData(data))
          .catch((error) => console.error('Error fetching data:', error));
          console.log(productData)
  }, [id])

  const handleClick = (colors) => {
    const color = colors[selectedColor];
    fetchFromApi('http://localhost/website-backend/product_add_to_cart.php', 'POST', { product_id: id, user_id: user_id, color: color })
          .then((data) => console.log(data))
          .catch((error) => console.error('Error fetching data:', error));
  }

  if(!productData) return "";

  return (
    <div className='section__padding mt-[80px] mb-[80px]'>
      <div className='mb-[3rem]'>
        <p>
          <Link className='opacity-50' to='/'>Home /</Link><Link className='opacity-50' to='/Products'>Products /</Link> {productData.product_name} | {productData.memory}
        </p>
      </div>

      <div className='flex gap-[70px] justify-center'>
        <div className='flex gap-[30px]'>
          <div className='h-[500px] flex flex-col justify-between'>
            {
              productData.images.map((image, index) => (
              <div 
                key={index} 
                className='bg-secondary h-[100px] w-[100px] flex items-center justify-center rounded-[5px] cursor-pointer'
                onClick={() => {setMainImage(index)}}>
                <img className='h-[80%]' src={require(`../assets/${image.image_url}`)} alt="variant" />
              </div>
            ))
              }
            </div>
          <div className=' rounded-[5px] row-span-4 col-span-3 h-[500px] w-[500px] flex items-center justify-center bg-secondary'>
            <img className='h-[80%]' src={require(`../assets/${productData.images[mainImage].image_url}`)} alt="main" />
          </div>
        </div>

        <div className='w-[400px]'>
            <h1 className='font-bold text-[24px] mb-[1rem]'>{productData.product_name} | {productData.memory}</h1> 
              {
                productData.in_stock == 1 ? <p className='text-greenButtonColor text-[14px] mb-[1rem]'>In Stock</p> : <p className='text-redButton text-[14px] mb-[1rem]'>Out of stock</p>
              }
            <p className='text-[24px] mb-[1.5rem]'>{parseInt(productData.price).toLocaleString()} MDL</p>
            <p className='text-[14px] mb-[1.5rem]'>{productData.product_description}</p>
            <div className='bg-black h-[1px] w-[100%] mb-[1.5rem]' />
            <div className='text-[20px] flex items-center gap-[1.5rem] mb-[1.5rem]'><p>Color:</p> <SplitColors str={productData.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} /></div>
            
            {
              isAuthenticated 
              ? (
              <button 
                onClick={() => {if(productData.in_stock == 1) handleClick(productData.colors.split(','))}}
                className={`mb-[50px] outline-none ${productData.in_stock == 1 ? ' bg-redButton hover:bg-redButtonHover ' : ' bg-redButtonHover line-through '} duration-[0.5s] w-[100%] h-[44px] rounded-[5px] text-white grid place-content-center`}>Add to cart
              </button>
              )
              : (
                <Link to='/signup'>
                  <button 
                    className='mb-[50px] outline-none bg-redButton hover:bg-redButtonHover duration-[0.5s] w-[100%] h-[44px] rounded-[5px] text-white grid place-content-center'>Add to cart
                  </button> 
                </Link>
              )

            }
            
            <div className='pl-[1rem] flex h-[90px] w-[100%] items-center gap-[1rem] border border-black rounded-[5px]'>
              <TbTruckDelivery size={30} />
              <div>
                <p>Free Delivery</p>
                <p className='underline text-[12px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
