import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productsReducer } from './products/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducers = combineReducers({
  productsReducer
})

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store