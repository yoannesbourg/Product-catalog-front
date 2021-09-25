import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ProductListReducer as ProductList } from './ProductList/reducer';
import { ActualProduct } from './ActualProduct/reducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    ProductList,
    ActualProduct,
});

const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default store;
