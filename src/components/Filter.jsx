import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Filter = () => {

    const { searchTerm } = useParams();
    const [color, setColor] = useState('none');
    const [brand, setBrand] = useState('none');
    const [memory, setMemory] = useState('none');

  return (
    <div>
      <div className='rounded-[5px] mb-[30px] h-[50px] bg-secondary flex items-center px-[3rem]'>
        <div className='w-[100%] flex justify-between items-center'>
        
        <p className='font-bold'>Filter</p>

          <div className='flex items-center gap-[50px]'>
            <div className='flex gap-[5px] items-center'>
                <p>Color: </p>
                <select className='p-[3px] rounded-[5px]' onChange={(e) => {setColor(e.target.value)}}>
                    <option value="none"></option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="gold">Gold</option>
                    <option value="pink">Pink</option>
                </select>
            </div>

            <div className='flex gap-[5px] items-center'>
            <p>Brand: </p>
                <select className='p-[3px] rounded-[5px]' onChange={(e) => {setBrand(e.target.value)}}>
                    <option value="none"></option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                </select>
            </div>

            <div className='flex gap-[5px] items-center'>
            <p>Memory: </p>
                <select className='p-[3px] rounded-[5px]' onChange={(e) => {setMemory(e.target.value)}}>
                    <option value="none"></option>
                    <option value="32GB">32 GB</option>
                    <option value="64GB">64 GB</option>
                    <option value="128GB">128 GB</option>
                    <option value="256GB">256 GB</option>
                    <option value="512GB">512 GB</option>
                    <option value="1TB">1 TB</option>
                </select>
            </div>
          </div>

        <Link to={`/products/${searchTerm ? `${searchTerm}/` : '%20/'}${encodeURIComponent(color)}&${encodeURIComponent(brand)}&${encodeURIComponent(memory)}`}>
          <button className='border-b border-black'>Proceed</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Filter
