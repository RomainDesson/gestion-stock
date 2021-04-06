import {DeleteProductContainer} from "../../features/delete-product/delete-product.container";

interface IProps {
    id: number,
    productname: string,
    price: number,
    quantity: number
}

export const ProductCardView = ({id, productname, price, quantity}: IProps) => {
    return (
        <tr>
            <td className={"border"}>{productname}</td>
            <td className={"text-center border"}>{price}€</td>
            <td className={"text-center border"}>{quantity}</td>
            <td className={"text-center border"}><DeleteProductContainer id={id}/></td>
        </tr>
    )
}