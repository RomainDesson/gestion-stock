import {Action} from '../action.helper'
import {ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS} from './products.action'

export const initialState = {
    productsList: []
}

export const productsReducer = (state = initialState, {type, payload}: Action) => {
    switch(type) {
        case FETCH_PRODUCTS: {
            return {
                ...state,
                productsList: [...state.productsList.concat(payload)]
            }
        }
        case ADD_PRODUCT: {
            return {
                ...state,
                productsList: [...state.productsList.concat(payload)]
            }

        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                productsList: [
                    ...state.productsList.filter(
                    (product: Product) => product.id !== payload
                    )
                ]
            }
        }
        default:
            return state
    }
}