import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router'
import { Loader } from '../components/Loader'


export const ProductPage = () => {
  const { getProductByID } = useContext(ProductContext)

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  const { id } = useParams()

  const fetchProduct = async id => {
    const data = await getProductByID(id)
    setProduct(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProduct(id)
  }, [])

  return (
    <main className='container main-product'>
      {//loading ? (<Loader />) : 
        (
          <>
            <div className='header-main-product'>
              <span className='number-product'>SKU : {product.id}</span>
              <div className='container-img-product'>
                {product.images && product.images.length > 0 && (
                  <img
                    src={product.images[0]}
                    alt={`Product ${product?.slug}`}
                  />
                )}
              </div>

              <div className='container-img-products'>
                {product?.images && product.images.length > 0 && product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${product?.slug} ${index}`}
                  />
                ))}

              </div>

              <div className='container-info-product'>
                <h1>{(product.title)}</h1>
                <div className='info-product'>
                  <div className='group-info'>
                    <span>{product.description}</span>
                    {console.log('getProductByID')}
                    {console.log(product)}
                  </div>
                </div>
                <div className='group-info'>
                  <h1>
                    ${product.price} 
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
    </main>
  )
}
