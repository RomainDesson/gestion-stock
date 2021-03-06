import { ModifyPriceView } from './modify-price.view'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateProductData } from '../../../redux/products/products.action'

interface IProps {
  children: number
  id: number
}

export const ModifyPriceContainer = ({ children, id }: IProps) => {
  const dispatch = useDispatch()
  const userToken = localStorage.getItem('token')
  const headers = {
    'content-type': 'application/JSON',
    Authorization: `Bearer ${userToken}`
  }
  const updatePricePlus = async () => {
    const res: Product = await axios.put(
      'http://localhost:1337/products/' + id,
      { price: `${children + 1}` },
      { headers: headers }
    )
    dispatch(updateProductData(res))
  }
  const updatePriceMinus = async () => {
    if (children > 0) {
      const res: Product = await axios.put(
        'http://localhost:1337/products/' + id,
        { price: `${children - 1}` },
        { headers: headers }
      )
      dispatch(updateProductData(res))
    }
  }
  return (
    <ModifyPriceView
      children={children}
      updatePricePlus={updatePricePlus}
      updatePriceMinus={updatePriceMinus}
    />
  )
}
