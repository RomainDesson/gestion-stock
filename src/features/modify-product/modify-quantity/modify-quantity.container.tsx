import { ModifyQuantityView } from './modify-quantity.view'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateProductData } from '../../../redux/products/products.action'

interface IProps {
  children: number
  id: number
}

export const ModifyQuantityContainer = ({ children, id }: IProps) => {
  const dispatch = useDispatch()
  const userToken = localStorage.getItem('token')
  const headers = {
    'content-type': 'application/JSON',
    Authorization: `Bearer ${userToken}`
  }
  const updateQuantityPlus = async () => {
    const res: Product = await axios.put(
      'http://localhost:1337/products/' + id,
      { quantity: `${children + 1}` },
      { headers: headers }
    )
    dispatch(updateProductData(res))
  }
  const updateQuantityMinus = async () => {
    if (children > 0) {
      const res: Product = await axios.put(
        'http://localhost:1337/products/' + id,
        { quantity: `${children - 1}` },
        { headers: headers }
      )
      dispatch(updateProductData(res))
    }
  }
  return (
    <ModifyQuantityView
      children={children}
      updateQuantityMinus={updateQuantityMinus}
      updateQuantityPlus={updateQuantityPlus}
    />
  )
}
