import {ProductCardView} from "./product-card.view";

interface IProps {
    id: number,
    productname: string,
    price: number,
    quantity: number
}

export const ProductCardContainer = ({id, productname, price, quantity}: IProps) => {
    return <ProductCardView id={id} price={price} productname={productname} quantity={quantity}/>
}