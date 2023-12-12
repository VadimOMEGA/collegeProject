import React from 'react'
import { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';

const SearchBox = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className='relative'>
      <input 
        type="search"
        placeholder='What are you looking for?'
        className='bg-secondary rounded-[4px] w-[250px] h-[40px] outline-none px-[20px] text-[12px]'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      <Link to={`products/${searchTerm}`}>
        <button onClick={() => {setSearchTerm('')}}><CgSearch size={20} className='absolute right-[12px] top-[10px]'/></button>
      </Link>
    </form>
  )
}

export default SearchBox
