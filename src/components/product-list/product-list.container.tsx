import {ProductListView} from "./product-list.view";
import {useDispatch, useSelector} from "react-redux";

export const ProductListContainer = () => {
    const { productsList } = useSelector(({ productsReducer }: any) => productsReducer)
    const dispatch = useDispatch()
    return (
            <ProductListView productsList={productsList}/>
    )
}