import React from 'react'
import { Link } from 'react-router'

export const CardProduct = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className='card-product'>
            <div className='card-img'>
                <img
                    src={product.images[0]}
                    alt={`product ${product.slug}`}
                />
            </div>
            <div className='card-info'>
                <h3>{product.title}</h3>
                <div className='card-types'>
                    $ {product.price}
                </div>
            </div>
        </Link>
    )
}


