import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { CardProduct } from '../components'
import { ProductContext } from '../context/ProductContext'


export const SearchPage = () => {

  const location = useLocation()

  const { allProducts } = useContext(ProductContext)

  const filteredProducts = allProducts.filter(product => {
    const searchTerm = location.state.toLowerCase();
    return product.slug.toLowerCase().includes(searchTerm) || product.category.slug.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <div>SearchPage</div>
      <div className='container'>
        <p className='p-search'>
          Se encontraron <span>{filteredProducts.length}</span>{' '}
          resultados:
        </p>
        <div className='card-list-product container'>
          {filteredProducts.map(product => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}
