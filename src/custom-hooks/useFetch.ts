import { useEffect } from 'react'
import axios from 'axios'
import { fetchProducts } from '../redux/products/products.action'
import { useDispatch } from 'react-redux'

export const useFetch = () => {
  const userToken = localStorage.getItem('token')
  const dispatch = useDispatch()
  const headers = {
    'content-type': 'application/JSON',
    Authorization: `Bearer ${userToken}`
  }
  const fetchProductList = async () => {
    try {
      const { data: products } = await axios.get(
        'http://localhost:1337/products',
        {
          headers: headers
        }
      )
      dispatch(fetchProducts(products))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchProductList()
  }, [])
}
