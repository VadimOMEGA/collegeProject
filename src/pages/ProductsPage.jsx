import React from 'react';
import { useEffect, useState } from 'react';
import { ProductCard, Filter } from '../components';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Link } from 'react-router-dom';

import { Empty } from '../components';

const ProductsPage = () => {

  const[products, setProducts] = useState([]);
  const { searchTerm, filter } = useParams();

  useEffect(() => {
    if (searchTerm) {
      if(filter){
        // data based on the search term and filter
        fetchFromApi('http://localhost:8000/api/product-filter', 'POST', { search: searchTerm, filter: filter })
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching data:', error));
      } else{
        // data based on the search term
        fetchFromApi('http://localhost:8000/api/product-search', 'POST', { search: searchTerm })
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching data:', error));
      }
    } else {
        // default data
        fetchFromApi('http://localhost:8000/api/products')
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching data:', error));
      }
      console.log(products);
  }, [searchTerm, filter]);

  if(products.length === 0) return (
    <div className='section__padding mt-[80px]'>
      <div className='mb-[3rem]'>
        <p>
          <Link className='opacity-50' to='/'>Home /</Link> Cart
        </p>
      </div>
      <Empty />
    </div>
  )

  return (

    <div className='section__padding mt-[4rem] flex flex-col'>
      <div className='mb-[3rem]'>
        <p>
          <Link className='opacity-50' to='/'>Home /</Link> Products
        </p>
      </div>

      <Filter />

      <div className='flex justify-center flex-wrap gap-[30px]'>
        {
          products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={require(`../assets/${product.image_url}`)}
              productName={product.product_name}
              productPrice={product.price}
              productMemory={product.memory}
              product_id={product.product_id}
              />
          ))
        }

      </div>
    </div>
  )
}

export default ProductsPage
