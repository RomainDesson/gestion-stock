import {useState} from "react";
import axios from "axios";
import {AddProductView} from "./add-product.view";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/products/products.action";
import {useFetch} from "../../custom-hooks/useFetch";

export const AddProductContainer = () => {
    const [productFormDisplay, setProductFormDisplay] = useState(false)
    const userToken = localStorage.getItem('token')
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        productname: '',
        price: 0,
        quantity: 0
    })
    const headers = {
        'content-type': 'application/JSON',
        'Authorization': `Bearer ${userToken}`
    }
    const showProductForm = () => {
        if (!productFormDisplay) {
            setProductFormDisplay(true)
        } else {
            setProductFormDisplay(false)
        }
    }
    const handleFieldChange = (e: any) => {
        const values = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: values
        })
    }
    const pickProductData = async (data: any) => {
        try {
            const dbProduct = await axios.post('http://localhost:1337/products', data, {
                headers: headers
            })
            dispatch(addProduct(dbProduct.data))
        } catch(e) {
            console.log(e)
        }
    }
    const _addProduct = (data: object) => {
        pickProductData(data)
    }
    useFetch()
    return (
        <AddProductView showProductForm={showProductForm} productFormDisplay={productFormDisplay}
                         _addProduct={_addProduct} handleFieldChange={handleFieldChange} formData={formData}/>
    )
}