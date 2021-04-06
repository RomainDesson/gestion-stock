import { ProductCardView } from './product-card.view'

interface IProps {
  id: number
  productName: string
  price: number
  quantity: number
}

export const ProductCardContainer = ({
  id,
  productName,
  price,
  quantity
}: IProps) => {
  return (
    <ProductCardView
      id={id}
      price={price}
      productName={productName}
      quantity={quantity}
    />
  )
}
