import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// applyMiddleware - mozliwość zwracania funkcji w funkcji
const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;