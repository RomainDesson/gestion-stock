import { Action } from '../action.helper'
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  UPDATE_PRICE_PRODUCT
} from './products.action'

export const initialState = {
  productsList: []
}

export const productsReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
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
    case UPDATE_PRICE_PRODUCT: {
      return {
        ...state,
        productsList: [
          ...state.productsList.map((product: Product) =>
            product.id === payload.data.id ? payload.data : product
          )
        ]
      }
    }
    default:
      return state
  }
}
