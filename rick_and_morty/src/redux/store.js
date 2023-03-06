import { createStore, applyMiddleware, compose } from "redux";
import { thunkMiddleware } from "redux-thunk";
import reducer from './reducer'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTESION_COMPOSE || compose;  // Esta linea es para la extension para conectar con el navegador 

const store= createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;