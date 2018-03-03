//@flow
import { createStore, applyMiddleware } from "redux";
import { itemsReducer } from "./reducers/ItemsReducer";
import thunk from "redux-thunk";

export const store = createStore(itemsReducer, applyMiddleware(thunk));
