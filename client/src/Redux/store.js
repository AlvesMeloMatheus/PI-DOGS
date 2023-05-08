import { applyMiddleware, createStore , compose} from 'redux'
import thunkMiddleware from "redux-thunk";
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ^- Linea para conectar con la extensión del navegador => REDUX DEVTOOLS -^

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    // ^- linea para hacer peticiones al servidor -^
);

export default store;