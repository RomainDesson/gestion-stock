import {DeleteProductView} from "./delete-product.view";
import axios from "axios";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/products/products.action";

interface IProps {
    id: number
}

export const DeleteProductContainer = ({id}: IProps) => {
    const userToken = localStorage.getItem('token')
    const dispatch = useDispatch()
    const headers = {
        'content-type': 'application/JSON',
        'Authorization': `Bearer ${userToken}`
    }
    const deleteFromApi = async () => {
        try {
            await axios.delete('http://localhost:1337/products/' + id, {
                headers: headers
            })
        } catch(e) {
                console.log(e)
            }
    }
    const _deleteProduct = () => {
        deleteFromApi()
        dispatch(deleteProduct(id))
    }

    return <DeleteProductView deleteFromApi={_deleteProduct} />
}