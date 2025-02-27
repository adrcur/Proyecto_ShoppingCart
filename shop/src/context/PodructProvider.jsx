
import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import { useForm } from '../hook/useForm';

export const PodructProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([])
  const [pageProducts, setPageProducts] = useState([])
  const [offset, setOffset] = useState(0)

  // Utilizar CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  })

  // Estados para la aplicación simples
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)


  // Llamar 10 productos
  const getPageProducts = async (limit = 10) => {
    const baseURL = 'https://api.escuelajs.co/api/v1/'

    try {
      const res = await fetch(`${baseURL}products?offset=${offset}&limit=${limit}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()

      setPageProducts(data);
      setLoading(false)
      console.log('getPageProducts')

    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }


  // Llamar todos los productos
  const getAllProducts = async () => {
    const baseURL = 'https://api.escuelajs.co/api/v1/'

    try {
      const res = await fetch(`${baseURL}products`)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()

      setAllProducts(data)
      setLoading(false)
      console.log('getAllProducts')
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }



  // Llamar a un producto por ID
  const getProductByID = async (id) => {
    const baseURL = 'https://api.escuelajs.co/api/v1/'

    try {
      const res = await fetch(`${baseURL}products/${id}`)
      console.log('getProductByID')
      console.log(res.url)

      if (!res.ok) {
        if (res.status === 404) {
          return null // Producto no encontrado
        }
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      console.log(data)

      return data
    } catch (error) {
      console.error('Error fetching product by ID:', error)
      return null // Retorna null en caso de error
    }
  }

  useEffect(() => {
    getPageProducts()
  }, [])

  useEffect(() => {
    getAllProducts()
  }, [])

  // BTN CARGAR MÁS
  const onClickLoadMore = () => {
    setOffset(offset + 10)
  }

  const [filteredProducts] = useState([])

  
  return (
    <ProductContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allProducts,
        pageProducts,
        getProductByID,
        onClickLoadMore,
        // Loader
        loading,
        setLoading,
        // Btn Filter
        active,
        setActive,
        // Filter
        filteredProducts,        
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}