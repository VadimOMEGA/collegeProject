import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductCard = ({ imageUrl, productName, productPrice, productMemory, product_id }) => {
  return (
    <Link to={`/Product/${product_id}`}>
      <div className='h-[350px] w-[270px] flex flex-col gap-[1rem] animate-slide'>
          <div className='group w-[100%] h-[250px] bg-secondary flex items-center justify-center relative overflow-hidden rounded-[5px]'>
              <img src={imageUrl} alt={productName} className='h-[80%]'/>
              
              <div className='absolute right-[-34px] top-[12px] group-hover:right-[12px] duration-[0.5s]'>
                  <div className='rounded-[100%] bg-white w-[34px] h-[34px] grid place-content-center mb-[0.5rem] cursor-pointer'><IoMdHeartEmpty size={20} className='hover:text-redButton duration-[0.5s]'/></div>
                  <div className='rounded-[100%] bg-white w-[34px] h-[34px] grid place-content-center cursor-pointer'><MdOutlineRemoveRedEye size={20} /></div>
              </div>

              <div className='absolute h-[40px] bottom-[-40px] bg-black group-hover:bottom-[0px] duration-[0.5s] w-[100%] rounded-[5px] grid place-content-center cursor-pointer'>
                <p className='text-white font-light select-none'>Add to cart</p>
              </div>
          </div>

          <div className='flex flex-col gap-[0.5rem]'>
            <p className='font-bold whitespace-nowrap overflow-hidden overflow-ellipsis'>{productName} | {productMemory}</p>
            <p className='text-redButton font-medium'>{parseInt(productPrice).toLocaleString()} MDL</p>
          </div>
      </div> 
    </Link>
  )
}

export default ProductCard
