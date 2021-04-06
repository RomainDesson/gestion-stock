import { AddProductContainer } from '../../features/add-product/add-product.container'
import { ProductCardContainer } from '../product-card/product-card.container'

interface IProps {
  productsList: []
}

export const ProductListView = ({ productsList }: IProps) => {
  return (
    <div className={'flex flex-col items-center'}>
      <AddProductContainer />
      <table className={'border table-fixed w-3/4 mt-20'}>
        <thead>
          <tr className={'border'}>
            <th className={'w-2/5'}>Nom</th>
            <th className={'w-1/5'}>Prix</th>
            <th className={'w-1/5'}>Quantité</th>
            <th className={'w-1/5'}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product: any) => {
            return (
              <ProductCardContainer
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
