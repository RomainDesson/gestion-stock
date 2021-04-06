import {combineReducers} from "redux";
import {loginReducer} from "./login/login.reducer";
import {productsReducer} from "./products/product.reducer";

export const reducer = combineReducers({
    loginReducer,
    productsReducer
  }
)