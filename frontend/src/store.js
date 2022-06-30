import {combineReducers, applyMiddleware, configStore} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk]

const store = configStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store