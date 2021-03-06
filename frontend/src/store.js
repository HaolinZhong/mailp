import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { courseListReducer } from "./reducers/courseReducer";

const reducer = combineReducers({
    courseList: courseListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store