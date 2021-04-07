import { Action } from '../action.helper'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const UPDATE_PRODUCT_DATA = 'UPDATE_PRODUCT_DATA'

export const fetchProducts = (data: any) => {
  return {
    type: FETCH_PRODUCTS,
    payload: data
  }
}
export const addProduct = (data: any): Action => {
  return {
    type: ADD_PRODUCT,
    payload: data
  }
}
export const deleteProduct = (id: number): Action => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}
export const updateProductData = (product: Product): Action => {
  return {
    type: UPDATE_PRODUCT_DATA,
    payload: product
  }
}
