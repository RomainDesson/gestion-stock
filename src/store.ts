import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { reducer } from './redux/reducer'

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  middlewares.push(createLogger())
}
export const store = createStore(reducer, applyMiddleware(...middlewares))
