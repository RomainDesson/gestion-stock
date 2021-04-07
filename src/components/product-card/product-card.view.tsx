import { DeleteProductContainer } from '../../features/delete-product/delete-product.container'
import { ModifyPriceContainer } from '../../features/modify-product/modify-price/modify-price.container'

interface IProps {
  id: number
  productName: string
  price: number
  quantity: number
}

export const ProductCardView = ({
  id,
  productName,
  price,
  quantity
}: IProps) => {
  return (
    <tr>
      <td className={'border'}>{productName}</td>
      <td className={'text-center border'}>
        <ModifyPriceContainer id={id}>{price}</ModifyPriceContainer>
      </td>
      <td className={'text-center border'}>{quantity}</td>
      <td className={'text-center border'}>
        <DeleteProductContainer id={id} />
      </td>
    </tr>
  )
}
