import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

export const Navigation = () => {

  const { onInputChange, valueSearch, onResetForm } =
    useContext(ProductContext)

  const navigate = useNavigate()

  const onSearchSubmit = e => {
    e.preventDefault()
    navigate('/search', {
      state: valueSearch,
    })

    onResetForm()
  }

  return (
    <>
      <header className='container'>
        <Link to='/' className='logo'>
          <img
            src='/logo_mercadolibre.png'
            alt='Logo Shop'
          />
        </Link>

        <form onSubmit={onSearchSubmit}>
          <div className='form-group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='icon-search'
            >
              <path
  
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='search'
              name='valueSearch'
              id=''
              value={valueSearch}
              onChange={onInputChange}
              placeholder='Buscar Producto'
            />
          </div>

          <button className='btn-search'>Buscar</button>

        </form>
        {/** 
        <div className='container-cart-person'>
          <div className='container-cart'>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />

            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="icon icon-tabler icons-tabler-outline icon-tabler-user">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
          </div>
        </div>
        */}

      </header>

      <Outlet />
    </>
  )
}