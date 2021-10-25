import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ProductListReducer as ProductList } from './ProductList/reducer';
import { DeleteHandler } from './DeleteHandler/reducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    ProductList,
    DeleteHandler,
});

const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default store;
